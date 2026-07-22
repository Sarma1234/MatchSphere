const Conversation = require("../models/Conversation");

class ConversationRepository {

    /* -------------------------------------------------------------------------- */
    /*                           Create Conversation                              */
    /* -------------------------------------------------------------------------- */

    async create(conversationData) {

        return await Conversation.create(
            conversationData
        );

    }

    /* -------------------------------------------------------------------------- */
    /*                            Find Conversation                               */
    /* -------------------------------------------------------------------------- */

    async findById(conversationId) {

        return await Conversation.findById(
            conversationId
        )
            .populate(
                "participants",
                "-password"
            )
            .populate({
                path: "match",
                populate: [
                    {
                        path: "userOne",
                        select: "-password",
                    },
                    {
                        path: "userTwo",
                        select: "-password",
                    },
                ],
            });

    }

    async findByMatchId(matchId) {

        return await Conversation.findOne({

            match: matchId,

        });

    }

    async exists(matchId) {

        return await Conversation.exists({

            match: matchId,

        });

    }

    /* -------------------------------------------------------------------------- */
    /*                         Participant Queries                                */
    /* -------------------------------------------------------------------------- */

    async findByParticipants(userId) {

        return await Conversation.find({

            participants: userId,

            isActive: true,

        })

            .populate(
                "participants",
                "-password"
            )

            .populate("match")

            .sort({

                lastMessageAt: -1,

                updatedAt: -1,

            });

    }

    async isParticipant(
        conversationId,
        userId
    ) {

        return await Conversation.exists({

            _id: conversationId,

            participants: userId,

        });

    }
    /* -------------------------------------------------------------------------- */
/*                        User Conversation List                              */
/* -------------------------------------------------------------------------- */

async findUserConversations(userId) {

    return await Conversation.find({

        participants: userId,

        isActive: true,

    })

        .populate(
            "participants",
            "-password"
        )

        .populate("match")

        .sort({

            lastMessageAt: -1,

            updatedAt: -1,

        });

}

    /* -------------------------------------------------------------------------- */
    /*                             Conversation State                             */
    /* -------------------------------------------------------------------------- */

    async archiveConversation(
        conversationId
    ) {

        return await Conversation.findByIdAndUpdate(

            conversationId,

            {
                isActive: false,
            },

            {
                new: true,
            }

        );

    }

    async activateConversation(
        conversationId
    ) {

        return await Conversation.findByIdAndUpdate(

            conversationId,

            {
                isActive: true,
            },

            {
                new: true,
            }

        );

    }

    async deleteConversation(
        conversationId
    ) {

        return await Conversation.findByIdAndDelete(
            conversationId
        );

    }

    async deleteConversationByMatch(
        matchId
    ) {

        return await Conversation.findOneAndDelete({

            match: matchId,

        });

    }

    /* -------------------------------------------------------------------------- */
    /*                          Last Message Updates                              */
    /* -------------------------------------------------------------------------- */

    async updateLastMessage({

        conversationId,

        message,

        senderId,

        messageType,

        createdAt,

    }) {

        return await Conversation.findByIdAndUpdate(

            conversationId,

            {
                lastMessage: message,

                lastMessageSender: senderId,

                lastMessageType: messageType,

                lastMessageAt: createdAt,

            },

            {
                new: true,
            }

        );

    }

    async clearLastMessage(
        conversationId
    ) {

        return await Conversation.findByIdAndUpdate(

            conversationId,

            {

                lastMessage: "",

                lastMessageSender: null,

                lastMessageType: "text",

                lastMessageAt: null,

            },

            {
                new: true,
            }

        );

    }

    /* -------------------------------------------------------------------------- */
    /*                             Unread Counter                                 */
    /* -------------------------------------------------------------------------- */

    async incrementUnreadCount(
        conversationId,
        receiverId
    ) {

        return await Conversation.findOneAndUpdate(

            {

                _id: conversationId,

                "unreadCount.user": receiverId,

            },

            {

                $inc: {

                    "unreadCount.$.count": 1,

                },

            },

            {

                new: true,

            }

        );

    }

    async resetUnreadCount(
        conversationId,
        userId
    ) {

        return await Conversation.findOneAndUpdate(

            {

                _id: conversationId,

                "unreadCount.user": userId,

            },

            {

                $set: {

                    "unreadCount.$.count": 0,

                },

            },

            {

                new: true,

            }

        );

    }

    /* -------------------------------------------------------------------------- */
    /*                              Future Helpers                                */
    /* -------------------------------------------------------------------------- */

    async updateConversation(
        conversationId,
        updateData
    ) {

        return await Conversation.findByIdAndUpdate(

            conversationId,

            updateData,

            {
                new: true,
            }

        );

    }

    async countConversations(
        userId
    ) {

        return await Conversation.countDocuments({

            participants: userId,

        });

    }

    async getConversationIds(
        userId
    ) {

        const conversations =
            await Conversation.find({

                participants: userId,

            }).select("_id");

        return conversations.map(

            (conversation) => conversation._id

        );

    }

}

module.exports = new ConversationRepository();
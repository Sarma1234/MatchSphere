const Message = require("../models/Message");

class MessageRepository {

    /* -------------------------------------------------------------------------- */
    /*                              Create Message                                */
    /* -------------------------------------------------------------------------- */

    async create(messageData) {

        return await Message.create(messageData);

    }

    /* -------------------------------------------------------------------------- */
    /*                               Find Message                                 */
    /* -------------------------------------------------------------------------- */

    async findById(messageId) {

        return await Message.findById(messageId)

            .populate(
                "sender",
                "-password"
            )

            .populate({
                path: "replyTo",
                populate: {
                    path: "sender",
                    select: "-password",
                },
            });

    }

    async exists(messageId) {

        return await Message.exists({
            _id: messageId,
        });

    }

    /* -------------------------------------------------------------------------- */
    /*                             Conversation Messages                          */
    /* -------------------------------------------------------------------------- */

    async findConversationMessages(

        conversationId,

        page = 1,

        limit = 20

    ) {

        const skip = (page - 1) * limit;

        return await Message.find({

            conversation: conversationId,

            isDeleted: false,

        })

            .populate(
                "sender",
                "-password"
            )

            .populate({
                path: "replyTo",
                populate: {
                    path: "sender",
                    select: "-password",
                },
            })

            .sort({
                createdAt: -1,
            })

            .skip(skip)

            .limit(limit);

    }

    async countConversationMessages(
        conversationId
    ) {

        return await Message.countDocuments({

            conversation: conversationId,

            isDeleted: false,

        });

    }

    /* -------------------------------------------------------------------------- */
    /*                              Seen Operations                               */
    /* -------------------------------------------------------------------------- */

    async markSeen(
        messageId,
        userId
    ) {

        return await Message.findOneAndUpdate(

            {

                _id: messageId,

                seenBy: {
                    $ne: userId,
                },

            },

            {

                $push: {

                    seenBy: userId,

                },

            },

            {

                new: true,

            }

        );

    }

    async markConversationSeen(

        conversationId,

        userId

    ) {

        return await Message.updateMany(

            {

                conversation: conversationId,

                sender: {
                    $ne: userId,
                },

                seenBy: {
                    $ne: userId,
                },

                isDeleted: false,

            },

            {

                $push: {

                    seenBy: userId,

                },

            }

        );

    }

    /* -------------------------------------------------------------------------- */
    /*                             Delete Operations                              */
    /* -------------------------------------------------------------------------- */

    async softDelete(
        messageId
    ) {

        return await Message.findByIdAndUpdate(

            messageId,

            {

                isDeleted: true,

                deletedAt: new Date(),

            },

            {

                new: true,

            }

        );

    }

    async deleteConversationMessages(
        conversationId
    ) {

        return await Message.deleteMany({

            conversation: conversationId,

        });

    }

    /* -------------------------------------------------------------------------- */
    /*                              Reply Helpers                                 */
    /* -------------------------------------------------------------------------- */

    async findReplyMessage(
        messageId
    ) {

        return await Message.findById(messageId)
            .select("_id");

    }

    /* -------------------------------------------------------------------------- */
    /*                             Future Helpers                                 */
    /* -------------------------------------------------------------------------- */

    async getLastMessage(
        conversationId
    ) {

        return await Message.findOne({

            conversation: conversationId,

            isDeleted: false,

        })

            .sort({

                createdAt: -1,

            });

    }

    async update(
        messageId,
        updateData
    ) {

        return await Message.findByIdAndUpdate(

            messageId,

            updateData,

            {

                new: true,

            }

        );

    }

}

module.exports = new MessageRepository();
const conversationRepository = require("../repositories/ConversationRepository");
const messageRepository = require("../repositories/MessageRepository");
const matchRepository = require("../repositories/MatchRepository");
const ApiError = require("../utils/ApiError");

class ChatService {

    /* ---------------------------------------------------------------------- */
    /*                        Create Conversation                             */
    /* ---------------------------------------------------------------------- */

    async createConversation(matchId) {

        const match = await matchRepository.findById(matchId);

        if (!match) {

            throw new ApiError(
                404,
                "Match not found."
            );

        }

        const existingConversation =
            await conversationRepository.findByMatch(matchId);

        if (existingConversation) {

            return existingConversation;

        }

        const conversation =
            await conversationRepository.create({

                match: match._id,

                participants: [

                    match.userOne._id,

                    match.userTwo._id,

                ],

                unreadCount: [

                    {
                        user: match.userOne._id,
                        count: 0,
                    },

                    {
                        user: match.userTwo._id,
                        count: 0,
                    },

                ],

            });

        return await conversationRepository.findById(
            conversation._id
        );

    }

    /* ---------------------------------------------------------------------- */
    /*                      Get User Conversations                            */
    /* ---------------------------------------------------------------------- */

    async getUserConversations(userId) {

        return await conversationRepository.findUserConversations(userId);

    }

    /* ---------------------------------------------------------------------- */
    /*                    Get Conversation Messages                           */
    /* ---------------------------------------------------------------------- */

    async getConversationMessages(
        conversationId,
        userId,
        page = 1,
        limit = 30
    ) {

        const conversation =
            await conversationRepository.findById(conversationId);

        if (!conversation) {

            throw new ApiError(
                404,
                "Conversation not found."
            );

        }

        const isParticipant =
            conversation.participants.some(

                participant =>
                    participant._id.toString() === userId.toString()

            );

        if (!isParticipant) {

            throw new ApiError(
                403,
                "Unauthorized access."
            );

        }

        return await messageRepository.findConversationMessages(
            conversationId,
            page,
            limit
        );

    }

    /* ---------------------------------------------------------------------- */
    /*                           Send Message                                 */
    /* ---------------------------------------------------------------------- */

    async sendMessage(
        senderId,
        messageData
    ) {

        const {
            conversationId,
            message,
            attachments = [],
            messageType = "text",
            replyTo = null,
        } = messageData;

        const conversation =
            await conversationRepository.findById(conversationId);

        if (!conversation) {

            throw new ApiError(
                404,
                "Conversation not found."
            );

        }

        const isParticipant =
            conversation.participants.some(

                participant =>
                    participant._id.toString() === senderId.toString()

            );

        if (!isParticipant) {

            throw new ApiError(
                403,
                "Unauthorized access."
            );

        }

        const createdMessage =
            await messageRepository.create({

                conversation: conversationId,

                sender: senderId,

                message,

                attachments,

                messageType,

                replyTo,

                seenBy: [senderId],

            });

       await conversationRepository.updateLastMessage({

    conversationId,

    message:

        messageType === "text"

            ? message

            : `Sent a ${messageType}`,

    senderId,

    messageType,

    createdAt: createdMessage.createdAt,

});
        const receiver =
            conversation.participants.find(

                participant =>
                    participant._id.toString() !== senderId.toString()

            );

        if (receiver) {

            await conversationRepository.incrementUnreadCount(

                conversationId,

                receiver._id

            );

        }

        return await messageRepository.findById(
            createdMessage._id
        );

    }

}

module.exports = new ChatService();
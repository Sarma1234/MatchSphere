const conversationRepository = require("../repositories/ConversationRepository");
const matchRepository = require("../repositories/MatchRepository");

const ApiError = require("../utils/ApiError");

class ConversationService {

    /* -------------------------------------------------------------------------- */
    /*                           Create Conversation                              */
    /* -------------------------------------------------------------------------- */

    async createConversation(match) {

        const existingConversation =
            await conversationRepository.findByMatchId(
                match._id
            );

        if (existingConversation) {
            return existingConversation;
        }

        const conversation =
            await conversationRepository.create({

                match: match._id,

                participants: [
                    match.userOne,
                    match.userTwo,
                ],

                unreadCount: [
                    {
                        user: match.userOne,
                        count: 0,
                    },
                    {
                        user: match.userTwo,
                        count: 0,
                    },
                ],

                lastMessage: "",

                lastMessageSender: null,

                lastMessageType: "text",

                lastMessageAt: null,

                isActive: true,

            });

        return conversation;

    }

    /* -------------------------------------------------------------------------- */
    /*                          Get My Conversations                              */
    /* -------------------------------------------------------------------------- */

    async getMyConversations(userId) {

        return await conversationRepository.findByParticipants(
            userId
        );

    }

    /* -------------------------------------------------------------------------- */
    /*                           Get Conversation                                 */
    /* -------------------------------------------------------------------------- */

    async getConversation(

        conversationId,

        userId

    ) {

        await this.validateParticipant(

            conversationId,

            userId

        );

        const conversation =
            await conversationRepository.findById(
                conversationId
            );

        if (!conversation) {

            throw new ApiError(
                404,
                "Conversation not found."
            );

        }

        return conversation;

    }

    /* -------------------------------------------------------------------------- */
    /*                          Archive Conversation                              */
    /* -------------------------------------------------------------------------- */

    async archiveConversation(

        conversationId,

        userId

    ) {

        await this.validateParticipant(

            conversationId,

            userId

        );

        return await conversationRepository.archiveConversation(
            conversationId
        );

    }

    /* -------------------------------------------------------------------------- */
    /*                    Update After Sending Message                            */
    /* -------------------------------------------------------------------------- */

    async updateConversationAfterMessage({

        conversationId,

        senderId,

        message,

        messageType,

        createdAt,

    }) {

        const conversation =
            await conversationRepository.findById(
                conversationId
            );

        if (!conversation) {

            throw new ApiError(
                404,
                "Conversation not found."
            );

        }

        if (!conversation.isActive) {

            throw new ApiError(
                400,
                "Conversation is archived."
            );

        }

        const receiver = conversation.participants.find(

            (participant) =>

                String(participant._id || participant) !==
                String(senderId)

        );

        await conversationRepository.updateLastMessage({

            conversationId,

            senderId,

            message,

            messageType,

            createdAt,

        });

        if (receiver) {

            await conversationRepository.incrementUnreadCount(

                conversationId,

                receiver._id || receiver

            );

        }

    }

    /* -------------------------------------------------------------------------- */
    /*                         Reset Unread Counter                               */
    /* -------------------------------------------------------------------------- */

    async resetUnreadCount(

        conversationId,

        userId

    ) {

        await this.validateParticipant(

            conversationId,

            userId

        );

        return await conversationRepository.resetUnreadCount(

            conversationId,

            userId

        );

    }

    /* -------------------------------------------------------------------------- */
    /*                           Delete Conversation                              */
    /* -------------------------------------------------------------------------- */

    async deleteConversationByMatch(
        matchId
    ) {

        return await conversationRepository.deleteConversationByMatch(
            matchId
        );

    }

    /* -------------------------------------------------------------------------- */
    /*                           Validation Helpers                               */
    /* -------------------------------------------------------------------------- */

    async validateParticipant(

        conversationId,

        userId

    ) {

        const exists =
            await conversationRepository.isParticipant(

                conversationId,

                userId

            );

        if (!exists) {

            throw new ApiError(

                403,

                "You are not a participant of this conversation."

            );

        }

    }

    async validateMatch(matchId) {

        const match =
            await matchRepository.findById(
                matchId
            );

        if (!match) {

            throw new ApiError(
                404,
                "Match not found."
            );

        }

        if (match.status !== "matched") {

            throw new ApiError(
                400,
                "Conversation can only exist for matched users."
            );

        }

        return match;

    }

}

module.exports = new ConversationService();
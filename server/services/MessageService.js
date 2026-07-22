const messageRepository = require("../repositories/MessageRepository");
const conversationService = require("./ConversationService");

const ApiError = require("../utils/ApiError");

class MessageService {

    /* -------------------------------------------------------------------------- */
    /*                               Send Message                                 */
    /* -------------------------------------------------------------------------- */

    async sendMessage({

        conversationId,

        senderId,

        message,

        attachments = [],

        messageType = "text",

        replyTo = null,

    }) {

        /* ---------------------------------------------------------------------- */
        /*                     Validate Conversation                              */
        /* ---------------------------------------------------------------------- */

        const conversation =
            await conversationService.getConversation(

                conversationId,

                senderId

            );

        if (!conversation.isActive) {

            throw new ApiError(
                400,
                "Conversation is archived."
            );

        }

        /* ---------------------------------------------------------------------- */
        /*                         Validate Reply                                 */
        /* ---------------------------------------------------------------------- */

        if (replyTo) {

            const replyMessage =
                await messageRepository.findReplyMessage(
                    replyTo
                );

            if (!replyMessage) {

                throw new ApiError(
                    404,
                    "Reply message not found."
                );

            }

        }

        /* ---------------------------------------------------------------------- */
        /*                          Validate Content                              */
        /* ---------------------------------------------------------------------- */

        if (

            !message?.trim() &&

            attachments.length === 0

        ) {

            throw new ApiError(

                400,

                "Message cannot be empty."

            );

        }

        /* ---------------------------------------------------------------------- */
        /*                           Create Message                               */
        /* ---------------------------------------------------------------------- */

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

        const populatedMessage =
            await messageRepository.findById(
                createdMessage._id
            );

        /* ---------------------------------------------------------------------- */
        /*                    Update Conversation                                 */
        /* ---------------------------------------------------------------------- */

        await conversationService.updateConversationAfterMessage({

            conversationId,

            senderId,

            message,

            messageType,

            createdAt: populatedMessage.createdAt,

        });

        return populatedMessage;

    }

    /* -------------------------------------------------------------------------- */
    /*                              Load Messages                                */
    /* -------------------------------------------------------------------------- */

    async loadMessages({

        conversationId,

        userId,

        page = 1,

        limit = 20,

    }) {

        await conversationService.validateParticipant(

            conversationId,

            userId

        );

        const messages =
            await messageRepository.findConversationMessages(

                conversationId,

                page,

                limit

            );

        await conversationService.resetUnreadCount(

            conversationId,

            userId

        );

        await messageRepository.markConversationSeen(

            conversationId,

            userId

        );

        return {

            messages: messages.reverse(),

            pagination: {

                page,

                limit,

                total:

                    await messageRepository.countConversationMessages(
                        conversationId
                    ),

            },

        };

    }

    /* -------------------------------------------------------------------------- */
    /*                             Mark Message Seen                             */
    /* -------------------------------------------------------------------------- */

    async markSeen(

        messageId,

        userId

    ) {

        const message =
            await messageRepository.findById(
                messageId
            );

        if (!message) {

            throw new ApiError(
                404,
                "Message not found."
            );

        }

        await conversationService.validateParticipant(

            message.conversation,

            userId

        );

        return await messageRepository.markSeen(

            messageId,

            userId

        );

    }

    /* -------------------------------------------------------------------------- */
    /*                              Delete Message                               */
    /* -------------------------------------------------------------------------- */

    async deleteMessage(

        messageId,

        userId

    ) {

        const message =
            await messageRepository.findById(
                messageId
            );

        if (!message) {

            throw new ApiError(
                404,
                "Message not found."
            );

        }

        if (

            String(message.sender._id) !==

            String(userId)

        ) {

            throw new ApiError(

                403,

                "You can only delete your own messages."

            );

        }

        return await messageRepository.softDelete(
            messageId
        );

    }

    /* -------------------------------------------------------------------------- */
    /*                             Reply Message                                 */
    /* -------------------------------------------------------------------------- */

    async replyMessage(payload) {

        return await this.sendMessage(payload);

    }

}

module.exports = new MessageService();
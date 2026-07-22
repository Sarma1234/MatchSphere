const chatService = require("../services/ChatService");

/* -------------------------------------------------------------------------- */
/*                           Get User Conversations                           */
/* -------------------------------------------------------------------------- */

class ChatController {

    async getUserConversations(req, res, next) {

        try {

            const conversations =
                await chatService.getUserConversations(req.user.id);

            return res.status(200).json({

                success: true,

                message: "Conversations fetched successfully.",

                data: conversations,

            });

        } catch (error) {

            next(error);

        }

    }

    /* ---------------------------------------------------------------------- */
    /*                      Get Conversation Messages                         */
    /* ---------------------------------------------------------------------- */

    async getConversationMessages(req, res, next) {

        try {

            const { conversationId } = req.params;

            const { page = 1, limit = 30 } = req.query;

            const messages =
                await chatService.getConversationMessages(

                    conversationId,

                    req.user.id,

                    Number(page),

                    Number(limit)

                );

            return res.status(200).json({

                success: true,

                message: "Messages fetched successfully.",

                data: messages,

            });

        } catch (error) {

            next(error);

        }

    }

    /* ---------------------------------------------------------------------- */
    /*                           Send Message                                 */
    /* ---------------------------------------------------------------------- */

    async sendMessage(req, res, next) {

        try {

            const message =
                await chatService.sendMessage(

                    req.user.id,

                    req.body

                );

            return res.status(201).json({

                success: true,

                message: "Message sent successfully.",

                data: message,

            });

        } catch (error) {

            next(error);

        }

    }

}

module.exports = new ChatController();
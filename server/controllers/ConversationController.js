const asyncHandler = require("../utils/asyncHandler");

const conversationService = require("../services/ConversationService");

/* -------------------------------------------------------------------------- */
/*                          Get My Conversations                              */
/* -------------------------------------------------------------------------- */

exports.getMyConversations = asyncHandler(

    async (req, res) => {

        const conversations =
            await conversationService.getMyConversations(
                req.user._id
            );

        return res.status(200).json({

            success: true,

            message: "Conversations fetched successfully.",

            data: conversations,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                           Get Conversation                                 */
/* -------------------------------------------------------------------------- */

exports.getConversation = asyncHandler(

    async (req, res) => {

        const { conversationId } = req.params;

        const conversation =
            await conversationService.getConversation(

                conversationId,

                req.user._id

            );

        return res.status(200).json({

            success: true,

            message: "Conversation fetched successfully.",

            data: conversation,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                         Archive Conversation                               */
/* -------------------------------------------------------------------------- */

exports.archiveConversation = asyncHandler(

    async (req, res) => {

        const { conversationId } = req.params;

        const conversation =
            await conversationService.archiveConversation(

                conversationId,

                req.user._id

            );

        return res.status(200).json({

            success: true,

            message: "Conversation archived successfully.",

            data: conversation,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                          Reset Unread Count                                */
/* -------------------------------------------------------------------------- */

exports.resetUnreadCount = asyncHandler(

    async (req, res) => {

        const { conversationId } = req.params;

        const conversation =
            await conversationService.resetUnreadCount(

                conversationId,

                req.user._id

            );

        return res.status(200).json({

            success: true,

            message: "Unread count reset successfully.",

            data: conversation,

        });

    }

);
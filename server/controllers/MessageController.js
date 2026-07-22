const asyncHandler = require("../utils/asyncHandler");

const messageService = require("../services/MessageService");

/* -------------------------------------------------------------------------- */
/*                              Send Message                                  */
/* -------------------------------------------------------------------------- */

exports.sendMessage = asyncHandler(

    async (req, res) => {

        const {

            conversationId,

            message,

            attachments,

            messageType,

            replyTo,

        } = req.body;

        const createdMessage =
            await messageService.sendMessage({

                conversationId,

                senderId: req.user._id,

                message,

                attachments,

                messageType,

                replyTo,

            });

        return res.status(201).json({

            success: true,

            message: "Message sent successfully.",

            data: createdMessage,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                              Load Messages                                 */
/* -------------------------------------------------------------------------- */

exports.loadMessages = asyncHandler(

    async (req, res) => {

        const { conversationId } = req.params;

        const page =
            Number(req.query.page) || 1;

        const limit =
            Number(req.query.limit) || 20;

        const data =
            await messageService.loadMessages({

                conversationId,

                userId: req.user._id,

                page,

                limit,

            });

        return res.status(200).json({

            success: true,

            message: "Messages fetched successfully.",

            data,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                           Mark Message Seen                                */
/* -------------------------------------------------------------------------- */

exports.markSeen = asyncHandler(

    async (req, res) => {

        const { messageId } = req.params;

        const message =
            await messageService.markSeen(

                messageId,

                req.user._id

            );

        return res.status(200).json({

            success: true,

            message: "Message marked as seen.",

            data: message,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                            Delete Message                                  */
/* -------------------------------------------------------------------------- */

exports.deleteMessage = asyncHandler(

    async (req, res) => {

        const { messageId } = req.params;

        const message =
            await messageService.deleteMessage(

                messageId,

                req.user._id

            );

        return res.status(200).json({

            success: true,

            message: "Message deleted successfully.",

            data: message,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                             Reply Message                                  */
/* -------------------------------------------------------------------------- */

exports.replyMessage = asyncHandler(

    async (req, res) => {

        const {

            conversationId,

            message,

            attachments,

            messageType,

            replyTo,

        } = req.body;

        const reply =
            await messageService.replyMessage({

                conversationId,

                senderId: req.user._id,

                message,

                attachments,

                messageType,

                replyTo,

            });

        return res.status(201).json({

            success: true,

            message: "Reply sent successfully.",

            data: reply,

        });

    }

);
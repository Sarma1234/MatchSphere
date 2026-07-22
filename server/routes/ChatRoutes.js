const express = require("express");

const chatController = require("../controllers/ChatController");

const protect = require("../middleware/auth");
const validate = require("../middleware/validate");

const {
    sendMessageSchema,
} = require("../validators/chatValidation");

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                            Protected Routes                                */
/* -------------------------------------------------------------------------- */

router.use(protect);

/* -------------------------------------------------------------------------- */
/*                           Conversation Routes                              */
/* -------------------------------------------------------------------------- */

router.get(
    "/conversations",
    chatController.getUserConversations
);

router.get(
    "/:conversationId/messages",
    chatController.getConversationMessages
);

/* -------------------------------------------------------------------------- */
/*                              Message Routes                                */
/* -------------------------------------------------------------------------- */

router.post(
    "/message",
    validate(sendMessageSchema),
    chatController.sendMessage
);

module.exports = router;
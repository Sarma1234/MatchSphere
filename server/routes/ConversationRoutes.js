const express = require("express");

const auth = require("../middleware/auth");

const conversationController = require("../controllers/ConversationController");

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                          Get My Conversations                              */
/* -------------------------------------------------------------------------- */

router.get(
    "/",
    auth,
    conversationController.getMyConversations
);

/* -------------------------------------------------------------------------- */
/*                           Get Conversation                                 */
/* -------------------------------------------------------------------------- */

router.get(
    "/:conversationId",
    auth,
    conversationController.getConversation
);

/* -------------------------------------------------------------------------- */
/*                         Archive Conversation                               */
/* -------------------------------------------------------------------------- */

router.patch(
    "/:conversationId/archive",
    auth,
    conversationController.archiveConversation
);

/* -------------------------------------------------------------------------- */
/*                          Reset Unread Count                                */
/* -------------------------------------------------------------------------- */

router.patch(
    "/:conversationId/reset-unread",
    auth,
    conversationController.resetUnreadCount
);

module.exports = router;
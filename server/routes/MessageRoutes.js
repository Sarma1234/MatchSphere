const express = require("express");

const auth = require("../middleware/auth");

const messageController = require("../controllers/MessageController");

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                              Send Message                                  */
/* -------------------------------------------------------------------------- */

router.post(
    "/",
    auth,
    messageController.sendMessage
);

/* -------------------------------------------------------------------------- */
/*                             Reply Message                                  */
/* -------------------------------------------------------------------------- */

router.post(
    "/reply",
    auth,
    messageController.replyMessage
);

/* -------------------------------------------------------------------------- */
/*                             Load Messages                                  */
/* -------------------------------------------------------------------------- */

router.get(
    "/:conversationId",
    auth,
    messageController.loadMessages
);

/* -------------------------------------------------------------------------- */
/*                           Mark Message Seen                                */
/* -------------------------------------------------------------------------- */

router.patch(
    "/:messageId/seen",
    auth,
    messageController.markSeen
);

/* -------------------------------------------------------------------------- */
/*                            Delete Message                                  */
/* -------------------------------------------------------------------------- */

router.delete(
    "/:messageId",
    auth,
    messageController.deleteMessage
);

module.exports = router;
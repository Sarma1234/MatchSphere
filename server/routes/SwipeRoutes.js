const express = require("express");

const swipeController = require("../controllers/SwipeController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                                 Swipe User                                 */
/* -------------------------------------------------------------------------- */

router.post(
    "/",
    protect,
    swipeController.swipe
);

module.exports = router;
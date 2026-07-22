const express = require("express");

const auth = require("../middleware/auth");

const discoverController = require("../controllers/DiscoverController");

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                             Discover Profile                               */
/* -------------------------------------------------------------------------- */

router.get(
    "/",
    auth,
    discoverController.getNextProfile
);

/* -------------------------------------------------------------------------- */
/*                               Swipe Right                                  */
/* -------------------------------------------------------------------------- */

router.post(
    "/swipe/right",
    auth,
    discoverController.swipeRight
);

/* -------------------------------------------------------------------------- */
/*                                Swipe Left                                  */
/* -------------------------------------------------------------------------- */

router.post(
    "/swipe/left",
    auth,
    discoverController.swipeLeft
);

module.exports = router;
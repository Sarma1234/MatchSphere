const express = require("express");

const auth = require("../middleware/auth");

const matchController = require("../controllers/MatchController");

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                              Get My Matches                                */
/* -------------------------------------------------------------------------- */

router.get(
    "/",
    auth,
    matchController.getMyMatches
);

/* -------------------------------------------------------------------------- */
/*                                Get Match                                   */
/* -------------------------------------------------------------------------- */

router.get(
    "/:matchId",
    auth,
    matchController.getMatch
);

/* -------------------------------------------------------------------------- */
/*                               Block Match                                  */
/* -------------------------------------------------------------------------- */

router.patch(
    "/:matchId/block",
    auth,
    matchController.blockMatch
);

/* -------------------------------------------------------------------------- */
/*                                 Unmatch                                    */
/* -------------------------------------------------------------------------- */

router.delete(
    "/:matchId",
    auth,
    matchController.unmatch
);

module.exports = router;
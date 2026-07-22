const asyncHandler = require("../utils/asyncHandler");
const discoverService = require("../services/DiscoverService");

/* -------------------------------------------------------------------------- */
/*                          Get Next Discover Profile                         */
/* -------------------------------------------------------------------------- */

exports.getNextProfile = asyncHandler(

    async (req, res) => {

        const profile =
            await discoverService.getNextProfile(
                req.user._id
            );

        if (!profile) {

            return res.status(200).json({

                success: true,

                message: "You have discovered everyone for now.",

                data: null,

            });

        }

        return res.status(200).json({

            success: true,

            message: "Discover profile fetched successfully.",

            data: profile,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                               Swipe Right                                  */
/* -------------------------------------------------------------------------- */

exports.swipeRight = asyncHandler(

    async (req, res) => {

        const { targetUserId } = req.body;

        const result =
            await discoverService.swipeRight({

                userId: req.user._id,

                targetUserId,

            });

        return res.status(200).json({

            success: true,

            message: result.matched
                ? "It's a match!"
                : "Connection request sent.",

            data: result,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                                Swipe Left                                  */
/* -------------------------------------------------------------------------- */

exports.swipeLeft = asyncHandler(

    async (req, res) => {

        const { targetUserId } = req.body;

        const result =
            await discoverService.swipeLeft({

                userId: req.user._id,

                targetUserId,

            });

        return res.status(200).json({

            success: true,

            message: "Profile skipped successfully.",

            data: result,

        });

    }

);
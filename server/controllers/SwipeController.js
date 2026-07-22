const swipeService = require("../services/SwipeService");

class SwipeController {

    /* ---------------------------------------------------------------------- */
    /*                              Swipe User                                */
    /* ---------------------------------------------------------------------- */

    async swipe(req, res, next) {

        try {

            const userId = req.user.id;

            const {
                targetUserId,
                purpose,
                action,
            } = req.body;

            const result =
                await swipeService.swipeUser(

                    userId,

                    targetUserId,

                    purpose,

                    action

                );

            res.status(200).json({

                success: true,

                message: result.matched
                    ? "It's a Match! 🎉"
                    : "Swipe recorded.",

                data: result,

            });

        }

        catch (error) {

            next(error);

        }

    }

}

module.exports = new SwipeController();
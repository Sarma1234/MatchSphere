const swipeRepository = require("../repositories/SwipeRepository");
const matchService = require("./MatchService");
const ApiError = require("../utils/ApiError");

class SwipeService {

    /* ---------------------------------------------------------------------- */
    /*                              Swipe User                                */
    /* ---------------------------------------------------------------------- */

    async swipeUser(
        userId,
        targetUserId,
        purpose,
        action
    ) {

        if (userId.toString() === targetUserId.toString()) {

            throw new ApiError(
                400,
                "You cannot swipe yourself."
            );

        }

        const existingSwipe =
            await swipeRepository.findByUsers(

                userId,

                targetUserId,

                purpose

            );

        if (existingSwipe) {

            throw new ApiError(
                409,
                "You have already swiped this profile."
            );

        }

        const swipe =
            await swipeRepository.create({

                user: userId,

                targetUser: targetUserId,

                purpose,

                action,

            });

        if (action === "pass") {

            return {

                matched: false,

                swipe,

            };

        }

        const reverseSwipe =
            await swipeRepository.findReverseSwipe(

                userId,

                targetUserId,

                purpose

            );

        if (!reverseSwipe) {

            return {

                matched: false,

                swipe,

            };

        }

        const match =
            await matchService.createMatch(

                userId,

                targetUserId,

                purpose

            );

        return {

            matched: true,

            match,

        };

    }

}

module.exports = new SwipeService();
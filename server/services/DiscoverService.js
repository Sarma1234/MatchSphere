
const discoverRepository = require("../repositories/DiscoverRepository");
const matchService = require("./MatchService");

const ApiError = require("../utils/ApiError");

class DiscoverService {

    /* -------------------------------------------------------------------------- */
    /*                          Get Next Discover Profile                         */
    /* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                          Get Next Discover Profile                         */
/* -------------------------------------------------------------------------- */

async getNextProfile(userId) {

    const user =
        await discoverRepository.findUserById(userId);

    if (!user) {

        throw new ApiError(
            404,
            "User not found"
        );

    }

    /* ---------------------------------------------------------------------- */
    /*                  Minimum Profile Completion Check                      */
    /* ---------------------------------------------------------------------- */

    if ((user.profileCompletion || 0) < 50) {

        throw new ApiError(
            400,
            "Complete at least 50% of your profile before discovering people."
        );

    }

    const purpose = user.activePurpose;

    /* ---------------------------------------------------------------------- */
    /*                Exclude All Previously Swiped Profiles                  */
    /* ---------------------------------------------------------------------- */

    const excludedIds =
        await discoverRepository.getAlreadySwipedIds(

            userId,

            purpose

        );

    /* ---------------------------------------------------------------------- */
    /*                     Get Random Discover Profile                        */
    /* ---------------------------------------------------------------------- */

    const profile =
        await discoverRepository.getRandomDiscoverProfile(

            userId,

            purpose,

            excludedIds

        );

    /* ---------------------------------------------------------------------- */
    /*                     No Profiles Remaining                              */
    /* ---------------------------------------------------------------------- */

    if (!profile) {

        return null;

    }

    /* ---------------------------------------------------------------------- */
    /*                 Temporary Compatibility Score                          */
    /* ---------------------------------------------------------------------- */

    profile.compatibility =
        Math.floor(Math.random() * 21) + 80;

    return profile;

}
    /* -------------------------------------------------------------------------- */
    /*                               Swipe Right                                 */
    /* -------------------------------------------------------------------------- */

    async swipeRight({

        userId,

        targetUserId,

    }) {

        if (String(userId) === String(targetUserId)) {

            throw new ApiError(
                400,
                "You cannot swipe yourself."
            );

        }

        const user =
            await discoverRepository.findUserById(userId);

        if (!user) {

            throw new ApiError(
                404,
                "User not found"
            );

        }

        const target =
            await discoverRepository.findCandidateById(
                targetUserId
            );

        if (!target) {

            throw new ApiError(
                404,
                "Target user not found"
            );

        }

        if (
            !target.isProfileCompleted ||
            target.accountStatus !== "active"
        ) {

            throw new ApiError(
                400,
                "This profile is unavailable."
            );

        }

        if (
            user.activePurpose !==
            target.activePurpose
        ) {

            throw new ApiError(
                400,
                "Purpose mismatch."
            );

        }

        const existingSwipe =
            await discoverRepository.findSwipe(

                userId,

                targetUserId,

                user.activePurpose

            );

        if (existingSwipe) {

            throw new ApiError(
                409,
                "You have already swiped this profile."
            );

        }

        await discoverRepository.createSwipe({

            user: userId,

            targetUser: targetUserId,

            purpose: user.activePurpose,

            action: "connect",

            source: "discover",

        });

        const mutualSwipe =
            await discoverRepository.getMutualConnectSwipe(

                userId,

                targetUserId,

                user.activePurpose

            );

        if (mutualSwipe) {

            const match =
                await matchService.createMatchFromMutualSwipe({

                    initiatorId: mutualSwipe.user,

                    receiverId: userId,

                    purpose: user.activePurpose,

                });

            return {

                matched: true,

                match,

            };

        }

        return {

            matched: false,

        };

    }

    /* -------------------------------------------------------------------------- */
    /*                                Swipe Left                                 */
    /* -------------------------------------------------------------------------- */

    async swipeLeft({

        userId,

        targetUserId,

    }) {

        if (
            String(userId) ===
            String(targetUserId)
        ) {

            throw new ApiError(
                400,
                "You cannot swipe yourself."
            );

        }

        const user =
            await discoverRepository.findUserById(
                userId
            );

        if (!user) {

            throw new ApiError(
                404,
                "User not found."
            );

        }

        const target =
            await discoverRepository.findCandidateById(
                targetUserId
            );

        if (!target) {

            throw new ApiError(
                404,
                "Target user not found."
            );

        }

        const existingSwipe =
            await discoverRepository.findSwipe(

                userId,

                targetUserId,

                user.activePurpose

            );

        if (existingSwipe) {

            throw new ApiError(
                409,
                "You have already swiped this profile."
            );

        }

        await discoverRepository.createSwipe({

            user: userId,

            targetUser: targetUserId,

            purpose: user.activePurpose,

            action: "pass",

            source: "discover",

        });

        return {

            passed: true,

        };

    }

}

module.exports = new DiscoverService();


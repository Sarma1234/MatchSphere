const mongoose = require("mongoose");

const User = require("../models/User");
const Swipe = require("../models/Swipe");

class DiscoverRepository {

    /* -------------------------------------------------------------------------- */
    /*                                User Queries                                */
    /* -------------------------------------------------------------------------- */

    async findUserById(userId) {

        return await User.findById(userId);

    }

    async existsUser(userId) {

        return await User.exists({
            _id: userId,
        });

    }

    async getUserActivePurpose(userId) {

        return await User.findById(userId)
            .select("activePurpose");

    }

    async findCandidateById(candidateId) {

        return await User.findById(candidateId)
            .select("-password");

    }

    /* -------------------------------------------------------------------------- */
    /*                           Discover Candidate Query                         */
    /* -------------------------------------------------------------------------- */

    async getRandomDiscoverProfile(userId, purpose, excludedUserIds = []) {

        const pipeline = [

            {
                $match: {

                    _id: {
                        $nin: [
                            new mongoose.Types.ObjectId(userId),
                            ...excludedUserIds.map(
                                (id) => new mongoose.Types.ObjectId(id)
                            ),
                        ],
                    },

                    activePurpose: purpose,

                    isProfileCompleted: true,

                    accountStatus: "active",

                },

            },

            {
                $sample: {
                    size: 1,
                },
            },

        ];

        const profiles = await User.aggregate(pipeline);

        return profiles.length ? profiles[0] : null;

    }

    /* -------------------------------------------------------------------------- */
    /*                              Swipe Queries                                 */
    /* -------------------------------------------------------------------------- */

    async createSwipe(swipeData) {

        return await Swipe.create(swipeData);

    }

    async findSwipe(userId, targetUserId, purpose) {

        return await Swipe.findOne({

            user: userId,

            targetUser: targetUserId,

            purpose,

        });

    }

    async hasSwiped(userId, targetUserId, purpose) {

        return await Swipe.exists({

            user: userId,

            targetUser: targetUserId,

            purpose,

        });

    }

    async getMutualConnectSwipe(userId, targetUserId, purpose) {

        return await Swipe.findOne({

            user: targetUserId,

            targetUser: userId,

            purpose,

            action: "connect",

        });

    }

    async getAlreadySwipedIds(userId, purpose, action = null) {

        const filter = {

            user: userId,

            purpose,

        };

        if (action) {

            filter.action = action;

        }

        const swipes = await Swipe.find(filter)
            .select("targetUser");

        return swipes.map(
            (swipe) => swipe.targetUser
        );

    }

    async countSwipes(userId, purpose) {

        return await Swipe.countDocuments({

            user: userId,

            purpose,

        });

    }

    async deletePassSwipes(userId, purpose) {

        return await Swipe.deleteMany({

            user: userId,

            purpose,

            action: "pass",

        });

    }

    async deleteSwipe(userId, targetUserId, purpose) {

        return await Swipe.deleteOne({

            user: userId,

            targetUser: targetUserId,

            purpose,

        });

    }

}

module.exports = new DiscoverRepository();
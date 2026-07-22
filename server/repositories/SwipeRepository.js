const Swipe = require("../models/Swipe");

class SwipeRepository {

    /* ---------------------------------------------------------------------- */
    /*                             Create Swipe                               */
    /* ---------------------------------------------------------------------- */

    async create(swipeData) {

        return await Swipe.create(swipeData);

    }

    /* ---------------------------------------------------------------------- */
    /*                    Find Swipe Between Users                            */
    /* ---------------------------------------------------------------------- */

    async findByUsers(
        userId,
        targetUserId,
        purpose
    ) {

        return await Swipe.findOne({

            user: userId,

            targetUser: targetUserId,

            purpose,

        });

    }

    /* ---------------------------------------------------------------------- */
    /*                      Find Reverse Swipe                                */
    /* ---------------------------------------------------------------------- */

    async findReverseSwipe(
        userId,
        targetUserId,
        purpose
    ) {

        return await Swipe.findOne({

            user: targetUserId,

            targetUser: userId,

            purpose,

            action: "connect",

        });

    }

    /* ---------------------------------------------------------------------- */
    /*                        Get User Swipes                                 */
    /* ---------------------------------------------------------------------- */

    async findUserSwipes(userId) {

        return await Swipe.find({

            user: userId,

        })
            .populate(

                "targetUser",

                "fullName username photos activePurpose"

            )
            .sort({

                createdAt: -1,

            });

    }

    /* ---------------------------------------------------------------------- */
    /*                          Update Swipe                                  */
    /* ---------------------------------------------------------------------- */

    async update(
        swipeId,
        updateData
    ) {

        return await Swipe.findByIdAndUpdate(

            swipeId,

            updateData,

            {

                new: true,

            }

        );

    }

    /* ---------------------------------------------------------------------- */
    /*                          Delete Swipe                                  */
    /* ---------------------------------------------------------------------- */

    async delete(swipeId) {

        return await Swipe.findByIdAndDelete(swipeId);

    }

}

module.exports = new SwipeRepository();
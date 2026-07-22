const Match = require("../models/Match");

class MatchRepository {

    /* -------------------------------------------------------------------------- */
    /*                              Create Match                                  */
    /* -------------------------------------------------------------------------- */

    async create(matchData) {

        return await Match.create(matchData);

    }

    /* -------------------------------------------------------------------------- */
    /*                               Find Match                                   */
    /* -------------------------------------------------------------------------- */

    async findById(matchId) {

        return await Match.findById(matchId)
            .populate(
                "userOne",
                "-password"
            )
            .populate(
                "userTwo",
                "-password"
            );

    }

    async findExistingMatch(
        userOne,
        userTwo,
        purpose
    ) {

        return await Match.findOne({

            userOne,

            userTwo,

            purpose,

        });

    }

    async exists(
        userOne,
        userTwo,
        purpose
    ) {

        return await Match.exists({

            userOne,

            userTwo,

            purpose,

        });

    }

    /* -------------------------------------------------------------------------- */
    /*                             Participant Queries                            */
    /* -------------------------------------------------------------------------- */

    async findMyMatches(userId) {

        return await Match.find({

            status: "matched",

            $or: [

                {
                    userOne: userId,
                },

                {
                    userTwo: userId,
                },

            ],

        })

            .populate(
                "userOne",
                "-password"
            )

            .populate(
                "userTwo",
                "-password"
            )

            .sort({
                matchedAt: -1,
            });

    }

    async isParticipant(
        matchId,
        userId
    ) {

        return await Match.exists({

            _id: matchId,

            $or: [

                {
                    userOne: userId,
                },

                {
                    userTwo: userId,
                },

            ],

        });

    }

    /* -------------------------------------------------------------------------- */
    /*                            Match Status Updates                            */
    /* -------------------------------------------------------------------------- */

    async updateStatus(
        matchId,
        status
    ) {

        return await Match.findByIdAndUpdate(

            matchId,

            {
                status,
            },

            {
                new: true,
            }

        );

    }

    async blockMatch(
        matchId
    ) {

        return await Match.findByIdAndUpdate(

            matchId,

            {
                status: "blocked",
            },

            {
                new: true,
            }

        );

    }

    async unmatch(
        matchId
    ) {

        return await Match.findByIdAndDelete(
            matchId
        );

    }

    /* -------------------------------------------------------------------------- */
    /*                           Future Helper Methods                            */
    /* -------------------------------------------------------------------------- */

    async findPendingMatch(
        userOne,
        userTwo,
        purpose
    ) {

        return await Match.findOne({

            userOne,

            userTwo,

            purpose,

            status: "pending",

        });

    }

    async findMatchedUsers(
        userId
    ) {

        return await Match.find({

            status: "matched",

            $or: [

                {
                    userOne: userId,
                },

                {
                    userTwo: userId,
                },

            ],

        }).select(
            "userOne userTwo purpose"
        );

    }

    async countMatches(
        userId
    ) {

        return await Match.countDocuments({

            status: "matched",

            $or: [

                {
                    userOne: userId,
                },

                {
                    userTwo: userId,
                },

            ],

        });

    }

}

module.exports = new MatchRepository();
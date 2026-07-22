const asyncHandler = require("../utils/asyncHandler");

const matchService = require("../services/MatchService");

/* -------------------------------------------------------------------------- */
/*                              Get My Matches                                */
/* -------------------------------------------------------------------------- */

exports.getMyMatches = asyncHandler(

    async (req, res) => {

        const matches =
            await matchService.getMyMatches(
                req.user._id
            );

        return res.status(200).json({

            success: true,

            message: "Matches fetched successfully.",

            data: matches,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                                Get Match                                   */
/* -------------------------------------------------------------------------- */

exports.getMatch = asyncHandler(

    async (req, res) => {

        const { matchId } = req.params;

        const match =
            await matchService.getMatch(

                matchId,

                req.user._id

            );

        return res.status(200).json({

            success: true,

            message: "Match fetched successfully.",

            data: match,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                               Block Match                                  */
/* -------------------------------------------------------------------------- */

exports.blockMatch = asyncHandler(

    async (req, res) => {

        const { matchId } = req.params;

        const match =
            await matchService.blockMatch(

                matchId,

                req.user._id

            );

        return res.status(200).json({

            success: true,

            message: "Match blocked successfully.",

            data: match,

        });

    }

);

/* -------------------------------------------------------------------------- */
/*                                 Unmatch                                    */
/* -------------------------------------------------------------------------- */

exports.unmatch = asyncHandler(

    async (req, res) => {

        const { matchId } = req.params;

        await matchService.unmatch(

            matchId,

            req.user._id

        );

        return res.status(200).json({

            success: true,

            message: "Unmatched successfully.",

            data: null,

        });

    }

);
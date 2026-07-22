const matchRepository = require("../repositories/MatchRepository");
const conversationService = require("./ConversationService");

const ApiError = require("../utils/ApiError");

class MatchService {

    /* -------------------------------------------------------------------------- */
    /*                      Create Match From Mutual Swipe                        */
    /* -------------------------------------------------------------------------- */

    async createMatchFromMutualSwipe({

        initiatorId,

        receiverId,

        purpose,

    }) {

        /* ---------------------------------------------------------------------- */
        /*                     Normalize Participants                             */
        /* ---------------------------------------------------------------------- */

        const [userOne, userTwo] =

            [String(initiatorId), String(receiverId)].sort();

        /* ---------------------------------------------------------------------- */
        /*                     Prevent Duplicate Matches                          */
        /* ---------------------------------------------------------------------- */

        const existingMatch =
            await matchRepository.findExistingMatch(

                userOne,

                userTwo,

                purpose

            );

        if (existingMatch) {

            return existingMatch;

        }

        /* ---------------------------------------------------------------------- */
        /*                           Create Match                                */
        /* ---------------------------------------------------------------------- */

        const match =
            await matchRepository.create({

                userOne,

                userTwo,

                purpose,

                status: "matched",

                initiatedBy: initiatorId,

                matchedAt: new Date(),

            });

        /* ---------------------------------------------------------------------- */
        /*                     Create Conversation                               */
        /* ---------------------------------------------------------------------- */

        await conversationService.createConversation(
            match
        );

        return match;

    }

    /* -------------------------------------------------------------------------- */
    /*                              Get My Matches                               */
    /* -------------------------------------------------------------------------- */

    async getMyMatches(userId) {

        return await matchRepository.findMyMatches(
            userId
        );

    }

    /* -------------------------------------------------------------------------- */
    /*                               Get Match                                   */
    /* -------------------------------------------------------------------------- */

    async getMatch(matchId, userId) {

        const isParticipant =
            await matchRepository.isParticipant(
                matchId,
                userId
            );

        if (!isParticipant) {

            throw new ApiError(
                403,
                "Unauthorized access."
            );

        }

        const match =
            await matchRepository.findById(
                matchId
            );

        if (!match) {

            throw new ApiError(
                404,
                "Match not found."
            );

        }

        return match;

    }

    /* -------------------------------------------------------------------------- */
    /*                               Block Match                                 */
    /* -------------------------------------------------------------------------- */

    async blockMatch(matchId, userId) {

        const isParticipant =
            await matchRepository.isParticipant(
                matchId,
                userId
            );

        if (!isParticipant) {

            throw new ApiError(
                403,
                "Unauthorized access."
            );

        }

        const match =
            await matchRepository.blockMatch(
                matchId
            );

        return match;

    }

    /* -------------------------------------------------------------------------- */
    /*                                Unmatch                                    */
    /* -------------------------------------------------------------------------- */

    async unmatch(matchId, userId) {

        const isParticipant =
            await matchRepository.isParticipant(
                matchId,
                userId
            );

        if (!isParticipant) {

            throw new ApiError(
                403,
                "Unauthorized access."
            );

        }

        await matchRepository.unmatch(
            matchId
        );

        return;

    }

    /* -------------------------------------------------------------------------- */
    /*                           Validation Helpers                              */
    /* -------------------------------------------------------------------------- */

    async validateMatchParticipant(
        matchId,
        userId
    ) {

        const exists =
            await matchRepository.isParticipant(
                matchId,
                userId
            );

        if (!exists) {

            throw new ApiError(
                403,
                "You are not a participant of this match."
            );

        }

    }

    async matchExists(

        initiatorId,

        receiverId,

        purpose

    ) {

        const [userOne, userTwo] =

            [String(initiatorId), String(receiverId)].sort();

        return await matchRepository.findExistingMatch(

            userOne,

            userTwo,

            purpose

        );

    }

}

module.exports = new MatchService();
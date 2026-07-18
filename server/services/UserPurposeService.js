const userPurposeRepository = require("../repositories/UserPurposeRepository");
const ApiError = require("../utils/ApiError");

class UserPurposeService {

    /* ---------------------------------------------------------------------- */
    /*                    Get Single Purpose Answers                          */
    /* ---------------------------------------------------------------------- */

    async getPurpose(userId, purpose) {

        const userPurpose =
            await userPurposeRepository.findByUserAndPurpose(

                userId,

                purpose

            );

        if (!userPurpose) {

            throw new ApiError(

                404,

                "Purpose data not found"

            );

        }

        return userPurpose;

    }

    /* ---------------------------------------------------------------------- */
    /*                    Save / Update Purpose Answers                       */
    /* ---------------------------------------------------------------------- */

    async updatePurpose(

        userId,

        purpose,

        answers

    ) {

        return await userPurposeRepository.upsertPurpose(

            userId,

            purpose,

            answers

        );

    }

    /* ---------------------------------------------------------------------- */
    /*                    Get All User Purposes                              */
    /* ---------------------------------------------------------------------- */

    async getAllPurposes(userId) {

        return await userPurposeRepository.getUserPurposes(

            userId

        );

    }

}

module.exports = new UserPurposeService();
const UserPurpose = require("../models/UserPurpose");

class UserPurposeRepository {

    /* ---------------------------------------------------------------------- */
    /*                     Get User Purpose by User & Purpose                 */
    /* ---------------------------------------------------------------------- */

    async findByUserAndPurpose(userId, purpose) {

        return await UserPurpose.findOne({

            user: userId,

            purpose,

        });

    }

    /* ---------------------------------------------------------------------- */
    /*                         Create User Purpose                            */
    /* ---------------------------------------------------------------------- */

    async create(userPurposeData) {

        return await UserPurpose.create(userPurposeData);

    }

    /* ---------------------------------------------------------------------- */
    /*                     Create or Update Purpose Answers                   */
    /* ---------------------------------------------------------------------- */

    async upsertPurpose(userId, purpose, answers) {

        return await UserPurpose.findOneAndUpdate(

            {

                user: userId,

                purpose,

            },

            {

                user: userId,

                purpose,

                answers,

            },

            {

                new: true,

                upsert: true,

                runValidators: true,

            }

        );

    }

    /* ---------------------------------------------------------------------- */
    /*                     Get All User Purposes                             */
    /* ---------------------------------------------------------------------- */

    async getUserPurposes(userId) {

        return await UserPurpose.find({

            user: userId,

        });

    }

}

module.exports = new UserPurposeRepository();
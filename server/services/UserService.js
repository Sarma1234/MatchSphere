const userRepository = require("../repositories/UserRepository");
const ApiError = require("../utils/ApiError");
const calculateProfileCompletion = require("../utils/profileCompletion");

class UserService {

    /* ---------------------------------------------------------------------- */
    /*                           Get Logged In User                           */
    /* ---------------------------------------------------------------------- */

    async getMyProfile(userId) {

        const user = await userRepository.getProfile(userId);

        if (!user) {
            throw new ApiError(
                404,
                "User not found"
            );
        }

        return user;

    }

    /* ---------------------------------------------------------------------- */
    /*                           Update Profile                               */
    /* ---------------------------------------------------------------------- */

    async updateProfile(userId, profileData) {

        const user = await userRepository.findById(userId);

        if (!user) {

            throw new ApiError(
                404,
                "User not found"
            );

        }

        /* ---------------- Merge Incoming Data ---------------- */

        Object.assign(
            user,
            profileData
        );

        /* ---------------- Calculate Completion ---------------- */

        const completion =
            calculateProfileCompletion(user);

        user.profileCompletion =
            completion;

        user.isProfileCompleted =
            completion === 100;

        /* ---------------- Save ---------------- */

        await user.save();

        return user;

    }

    /* ---------------------------------------------------------------------- */
    /*                        Switch Active Purpose                           */
    /* ---------------------------------------------------------------------- */

    async switchActivePurpose(userId, activePurpose) {

        const user = await userRepository.findById(userId);

        if (!user) {

            throw new ApiError(
                404,
                "User not found"
            );

        }

        const enabledPurposes =
            user.enabledPurposes || [];

        if (!enabledPurposes.includes(activePurpose)) {

            enabledPurposes.push(activePurpose);

            user.enabledPurposes =
                enabledPurposes;

        }

        user.activePurpose =
            activePurpose;

        await user.save();

        return user;

    }

}

module.exports = new UserService();
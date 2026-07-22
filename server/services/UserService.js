const userRepository = require("../repositories/UserRepository");
const userPurposeRepository = require("../repositories/UserPurposeRepository");
const ApiError = require("../utils/ApiError");
const calculateProfileCompletion = require("../utils/profileCompletion");

class UserService {

    /* ---------------------------------------------------------------------- */
    /*                           Get Logged In User                           */
    /* ---------------------------------------------------------------------- */

    async getMyProfile(userId) {

    const user =
        await userRepository.getProfile(userId);

    if (!user) {

        throw new ApiError(
            404,
            "User not found"
        );

    }

    const purposes =
        await userPurposeRepository.getUserPurposes(
            userId
        );

    const enabledPurposes =
        purposes.map(item => item.purpose);

    const userObject =
        user.toObject();

    userObject.enabledPurposes =
        enabledPurposes;

    return userObject;

}

    /* ---------------------------------------------------------------------- */
    /*                           Update Profile                               */
    /* ---------------------------------------------------------------------- */

    async updateProfile(userId, profileData) {

       const user =
    await userRepository.findById(userId);
        if (!user) {

            throw new ApiError(
                404,
                "User not found"
            );

        }

        Object.assign(
            user,
            profileData
        );

        const completion =
            calculateProfileCompletion(user);

        user.profileCompletion =
            completion;

        user.isProfileCompleted =
            completion === 100;

        await user.save();

        return user;

    }

    /* ---------------------------------------------------------------------- */
    /*                        Switch Active Purpose                           */
    /* ---------------------------------------------------------------------- */

    async switchActivePurpose(userId, activePurpose) {

        const user =
            await userRepository.findById(userId);

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

    /* ---------------------------------------------------------------------- */
    /*                     Update Account Settings                            */
    /* ---------------------------------------------------------------------- */

    async updateAccountSettings(userId, accountData) {

        const user =
            await userRepository.findById(userId);

        if (!user) {

            throw new ApiError(
                404,
                "User not found"
            );

        }

        const {

            fullName,
            username,
            email,

        } = accountData;

        if (email && email !== user.email) {

            const exists =
                await userRepository.existsByEmail(

                    email,

                    userId

                );

            if (exists) {

                throw new ApiError(
                    400,
                    "Email already exists"
                );

            }

            user.email = email;

        }

        if (username && username !== user.username) {

            const exists =
                await userRepository.existsByUsername(

                    username,

                    userId

                );

            if (exists) {

                throw new ApiError(
                    400,
                    "Username already exists"
                );

            }

            user.username = username;

        }

        if (fullName) {

            user.fullName = fullName;

        }

        await user.save();

        return user;

    }

    /* ---------------------------------------------------------------------- */
    /*                         Change Password                                */
    /* ---------------------------------------------------------------------- */

    async changePassword(userId, passwordData) {

        const {

            currentPassword,
            newPassword,

        } = passwordData;

        const user =
            await userRepository.findByIdWithPassword(
                userId
            );

        if (!user) {

            throw new ApiError(
                404,
                "User not found"
            );

        }

        const isMatch =
            await user.comparePassword(
                currentPassword
            );

        if (!isMatch) {

            throw new ApiError(
                400,
                "Current password is incorrect"
            );

        }

        user.password = newPassword;

        await user.save();

        return {

            message:
                "Password updated successfully."

        };

    }

    /* ---------------------------------------------------------------------- */
    /*                     Update Privacy Settings                            */
    /* ---------------------------------------------------------------------- */

   async updatePrivacySettings(userId, privacyData) {

    const user =
        await userRepository.getSettings(userId);

    if (!user) {

        throw new ApiError(
            404,
            "User not found"
        );

    }

    const privacy = {

        ...user.settings.privacy,

        ...privacyData,

    };

    const updatedUser =
        await userRepository.updatePrivacy(
            userId,
            privacy
        );

    return updatedUser.settings.privacy;

}

    /* ---------------------------------------------------------------------- */
    /*                  Update Notification Settings                          */
    /* ---------------------------------------------------------------------- */

   async updateNotificationSettings(userId, notificationData) {

    const user =
        await userRepository.getSettings(userId);

    if (!user) {

        throw new ApiError(
            404,
            "User not found"
        );

    }

    const notifications = {

        ...user.settings.notifications,

        ...notificationData,

    };

    const updatedUser =
        await userRepository.updateNotifications(
            userId,
            notifications
        );

    return updatedUser.settings.notifications;

}

    /* ---------------------------------------------------------------------- */
    /*                    Update Appearance Settings                          */
    /* ---------------------------------------------------------------------- */

   async updateAppearanceSettings(userId, appearanceData) {

    const user =
        await userRepository.getSettings(userId);

    if (!user) {

        throw new ApiError(
            404,
            "User not found"
        );

    }

    console.log("Request Body:", appearanceData);

const appearance = {
    ...user.settings.appearance,
    ...appearanceData,
};

console.log("Merged Appearance:", appearance);

    /* ---------------------------------------------------------------------- */
    /*                              Validations                               */
    /* ---------------------------------------------------------------------- */

    const validThemes = [
        "dark",
        "midnight",
        "auto",
    ];

    const validAccentColors = [
        "purple",
        "blue",
        "cyan",
        "pink",
        "emerald",
    ];

    if (
        appearance.theme &&
        !validThemes.includes(appearance.theme)
    ) {

        throw new ApiError(
            400,
            "Invalid theme."
        );

    }

    if (
        appearance.accentColor &&
        !validAccentColors.includes(appearance.accentColor)
    ) {

        throw new ApiError(
            400,
            "Invalid accent color."
        );

    }

    if (
        appearance.glowIntensity < 0 ||
        appearance.glowIntensity > 100
    ) {

        throw new ApiError(
            400,
            "Glow intensity must be between 0 and 100."
        );

    }

    const updatedUser =
        await userRepository.updateAppearance(
            userId,
            appearance
        );

    return updatedUser.settings.appearance;

}

    /* ---------------------------------------------------------------------- */
    /*                     Update Security Settings                           */
    /* ---------------------------------------------------------------------- */

    async updateSecuritySettings(userId, securityData) {

    const user =
        await userRepository.getSettings(userId);

    if (!user) {

        throw new ApiError(
            404,
            "User not found"
        );

    }

    const security = {

        ...user.settings.security,

        ...securityData,

    };

    const updatedUser =
        await userRepository.updateSecurity(
            userId,
            security
        );

    return updatedUser.settings.security;

}
        /* ---------------------------------------------------------------------- */
    /*                         Deactivate Account                             */
    /* ---------------------------------------------------------------------- */

    async deactivateAccount(userId) {

        const user =
            await userRepository.findById(userId);

        if (!user) {

            throw new ApiError(
                404,
                "User not found"
            );

        }

        user.accountStatus =
            "deactivated";

        user.deactivatedAt =
            new Date();

        await user.save();

        return {

            message:
                "Account deactivated successfully."

        };

    }

    /* ---------------------------------------------------------------------- */
    /*                           Delete Account                               */
    /* ---------------------------------------------------------------------- */

    async deleteAccount(userId) {

        const user =
            await userRepository.findById(userId);

        if (!user) {

            throw new ApiError(
                404,
                "User not found"
            );

        }

        await userRepository.deleteUser(
            userId
        );

        return {

            message:
                "Account deleted successfully."

        };

    }

}

module.exports = new UserService();
const userService = require("../services/UserService");

/* -------------------------------------------------------------------------- */
/*                              Get My Profile                                */
/* -------------------------------------------------------------------------- */

exports.getMyProfile = async (req, res, next) => {

    try {

        const user = await userService.getMyProfile(req.user.id);

        res.status(200).json({

            success: true,
            message: "Profile fetched successfully.",
            data: user,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                              Update Profile                                */
/* -------------------------------------------------------------------------- */

exports.updateProfile = async (req, res, next) => {

    try {

        const user = await userService.updateProfile(
            req.user.id,
            req.body
        );

        res.status(200).json({

            success: true,
            message: "Profile updated successfully.",
            data: user,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                              Get Settings                                  */
/* -------------------------------------------------------------------------- */

exports.getSettings = async (req, res, next) => {

    try {

        const settings = await userService.getSettings(req.user.id);

        res.status(200).json({

            success: true,
            data: settings,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                          Switch Active Purpose                             */
/* -------------------------------------------------------------------------- */

exports.switchActivePurpose = async (req, res, next) => {

    try {

        const user = await userService.switchActivePurpose(
            req.user.id,
            req.body.activePurpose
        );

        res.status(200).json({

            success: true,
            message: "Active purpose updated successfully.",
            data: user,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                        Update Account Settings                             */
/* -------------------------------------------------------------------------- */

exports.updateAccountSettings = async (req, res, next) => {

    try {

        const user = await userService.updateAccountSettings(
            req.user.id,
            req.body
        );

        res.status(200).json({

            success: true,
            message: "Account settings updated successfully.",
            data: user,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                           Change Password                                  */
/* -------------------------------------------------------------------------- */

exports.changePassword = async (req, res, next) => {

    try {

        const response = await userService.changePassword(
            req.user.id,
            req.body
        );

        res.status(200).json({

            success: true,
            message: response.message,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                      Update Privacy Settings                               */
/* -------------------------------------------------------------------------- */

exports.updatePrivacySettings = async (req, res, next) => {

    try {

        const settings = await userService.updatePrivacySettings(
            req.user.id,
            req.body
        );

        res.status(200).json({

            success: true,
            message: "Privacy settings updated successfully.",
            data: settings,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                  Update Notification Settings                              */
/* -------------------------------------------------------------------------- */

exports.updateNotificationSettings = async (req, res, next) => {

    try {

        const settings = await userService.updateNotificationSettings(
            req.user.id,
            req.body
        );

        res.status(200).json({

            success: true,
            message: "Notification settings updated successfully.",
            data: settings,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                    Update Appearance Settings                              */
/* -------------------------------------------------------------------------- */

exports.updateAppearanceSettings = async (req, res, next) => {

    try {

        const settings = await userService.updateAppearanceSettings(
            req.user.id,
            req.body
        );

        res.status(200).json({

            success: true,
            message: "Appearance settings updated successfully.",
            data: settings,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                     Update Security Settings                               */
/* -------------------------------------------------------------------------- */

exports.updateSecuritySettings = async (req, res, next) => {

    try {

        const settings = await userService.updateSecuritySettings(
            req.user.id,
            req.body
        );

        res.status(200).json({

            success: true,
            message: "Security settings updated successfully.",
            data: settings,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                         Deactivate Account                                 */
/* -------------------------------------------------------------------------- */

exports.deactivateAccount = async (req, res, next) => {

    try {

        const response = await userService.deactivateAccount(req.user.id);

        res.status(200).json({

            success: true,
            message: response.message,

        });

    } catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                           Delete Account                                   */
/* -------------------------------------------------------------------------- */

exports.deleteAccount = async (req, res, next) => {

    try {

        const response = await userService.deleteAccount(req.user.id);

        res.status(200).json({

            success: true,
            message: response.message,

        });

    } catch (error) {

        next(error);

    }

};
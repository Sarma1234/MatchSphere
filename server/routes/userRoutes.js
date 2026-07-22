const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const validate = require("../middleware/validate");

const userController = require("../controllers/UserController");

const {
    updateProfileSchema,
} = require("../validators/profileValidator");

const {
    updateAccountSchema,
    changePasswordSchema,
    privacySettingsSchema,
    notificationSettingsSchema,
    appearanceSettingsSchema,
    securitySettingsSchema,
    switchPurposeSchema,
} = require("../validators/settingsValidator");

/* -------------------------------------------------------------------------- */
/*                              User Profile                                  */
/* -------------------------------------------------------------------------- */

router.get(
    "/me",
    auth,
    userController.getMyProfile
);

router.put(
    "/me",
    auth,
    validate(updateProfileSchema),
    userController.updateProfile
);

/* -------------------------------------------------------------------------- */
/*                         Active Purpose Switch                              */
/* -------------------------------------------------------------------------- */

router.patch(
    "/me/purpose",
    auth,
    validate(switchPurposeSchema),
    userController.switchActivePurpose
);

/* -------------------------------------------------------------------------- */
/*                               Settings                                     */
/* -------------------------------------------------------------------------- */

router.get(
    "/settings",
    auth,
    userController.getSettings
);

router.patch(
    "/settings/account",
    auth,
    validate(updateAccountSchema),
    userController.updateAccountSettings
);

router.patch(
    "/settings/password",
    auth,
    validate(changePasswordSchema),
    userController.changePassword
);

router.patch(
    "/settings/privacy",
    auth,
    validate(privacySettingsSchema),
    userController.updatePrivacySettings
);

router.patch(
    "/settings/notifications",
    auth,
    validate(notificationSettingsSchema),
    userController.updateNotificationSettings
);

router.patch(
    "/settings/appearance",
    auth,
    validate(appearanceSettingsSchema),
    userController.updateAppearanceSettings
);

router.patch(
    "/settings/security",
    auth,
    validate(securitySettingsSchema),
    userController.updateSecuritySettings
);

/* -------------------------------------------------------------------------- */
/*                           Account Actions                                  */
/* -------------------------------------------------------------------------- */

router.patch(
    "/deactivate",
    auth,
    userController.deactivateAccount
);

router.delete(
    "/delete",
    auth,
    userController.deleteAccount
);

module.exports = router;
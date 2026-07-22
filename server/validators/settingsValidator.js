const { z } = require("zod");

/* -------------------------------------------------------------------------- */
/*                        Update Account Settings                             */
/* -------------------------------------------------------------------------- */

const updateAccountSchema = z.object({

    fullName: z
        .string()
        .trim()
        .min(2)
        .max(50)
        .optional(),

    username: z
        .string()
        .trim()
        .toLowerCase()
        .min(3)
        .max(30)
        .optional(),

    email: z
        .string()
        .email()
        .optional(),

});

/* -------------------------------------------------------------------------- */
/*                           Change Password                                  */
/* -------------------------------------------------------------------------- */

const changePasswordSchema = z.object({

    currentPassword: z
        .string()
        .min(1),

    newPassword: z
        .string()
        .min(6)
        .max(100),

});

/* -------------------------------------------------------------------------- */
/*                           Privacy Settings                                 */
/* -------------------------------------------------------------------------- */

const privacySettingsSchema = z.object({

    publicProfile: z
        .boolean()
        .optional(),

    showEmail: z
        .boolean()
        .optional(),

    showSocialLinks: z
        .boolean()
        .optional(),

    allowMessages: z
        .boolean()
        .optional(),

    allowRequests: z
        .enum([
            "everyone",
            "matches",
            "nobody",
        ])
        .optional(),

    showOnlineStatus: z
        .boolean()
        .optional(),

    searchable: z
        .boolean()
        .optional(),

});

/* -------------------------------------------------------------------------- */
/*                        Notification Settings                               */
/* -------------------------------------------------------------------------- */

const notificationSettingsSchema = z.object({

    newMatches: z
        .boolean()
        .optional(),

    connectionRequests: z
        .boolean()
        .optional(),

    messages: z
        .boolean()
        .optional(),

    productUpdates: z
        .boolean()
        .optional(),

});

/* -------------------------------------------------------------------------- */
/*                         Appearance Settings                                */
/* -------------------------------------------------------------------------- */

const appearanceSettingsSchema = z.object({

    theme: z
        .enum([
            "dark",
            "midnight",
            "auto",
        ])
        .optional(),

    accentColor: z
        .enum([
            "purple",
            "blue",
            "cyan",
            "pink",
            "emerald",
        ])
        .optional(),

    glowIntensity: z
        .number()
        .min(0)
        .max(100)
        .optional(),

    compactMode: z
        .boolean()
        .optional(),

    animations: z
        .boolean()
        .optional(),

});
/* -------------------------------------------------------------------------- */
/*                          Security Settings                                 */
/* -------------------------------------------------------------------------- */

const securitySettingsSchema = z.object({

    twoFactorEnabled: z
        .boolean()
        .optional(),

});

/* -------------------------------------------------------------------------- */
/*                         Switch Active Purpose                              */
/* -------------------------------------------------------------------------- */

const switchPurposeSchema = z.object({

    activePurpose: z
        .string()
        .min(1),

});

module.exports = {

    updateAccountSchema,

    changePasswordSchema,

    privacySettingsSchema,

    notificationSettingsSchema,

    appearanceSettingsSchema,

    securitySettingsSchema,

    switchPurposeSchema,

};
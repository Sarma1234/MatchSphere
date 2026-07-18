const { z } = require("zod");

/* -------------------------------------------------------------------------- */
/*                               Common Helpers                               */
/* -------------------------------------------------------------------------- */

const optionalString = z
    .string()
    .nullable()
    .optional()
    .transform((val) => val ?? "");

const optionalNumberOrString = z
    .union([
        z.string(),
        z.number(),
        z.null(),
    ])
    .optional();

/* -------------------------------------------------------------------------- */
/*                           Nested Object Schemas                            */
/* -------------------------------------------------------------------------- */

const professionalSchema = z.object({

    title: optionalString,

    company: optionalString,

});

const educationSchema = z.object({

    college: optionalString,

    degree: optionalString,

    graduationYear: optionalNumberOrString,

});

const locationSchema = z.object({

    city: optionalString,

    state: optionalString,

    country: optionalString,

});

const photoSchema = z.object({

    url: optionalString,

    isPrimary: z.boolean().optional().default(false),

});

const socialLinksSchema = z.object({

    github: optionalString,

    linkedin: optionalString,

    portfolio: optionalString,

    instagram: optionalString,

    twitter: optionalString,

});

const privacySchema = z.object({

    publicProfile: z.boolean().optional(),

    showEmail: z.boolean().optional(),

    showSocialLinks: z.boolean().optional(),

    allowMessages: z.boolean().optional(),

});

/* -------------------------------------------------------------------------- */
/*                           Update Profile Schema                            */
/* -------------------------------------------------------------------------- */

const updateProfileSchema = z.object({

    fullName: z
        .string()
        .min(2)
        .max(100)
        .optional(),

    username: z
        .string()
        .min(3)
        .max(30)
        .optional(),

    email: z
        .string()
        .email()
        .optional(),

    headline: z
        .string()
        .max(120)
        .nullable()
        .optional(),

    bio: z
        .string()
        .max(1000)
        .nullable()
        .optional(),

    gender: z
        .string()
        .nullable()
        .optional(),

    dateOfBirth: z
        .string()
        .nullable()
        .optional(),

    professional: professionalSchema.optional(),

    education: educationSchema.optional(),

    location: locationSchema.optional(),

    photos: z
        .array(photoSchema)
        .optional(),

    skills: z
        .array(z.any())
        .optional(),

    interests: z
        .array(z.any())
        .optional(),

    languages: z
        .array(z.any())
        .optional(),

    socialLinks: socialLinksSchema.optional(),

    activePurpose: z
        .string()
        .optional(),

    enabledPurposes: z
        .array(z.string())
        .optional(),

    privacy: privacySchema.optional(),

});

module.exports = {
    updateProfileSchema,
};
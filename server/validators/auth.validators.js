const { z } = require("zod");

const registerSchema = z.object({
    username: z
        .string()
        .trim()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username cannot exceed 20 characters"),

    fullName: z
        .string()
        .trim()
        .min(3, "Full name must be at least 3 characters")
        .max(50, "Full name cannot exceed 50 characters"),

    email: z
        .string()
        .trim()
        .email("Invalid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(50)
});

const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email"),

    password: z
        .string()
        .min(1, "Password is required")
});

module.exports = {
    registerSchema,
    loginSchema
};
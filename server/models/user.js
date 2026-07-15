const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Full name is required"],
            trim: true,
        },

        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            trim: true,
            lowercase: true,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            validate: [validator.isEmail, "Please enter a valid email"],
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 6,
            select: false,
        },

        profilePhoto: {
            type: String,
            default: "",
        },

        age: {
            type: Number,
            min: 18,
            max: 100,
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
        },

        location: {
            type: String,
            default: "",
        },

        bio: {
            type: String,
            maxlength: 500,
            default: "",
        },

        skills: [
            {
                type: String,
            },
        ],

        interests: [
            {
                type: String,
            },
        ],

        purpose: {
            type: String,
            enum: [
                "Study Partner",
                "Travel Partner",
                "Coding Partner",
                "Fitness Partner",
                "Gaming Partner",
                "Startup Co-founder",
                "Language Exchange",
                "Event Companion",
                "Book Club",
                "Networking",
            ],
            required: true,
        },

        profession: {
            type: String,
            default: "",
        },

        education: {
            type: String,
            default: "",
        },

        github: {
            type: String,
            default: "",
        },

        linkedin: {
            type: String,
            default: "",
        },

        portfolio: {
            type: String,
            default: "",
        },

        socialLinks: [
            {
                type: String,
            },
        ],

        isVerified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
userSchema.pre("save", async function (next) {
    // Only hash if the password was modified
    if (!this.isModified("password")) {
        return next();
    }

    // Hash the password
    this.password = await bcrypt.hash(this.password, 10);

    next();
});
module.exports = mongoose.model("User", userSchema);
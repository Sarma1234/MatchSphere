const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

/* -------------------------------------------------------------------------- */
/*                               Sub Schemas                                  */
/* -------------------------------------------------------------------------- */

const photoSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
            trim: true,
        },

        publicId: {
            type: String,
            default: "",
        },

        caption: {
            type: String,
            default: "",
            trim: true,
        },

        isPrimary: {
            type: Boolean,
            default: false,
        },

        uploadedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { _id: false }
);

const skillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        level: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
            default: "Beginner",
        },
    },
    { _id: false }
);

const languageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        proficiency: {
            type: String,
            enum: ["Basic", "Intermediate", "Fluent", "Native"],
            default: "Basic",
        },
    },
    { _id: false }
);

/* -------------------------------------------------------------------------- */
/*                               User Schema                                  */
/* -------------------------------------------------------------------------- */

const userSchema = new mongoose.Schema(
    {
        /* ------------------------- Authentication ------------------------- */

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

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },

        accountStatus: {
            type: String,
            enum: ["active", "suspended", "blocked"],
            default: "active",
        },

        isEmailVerified: {
            type: Boolean,
            default: false,
        },

        lastLogin: {
            type: Date,
        },

        /* ------------------------- General Profile ------------------------- */

        bio: {
            type: String,
            maxlength: 500,
            default: "",
        },

        dateOfBirth: {
            type: Date,
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other", "Prefer not to say"],
        },

        occupation: {
            title: {
                type: String,
                default: "",
                trim: true,
            },

            company: {
                type: String,
                default: "",
                trim: true,
            },
        },

        location: {
            city: {
                type: String,
                default: "",
                trim: true,
            },

            state: {
                type: String,
                default: "",
                trim: true,
            },

            country: {
                type: String,
                default: "",
                trim: true,
            },
        },
        /* ---------------------------- Photos ---------------------------- */

        photos: {
            type: [photoSchema],
            validate: {
                validator: function (photos) {
                    return photos.length <= 6;
                },
                message: "Maximum 6 photos are allowed.",
            },
        },

        /* ---------------------------- Skills ---------------------------- */

        skills: [skillSchema],

        /* --------------------------- Interests --------------------------- */

        interests: [
            {
                type: String,
                trim: true,
            },
        ],

        /* --------------------------- Languages --------------------------- */

        languages: [languageSchema],

        /* ------------------------- Social Links ------------------------- */

        socialLinks: {
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

            instagram: {
                type: String,
                default: "",
            },

            twitter: {
                type: String,
                default: "",
            },
        },

        /* ------------------------ Active Purpose ------------------------ */

        activePurpose: {
            type: String,
            default: "",
        },
        /* --------------------- Profile Completion ---------------------- */

        profileCompletion: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },

        isProfileCompleted: {
            type: Boolean,
            default: false,
        },

        /* ------------------------- Online Status ------------------------ */

        isOnline: {
            type: Boolean,
            default: false,
        },

        lastSeen: {
            type: Date,
        },

        /* --------------------------- Verification --------------------------- */

        isVerified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

/* -------------------------------------------------------------------------- */
/*                                  Indexes                                   */
/* -------------------------------------------------------------------------- */

userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.index({ "location.city": 1 });
userSchema.index({ activePurpose: 1 });

/* -------------------------------------------------------------------------- */
/*                           Password Hash Middleware                         */
/* -------------------------------------------------------------------------- */

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12);
    next();
});

/* -------------------------------------------------------------------------- */
/*                            Compare Password Method                         */
/* -------------------------------------------------------------------------- */

userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
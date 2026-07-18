const mongoose = require("mongoose");

const MATCH_PURPOSES = require("../constants/matchPurpose");

const userPurposeSchema = new mongoose.Schema(
    {
        /* ----------------------------- User ----------------------------- */

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        /* ---------------------------- Purpose --------------------------- */

        purpose: {
            type: String,
            enum: Object.values(MATCH_PURPOSES),
            required: true,
        },

        /* --------------------- Purpose Specific Data -------------------- */

        answers: {
            type: Map,
            of: mongoose.Schema.Types.Mixed,
            default: {},
        },

        /* --------------------------- Metadata --------------------------- */

        completedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

/* -------------------------------------------------------------------------- */
/*                                   Indexes                                  */
/* -------------------------------------------------------------------------- */

// One document per user per purpose

userPurposeSchema.index(
    {
        user: 1,
        purpose: 1,
    },
    {
        unique: true,
    }
);

userPurposeSchema.index({
    user: 1,
});

userPurposeSchema.index({
    purpose: 1,
});

/* -------------------------------------------------------------------------- */

module.exports = mongoose.model(
    "UserPurpose",
    userPurposeSchema
);
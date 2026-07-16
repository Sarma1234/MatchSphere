const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
    {
        /* ------------------------- Participants ------------------------- */

        userOne: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        userTwo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        /* --------------------------- Purpose --------------------------- */

        purpose: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Purpose",
            required: true,
        },

        /* -------------------- Matching Information --------------------- */

        compatibilityScore: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },

        status: {
            type: String,
            enum: ["matched", "unmatched", "blocked"],
            default: "matched",
        },

        matchedAt: {
            type: Date,
            default: Date.now,
        },
        initiatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

/* -------------------------------------------------------------------------- */
/*                                  Indexes                                   */
/* -------------------------------------------------------------------------- */

// Prevent duplicate matches
matchSchema.index(
    {
        userOne: 1,
        userTwo: 1,
        purpose: 1,
    },
    {
        unique: true,
    }
);

matchSchema.index({ userOne: 1 });
matchSchema.index({ userTwo: 1 });
matchSchema.index({ purpose: 1 });
matchSchema.index({ status: 1 });

module.exports = mongoose.model("Match", matchSchema);
const mongoose = require("mongoose");

const MATCH_PURPOSES = require("../constants/matchPurpose");

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

        
// ...

purpose: {
    type: String,
    enum: Object.values(MATCH_PURPOSES),
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
            enum: [
                "pending",
                "matched",
                "rejected",
                "blocked",
            ],
            default: "pending",
        },

        initiatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        matchedAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

/* -------------------------------------------------------------------------- */
/*                                  Indexes                                   */
/* -------------------------------------------------------------------------- */

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

module.exports = mongoose.model(
    "Match",
    matchSchema
);
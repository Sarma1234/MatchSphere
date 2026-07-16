const mongoose = require("mongoose");

const userPurposeSchema = new mongoose.Schema(
    {
        /* ----------------------------- References ----------------------------- */

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        purpose: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Purpose",
            required: true,
        },

        /* ---------------------- Purpose Specific Answers ---------------------- */
        answers: {
            type: Map,
            of: mongoose.Schema.Types.Mixed,
            default: {}
        },

        /* -------------------------- Status -------------------------- */

        isActive: {
            type: Boolean,
            default: false,
        },

        completedAt: {
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

// One user can have only one document per purpose
userPurposeSchema.index(
    { user: 1, purpose: 1 },
    { unique: true }
);

// Faster filtering
userPurposeSchema.index({ user: 1 });
userPurposeSchema.index({ purpose: 1 });
userPurposeSchema.index({ isActive: 1 });

module.exports = mongoose.model("UserPurpose", userPurposeSchema);
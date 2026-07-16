const mongoose = require("mongoose");

const swipeSchema = new mongoose.Schema(
    {
        /* ------------------------- User Who Swiped ------------------------- */

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        /* ------------------------- Profile Swiped -------------------------- */

        targetUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        /* --------------------------- Purpose ---------------------------- */

        purpose: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Purpose",
            required: true,
        },

        /* ---------------------------- Action ---------------------------- */

        action: {
            type: String,
            enum: ["pass", "connect"],
            required: true,
        },
        source: {
            type: String,
            enum: ["discover", "recommendation"],
            default: "discover",
        }
    },
    {
        timestamps: true,
    }

);

/* -------------------------------------------------------------------------- */
/*                                   Indexes                                  */
/* -------------------------------------------------------------------------- */

// Prevent duplicate swipes for same user + target + purpose
swipeSchema.index(
    {
        user: 1,
        targetUser: 1,
        purpose: 1,
    },
    {
        unique: true,
    }
);

swipeSchema.index({ user: 1 });
swipeSchema.index({ targetUser: 1 });
swipeSchema.index({ purpose: 1 });

module.exports = mongoose.model("Swipe", swipeSchema);
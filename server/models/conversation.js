const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
    {
        /* ------------------------------ Match ------------------------------ */

        match: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Match",
            required: true,
            unique: true,
        },

        /* --------------------------- Participants -------------------------- */

        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
        ],

        /* ------------------------- Last Message Info ------------------------ */

        lastMessage: {
            type: String,
            default: "",
        },

        lastMessageSender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        lastMessageAt: {
            type: Date,
            default: null,
        },
        isActive: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
    }
);

/* -------------------------------------------------------------------------- */
/*                                  Indexes                                   */
/* -------------------------------------------------------------------------- */

conversationSchema.index({ participants: 1 });
conversationSchema.index({ match: 1 });

module.exports = mongoose.model("Conversation", conversationSchema);
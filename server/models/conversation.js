const mongoose = require("mongoose");

/* -------------------------------------------------------------------------- */
/*                           Unread Count Schema                              */
/* -------------------------------------------------------------------------- */

const unreadCountSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        count: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    {
        _id: false,
    }
);

/* -------------------------------------------------------------------------- */
/*                           Conversation Schema                              */
/* -------------------------------------------------------------------------- */

const conversationSchema = new mongoose.Schema(
    {
        /* ------------------------------- Match ------------------------------ */

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

        lastMessageType: {
            type: String,
            enum: [
                "text",
                "image",
                "video",
                "file",
                "audio",
            ],
            default: "text",
        },

        lastMessageAt: {
            type: Date,
            default: null,
        },

        /* ---------------------------- Unread ---------------------------- */

        unreadCount: [unreadCountSchema],

        /* ----------------------------- Status ------------------------------ */

        isActive: {
            type: Boolean,
            default: true,
        },
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

conversationSchema.index({ lastMessageAt: -1 });

module.exports = mongoose.model(
    "Conversation",
    conversationSchema
);
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        /* ---------------------------- Receiver ---------------------------- */

        receiver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        /* ----------------------------- Content ---------------------------- */

        title: {
            type: String,
            required: true,
            trim: true,
        },

        body: {
            type: String,
            required: true,
            trim: true,
        },

        /* ------------------------- Notification Type ------------------------- */

        type: {
            type: String,
            enum: [
                "match",
                "message",
                "purpose",
                "system",
                "announcement",
            ],
            required: true,
        },

        /* --------------------------- Reference --------------------------- */

        reference: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
            },
            model: {
                type: String,
                enum: [
                    "Match",
                    "Message",
                    "Purpose",
                    "Conversation"
                ]
            }
        }

    /* ---------------------------- Status ---------------------------- */

    isRead: {
            type: Boolean,
            default: false,
        },

        readAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

/* -------------------------------------------------------------------------- */
/*                                  Indexes                                   */
/* -------------------------------------------------------------------------- */

notificationSchema.index({ receiver: 1 });
notificationSchema.index({ isRead: 1 });
notificationSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Notification", notificationSchema);
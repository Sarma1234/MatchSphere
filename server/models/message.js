const mongoose = require("mongoose");

/* -------------------------------------------------------------------------- */
/*                             Attachment Schema                              */
/* -------------------------------------------------------------------------- */

const attachmentSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
        },

        publicId: {
            type: String,
            default: "",
        },

        type: {
            type: String,
            enum: ["image", "video", "file", "audio"],
            required: true,
        },

        fileName: {
            type: String,
            default: "",
        },

        fileSize: {
            type: Number,
            default: 0,
        },
    },
    { _id: false }
);

/* -------------------------------------------------------------------------- */
/*                              Message Schema                                */
/* -------------------------------------------------------------------------- */

const messageSchema = new mongoose.Schema(
    {
        /* -------------------------- Conversation -------------------------- */

        conversation: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Conversation",
            required: true,
        },

        /* ----------------------------- Sender ----------------------------- */

        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        /* ----------------------------- Message ---------------------------- */

        message: {
            type: String,
            trim: true,
            default: "",
        },

        /* --------------------------- Attachments -------------------------- */

        attachments: [attachmentSchema],

        /* ---------------------------- Seen By ----------------------------- */

        seenBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        /* --------------------------- Message Type ------------------------- */

        messageType: {
            type: String,
            enum: ["text", "image", "video", "file", "audio"],
            default: "text",
        },

        /* --------------------------- Soft Delete -------------------------- */

        isDeleted: {
            type: Boolean,
            default: false,
        },

        deletedAt: {
            type: Date,
            default: null,
        },
        replyTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: null,
        }
    },
    {
        timestamps: true,
    }
);

/* -------------------------------------------------------------------------- */
/*                                  Indexes                                   */
/* -------------------------------------------------------------------------- */

messageSchema.index({ conversation: 1 });
messageSchema.index({ sender: 1 });
messageSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Message", messageSchema);
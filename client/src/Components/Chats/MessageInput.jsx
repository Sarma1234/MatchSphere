import "../../pages/chats/chats.css";

import { useState } from "react";

import {
    Smile,
    Paperclip,
    SendHorizontal,
} from "lucide-react";

import { sendMessage } from "../../services/chatService";

export default function MessageInput({

    conversationId,

    onMessageSent,

}) {

    const [message, setMessage] = useState("");

    const [sending, setSending] = useState(false);

    async function handleSend() {

        if (!message.trim() || sending) return;

        try {

            setSending(true);

            await sendMessage({

                conversationId,

                content: message,

            });

            setMessage("");

            if (onMessageSent) {

                onMessageSent();

            }

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setSending(false);

        }

    }

    function handleKeyDown(e) {

        if (e.key === "Enter") {

            e.preventDefault();

            handleSend();

        }

    }

    return (

        <div className="message-input-container">

            <button className="message-icon-btn">

                <Smile size={20} />

            </button>

            <button className="message-icon-btn">

                <Paperclip size={20} />

            </button>

            <input

                type="text"

                className="message-input"

                placeholder="Type your message..."

                value={message}

                onChange={(e) =>
                    setMessage(e.target.value)
                }

                onKeyDown={handleKeyDown}

            />

            <button

                className="message-send-btn"

                onClick={handleSend}

                disabled={sending}

            >

                <SendHorizontal size={20} />

                <span>

                    {sending ? "Sending..." : "Send"}

                </span>

            </button>

        </div>

    );

}
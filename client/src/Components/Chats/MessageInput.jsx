import { Smile, Paperclip, SendHorizontal } from "lucide-react";

export default function MessageInput() {
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
                placeholder="Type your message..."
                className="message-input"
            />

            <button className="message-send-btn">
                <SendHorizontal size={20} />
                <span>Send</span>
            </button>

        </div>
    );
}
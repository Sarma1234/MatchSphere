import { Phone, Video, MoreVertical } from "lucide-react";
import OnlineStatus from "./OnlineStatus";

export default function ChatHeader({ chat }) {
    return (
        <header className="chat-header">

            <div className="chat-header-left">

                <div className="chat-header-avatar-wrapper">

                    <img
                        src={chat.avatar}
                        alt={chat.name}
                        className="chat-header-avatar"
                    />

                    <OnlineStatus online={chat.online} />

                </div>

                <div className="chat-header-info">

                    <h3>{chat.name}</h3>

                    <span className="chat-header-purpose">
                        {chat.purpose}
                    </span>

                    <p>
                        {chat.online ? "Online" : "Last seen 2 hours ago"}
                    </p>

                </div>

            </div>

            <div className="chat-header-actions">

                <button className="chat-action-btn">
                    <Video size={20} />
                </button>

                <button className="chat-action-btn">
                    <Phone size={20} />
                </button>

                <button className="chat-action-btn">
                    <MoreVertical size={20} />
                </button>

            </div>

        </header>
    );
}
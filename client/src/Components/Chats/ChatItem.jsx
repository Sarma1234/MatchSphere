import OnlineStatus from "./OnlineStatus";

export default function ChatItem({
    chat,
    isActive,
    onClick
}) {
    return (
        <div
            className={`chat-item ${isActive ? "active" : ""}`}
            onClick={onClick}
        >

            <div className="chat-avatar-wrapper">

                <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="chat-avatar"
                />

                <OnlineStatus online={chat.online} />

            </div>

            <div className="chat-content">

                <div className="chat-top-row">

                    <h4>{chat.name}</h4>

                    <span className="chat-time">
                        {chat.time}
                    </span>

                </div>

                <span className="chat-purpose">
                    {chat.purpose}
                </span>

                <div className="chat-bottom-row">

                    <p>
                        {chat.lastMessage}
                    </p>

                    {chat.unread > 0 && (
                        <div className="chat-unread">
                            {chat.unread}
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}
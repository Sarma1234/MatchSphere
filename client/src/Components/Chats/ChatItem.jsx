import OnlineStatus from "./OnlineStatus";

export default function ChatItem({

    chat,

    isActive,

    onClick,

}) {

    const otherUser =
        chat.otherUser || {};

    const avatar =
        otherUser.photos?.find(
            (photo) => photo.isPrimary
        )?.url ||

        otherUser.photos?.[0]?.url ||

        "https://ui-avatars.com/api/?name=" +
        encodeURIComponent(
            otherUser.fullName || "User"
        );

    const lastMessage =
        chat.lastMessage?.content ||

        "Start your conversation";

    const time = chat.lastMessage?.createdAt
        ? new Date(
              chat.lastMessage.createdAt
          ).toLocaleTimeString([], {

              hour: "2-digit",

              minute: "2-digit",

          })
        : "";

    const purpose =
        chat.purpose
            ?.replace(/_/g, " ")
            ?.replace(/\b\w/g, (c) =>
                c.toUpperCase()
            );

    return (

        <div

            className={`chat-item ${

                isActive ? "active" : ""

            }`}

            onClick={onClick}

        >

            <div className="chat-avatar-wrapper">

                <img

                    src={avatar}

                    alt={otherUser.fullName}

                    className="chat-avatar"

                />

                <OnlineStatus

                    online={otherUser.isOnline}

                />

            </div>

            <div className="chat-content">

                <div className="chat-top-row">

                    <h4>

                        {otherUser.fullName}

                    </h4>

                    <span className="chat-time">

                        {time}

                    </span>

                </div>

                <span className="chat-purpose">

                    {purpose}

                </span>

                <div className="chat-bottom-row">

                    <p>

                        {lastMessage}

                    </p>

                    {chat.unreadCount > 0 && (

                        <div className="chat-unread">

                            {chat.unreadCount}

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}
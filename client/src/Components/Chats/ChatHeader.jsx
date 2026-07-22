import { Phone, Video, MoreVertical } from "lucide-react";

import OnlineStatus from "./OnlineStatus";

export default function ChatHeader({ chat }) {

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

    const purpose =
        chat.purpose
            ?.replace(/_/g, " ")
            ?.replace(/\b\w/g, (char) =>
                char.toUpperCase()
            );

    return (

        <header className="chat-header">

            <div className="chat-header-left">

                <div className="chat-header-avatar-wrapper">

                    <img

                        src={avatar}

                        alt={otherUser.fullName}

                        className="chat-header-avatar"

                    />

                    <OnlineStatus

                        online={otherUser.isOnline}

                    />

                </div>

                <div className="chat-header-info">

                    <h3>

                        {otherUser.fullName}

                    </h3>

                    <span className="chat-header-purpose">

                        {purpose}

                    </span>

                    <p>

                        {otherUser.isOnline

                            ? "Online"

                            : "Offline"}

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
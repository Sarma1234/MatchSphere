import ChatItem from "./ChatItem";

export default function ChatList({
    selectedChat,
    setSelectedChat
}) {

    const chats = [
        {
            id: 1,
            name: "Sarah Johnson",
            purpose: "Study Partner",
            avatar: "https://i.pravatar.cc/150?img=32",
            lastMessage: "Ready for tomorrow's study session?",
            time: "2m",
            unread: 3,
            online: true
        },
        {
            id: 2,
            name: "Alex Carter",
            purpose: "Hackathon Team",
            avatar: "https://i.pravatar.cc/150?img=12",
            lastMessage: "Let's finalize the UI tonight.",
            time: "18m",
            unread: 0,
            online: true
        },
        {
            id: 3,
            name: "Emma Wilson",
            purpose: "Startup",
            avatar: "https://i.pravatar.cc/150?img=47",
            lastMessage: "Investor pitch deck looks great.",
            time: "1h",
            unread: 1,
            online: false
        },
        {
            id: 4,
            name: "David Lee",
            purpose: "Fitness Partner",
            avatar: "https://i.pravatar.cc/150?img=15",
            lastMessage: "Morning workout tomorrow 💪",
            time: "3h",
            unread: 0,
            online: true
        },
        {
            id: 5,
            name: "Sophia Brown",
            purpose: "Travel Buddy",
            avatar: "https://i.pravatar.cc/150?img=49",
            lastMessage: "Let's plan the Goa trip!",
            time: "Yesterday",
            unread: 0,
            online: false
        },
        {
            id: 6,
            name: "Ryan Thomas",
            purpose: "Mentor",
            avatar: "https://i.pravatar.cc/150?img=68",
            lastMessage: "Keep building. You're doing well.",
            time: "Monday",
            unread: 2,
            online: false
        }
    ];

    return (
        <div className="chat-list">

            {chats.map((chat) => (

                <ChatItem
                    key={chat.id}
                    chat={chat}
                    isActive={selectedChat?.id === chat.id}
                    onClick={() => setSelectedChat(chat)}
                />

            ))}

        </div>
    );

}
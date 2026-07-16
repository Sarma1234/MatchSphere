import SearchBar from "./SearchBar";
import ChatList from "./ChatList";

export default function ChatSidebar({
    selectedChat,
    setSelectedChat
}) {
    return (
        <div className="chat-sidebar">

            <div className="chat-sidebar-header">

                <h2>Chats</h2>

                <p>
                    Stay connected with your MatchSphere connections.
                </p>

            </div>

            <SearchBar />

            <ChatList
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
            />

        </div>
    );
}
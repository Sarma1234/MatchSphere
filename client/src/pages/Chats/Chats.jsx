import "./Chats.css";
import { useState } from "react";

import ChatSidebar from "../../components/Chats/ChatSidebar";
import ChatWindow from "../../components/Chats/ChatWindow";
import EmptyChat from "../../components/Chats/EmptyChat";

export default function Chats() {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <main className="chats-page">

            <div className="chats-container">

                <aside className="sidebar-wrapper">
                    <ChatSidebar
                        selectedChat={selectedChat}
                        setSelectedChat={setSelectedChat}
                    />
                </aside>

                <section className="chat-window-wrapper">
                    {selectedChat ? (
                        <ChatWindow chat={selectedChat} />
                    ) : (
                        <EmptyChat />
                    )}
                </section>

            </div>

        </main>
    );
}
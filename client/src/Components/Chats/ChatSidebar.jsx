import { useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import ChatList from "./ChatList";

export default function ChatSidebar({

    conversations,

    loading,

    selectedChat,

    setSelectedChat,

}) {

    const [search, setSearch] = useState("");

    /* ---------------------------------------------------------------------- */
    /*                           Filter Conversations                         */
    /* ---------------------------------------------------------------------- */

    const filteredConversations = useMemo(() => {

        if (!search.trim()) {

            return conversations;

        }

        return conversations.filter((conversation) => {

            const name =
                conversation.otherUser?.fullName || "";

            return name
                .toLowerCase()
                .includes(search.toLowerCase());

        });

    }, [search, conversations]);

    return (

        <div className="chat-sidebar">

            <div className="chat-sidebar-header">

                <h2>

                    Chats

                </h2>

                <p>

                    Stay connected with your MatchSphere connections.

                </p>

            </div>

            <SearchBar

                value={search}

                onChange={setSearch}

            />

            <ChatList

                conversations={filteredConversations}

                loading={loading}

                selectedChat={selectedChat}

                setSelectedChat={setSelectedChat}

            />

        </div>

    );

}
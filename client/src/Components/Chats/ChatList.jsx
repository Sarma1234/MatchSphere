import ChatItem from "./ChatItem";

export default function ChatList({

    conversations,

    loading,

    selectedChat,

    setSelectedChat,

}) {

    if (loading) {

        return (

            <div className="chat-list-loading">

                Loading conversations...

            </div>

        );

    }

    if (!loading && conversations.length === 0) {

        return (

            <div className="chat-list-empty">

                No conversations yet.

            </div>

        );

    }

    return (

        <div className="chat-list">

            {conversations.map((conversation) => (

                <ChatItem

                    key={conversation._id}

                    chat={conversation}

                    isActive={
                        selectedChat?._id === conversation._id
                    }

                    onClick={() =>
                        setSelectedChat(conversation)
                    }

                />

            ))}

        </div>

    );

}
import { useEffect, useState } from "react";

import MessageBubble from "./MessageBubble";

import { getMessages } from "../../services/chatService";

export default function MessageList({ chat }) {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (!chat) return;

        loadMessages();

    }, [chat]);

    async function loadMessages() {

        try {

            setLoading(true);

            const data = await getMessages(chat.conversationId);

            setMessages(data.messages || []);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

            <div className="message-list-loading">

                Loading messages...

            </div>

        );

    }

    if (!messages.length) {

        return (

            <div className="message-list-empty">

                No messages yet. Start the conversation.

            </div>

        );

    }

    return (

        <div className="message-list">

            {messages.map((message) => (

                <MessageBubble

                    key={message._id}

                    message={message}

                    currentUserId={localStorage.getItem("userId")}

                />

            ))}

        </div>

    );

}
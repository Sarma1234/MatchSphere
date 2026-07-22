import { useEffect, useState } from "react";

import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import TypingIndicator from "./TypingIndicator";
import MessageInput from "./MessageInput";

import { getMessages } from "../../services/chatService";

export default function ChatWindow({ chat }) {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(true);

    const loadMessages = async () => {

        try {

            setLoading(true);

            const data = await getMessages(

                chat.conversationId

            );

            setMessages(

                data.messages || data || []

            );

        }

        catch (error) {

            console.error(error);

            setMessages([]);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        if (chat?.conversationId) {

            loadMessages();

        }

    }, [chat]);

    return (

        <section className="chat-window">

            <ChatHeader chat={chat} />

            <div className="chat-body">

                {

                    loading ? (

                        <div className="message-list">

                            Loading messages...

                        </div>

                    ) : (

                        <MessageList

                            messages={messages}

                        />

                    )

                }

                <TypingIndicator />

            </div>

            <MessageInput

                conversationId={chat.conversationId}

                onMessageSent={loadMessages}

            />

        </section>

    );

}
import "./Chats.css";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ChatSidebar from "../../components/Chats/ChatSidebar";
import ChatWindow from "../../components/Chats/ChatWindow";
import EmptyChat from "../../components/Chats/EmptyChat";

import {
    getConversations,
    getMessages,
    sendMessage,
} from "../../services/chatService";

export default function Chats() {

    const [conversations, setConversations] = useState([]);

    const [selectedChat, setSelectedChat] = useState(null);

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(true);

    /* ---------------------------------------------------------------------- */
    /*                       Load Conversations                               */
    /* ---------------------------------------------------------------------- */

    const loadConversations = async () => {

        try {

            const response =
                await getConversations();

            const chats =
                response.data.data || [];

            setConversations(chats);

        }

        catch (err) {

            console.error(err);

            toast.error(

                err.response?.data?.message ||

                "Unable to load conversations."

            );

        }

        finally {

            setLoading(false);

        }

    };

    /* ---------------------------------------------------------------------- */
    /*                         Load Messages                                  */
    /* ---------------------------------------------------------------------- */

    const loadMessages = async (conversationId) => {

        try {

            const response =
                await getMessages(conversationId);

            setMessages(

                response.data.data || []

            );

        }

        catch (err) {

            console.error(err);

            toast.error(

                err.response?.data?.message ||

                "Unable to load messages."

            );

        }

    };

    /* ---------------------------------------------------------------------- */
    /*                         Send Message                                   */
    /* ---------------------------------------------------------------------- */

    const handleSendMessage = async (content) => {

        if (!selectedChat || !content.trim()) {

            return;

        }

        try {

            const response =
                await sendMessage({

                    conversationId: selectedChat._id,

                    content,

                });

            setMessages((prev) => [

                ...prev,

                response.data.data,

            ]);

        }

        catch (err) {

            console.error(err);

            toast.error(

                err.response?.data?.message ||

                "Unable to send message."

            );

        }

    };

    /* ---------------------------------------------------------------------- */

    useEffect(() => {

        loadConversations();

    }, []);

    /* ---------------------------------------------------------------------- */

    useEffect(() => {

        if (selectedChat) {

            loadMessages(selectedChat._id);

        }

    }, [selectedChat]);

    /* ---------------------------------------------------------------------- */

    return (

        <main className="chats-page">

            <div className="chats-container">

                <aside className="sidebar-wrapper">

                    <ChatSidebar

                        conversations={conversations}

                        loading={loading}

                        selectedChat={selectedChat}

                        setSelectedChat={setSelectedChat}

                    />

                </aside>

                <section className="chat-window-wrapper">

                    {selectedChat ? (

                        <ChatWindow

                            chat={selectedChat}

                            messages={messages}

                            onSend={handleSendMessage}

                        />

                    ) : (

                        <EmptyChat />

                    )}

                </section>

            </div>

        </main>

    );

}
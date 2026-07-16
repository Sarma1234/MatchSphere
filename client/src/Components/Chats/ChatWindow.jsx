import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import TypingIndicator from "./TypingIndicator";
import MessageInput from "./MessageInput";

export default function ChatWindow({ chat }) {
    return (
        <section className="chat-window">

            <ChatHeader chat={chat} />

            <div className="chat-body">

                <MessageList chat={chat} />

                <TypingIndicator />

            </div>

            <MessageInput />

        </section>
    );
}
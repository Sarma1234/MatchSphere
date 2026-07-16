import { MessageSquareMore } from "lucide-react";

export default function EmptyChat() {
    return (
        <section className="empty-chat">

            <div className="empty-chat-card">

                <div className="empty-chat-icon">

                    <MessageSquareMore size={72} />

                </div>

                <h2>
                    Select a Conversation
                </h2>

                <p>
                    Choose one of your MatchSphere connections from the left to
                    start chatting. Your conversations will appear here with a
                    beautiful real-time messaging experience.
                </p>

            </div>

        </section>
    );
}
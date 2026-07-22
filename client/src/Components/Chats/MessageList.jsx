import MessageBubble from "./MessageBubble";

export default function MessageList({ messages }) {

    if (!messages.length) {

        return (

            <div className="message-list">

                <div className="message-date">

                    Start your conversation 👋

                </div>

            </div>

        );

    }

    return (

        <div className="message-list">

            <div className="message-date">

                Today

            </div>

            {messages.map((message) => (

                <MessageBubble

                    key={message._id}

                    message={message}

                />

            ))}

        </div>

    );

}
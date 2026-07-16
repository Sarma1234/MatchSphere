import MessageBubble from "./MessageBubble";

export default function MessageList({ chat }) {

    const messages = [
        {
            id: 1,
            sender: "other",
            text: `Hey! Looking forward to working with you on our ${chat.purpose.toLowerCase()} goals.`,
            time: "09:20 AM"
        },
        {
            id: 2,
            sender: "me",
            text: "Absolutely! I've already started planning a few ideas.",
            time: "09:22 AM"
        },
        {
            id: 3,
            sender: "other",
            text: "Awesome 🚀",
            time: "09:23 AM"
        },
        {
            id: 4,
            sender: "other",
            text: "Let's connect tomorrow evening and discuss everything in detail.",
            time: "09:24 AM"
        },
        {
            id: 5,
            sender: "me",
            text: "Sounds good! I'll be available after 7 PM.",
            time: "09:26 AM"
        },
        {
            id: 6,
            sender: "other",
            text: "Perfect. See you then 😊",
            time: "09:27 AM"
        }
    ];

    return (
        <div className="message-list">

            <div className="message-date">
                Today
            </div>

            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                />
            ))}

        </div>
    );

}
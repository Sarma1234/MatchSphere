export default function MessageBubble({ message }) {

    const isMine = message.sender === "me";

    return (
        <div
            className={`message-row ${isMine ? "mine" : "other"}`}
        >

            <div
                className={`message-bubble ${isMine ? "mine" : "other"}`}
            >

                <p className="message-text">
                    {message.text}
                </p>

                <div className="message-footer">

                    <span className="message-time">
                        {message.time}
                    </span>

                    {isMine && (
                        <span className="message-seen">
                            ✓✓
                        </span>
                    )}

                </div>

            </div>

        </div>
    );

}
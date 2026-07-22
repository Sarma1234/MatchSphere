import "./Tabs.css";

export default function Tabs({

    activeTab,

    setActiveTab,

    incomingCount = 0,

    sentCount = 0,

    matchCount = 0,

}) {

    return (

        <section className="connections-tabs">

            <button
                className={`tab-button ${
                    activeTab === "incoming" ? "active" : ""
                }`}
                onClick={() => setActiveTab("incoming")}
            >

                <span>Incoming</span>

                <small>{incomingCount}</small>

            </button>

            <button
                className={`tab-button ${
                    activeTab === "sent" ? "active" : ""
                }`}
                onClick={() => setActiveTab("sent")}
            >

                <span>Sent</span>

                <small>{sentCount}</small>

            </button>

            <button
                className={`tab-button ${
                    activeTab === "matches" ? "active" : ""
                }`}
                onClick={() => setActiveTab("matches")}
            >

                <span>Matches</span>

                <small>{matchCount}</small>

            </button>

        </section>

    );

}
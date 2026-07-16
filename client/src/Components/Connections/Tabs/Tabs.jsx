import "./Tabs.css";

export default function Tabs() {
    return (
        <section className="connections-tabs">

            <button className="tab-button active">
                <span>Incoming</span>
                <small>24</small>
            </button>

            <button className="tab-button">
                <span>Sent</span>
                <small>11</small>
            </button>

            <button className="tab-button">
                <span>Matches</span>
                <small>18</small>
            </button>

        </section>
    );
}
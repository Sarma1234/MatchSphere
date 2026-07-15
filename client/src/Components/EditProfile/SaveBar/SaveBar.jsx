import "./SaveBar.css";

export default function SaveBar() {
    return (
        <div className="save-bar">

            <button className="draft-btn">
                Save Draft
            </button>

            <button className="continue-btn">
                Save & Continue
            </button>

        </div>
    );
}
import "./PurposeForm.css";

export default function PurposeForm() {
    return (
        <section className="purpose-form">

            <div className="section-heading">

                <h2>Study Partner Details</h2>

                <p>
                    Help others understand your study preferences.
                </p>

            </div>

            <div className="purpose-form-grid">

                <div className="input-group">
                    <label>Subjects</label>
                    <input
                        type="text"
                        placeholder="DSA, DBMS, React..."
                    />
                </div>

                <div className="input-group">
                    <label>Preferred Study Time</label>

                    <select>
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                        <option>Night</option>
                        <option>Flexible</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Study Mode</label>

                    <select>
                        <option>Online</option>
                        <option>Offline</option>
                        <option>Hybrid</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Experience Level</label>

                    <select>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </div>

                <div className="input-group full-width">
                    <label>Goals</label>

                    <textarea
                        rows="5"
                        placeholder="Describe what you're preparing for and what kind of study partner you're looking for..."
                    ></textarea>
                </div>

            </div>

        </section>
    );
}
import "./BasicInfo.css";

export default function BasicInfo() {
    return (
        <section className="basic-info">

            <div className="section-heading">

                <h2>Basic Information</h2>

                <p>
                    Tell everyone a little about yourself.
                </p>

            </div>

            <div className="basic-info-grid">

                <div className="input-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="input-group">
                    <label>Age</label>
                    <input
                        type="number"
                        placeholder="Your age"
                    />
                </div>

                <div className="input-group">
                    <label>Gender</label>

                    <select>
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non Binary</option>
                        <option>Prefer Not To Say</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>City</label>
                    <input
                        type="text"
                        placeholder="Your city"
                    />
                </div>

                <div className="input-group full-width">
                    <label>College / Company</label>
                    <input
                        type="text"
                        placeholder="College or Company"
                    />
                </div>

                <div className="input-group full-width">
                    <label>Bio</label>

                    <textarea
                        rows="5"
                        placeholder="Write something about yourself..."
                    ></textarea>

                </div>

            </div>

        </section>
    );
}
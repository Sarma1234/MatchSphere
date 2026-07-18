import "./PrivacySettings.css";


export default function PrivacySettings() {

    return (

        <div className="privacy-settings-card">


            <div className="settings-section-title">

                <h2>
                    Privacy Settings
                </h2>

                <p>
                    Control who can discover and interact with you
                </p>

            </div>



            <div className="privacy-options">


                <div className="privacy-option">

                    <div>

                        <h3>
                            Profile Visibility
                        </h3>

                        <p>
                            Allow others to view your profile
                        </p>

                    </div>


                    <label className="toggle">

                        <input
                            type="checkbox"
                            defaultChecked
                        />

                        <span></span>

                    </label>

                </div>




                <div className="privacy-option">

                    <div>

                        <h3>
                            Connection Requests
                        </h3>

                        <p>
                            Who can send you connection requests
                        </p>

                    </div>


                    <select>

                        <option>
                            Everyone
                        </option>

                        <option>
                            Matches Only
                        </option>

                        <option>
                            Nobody
                        </option>

                    </select>

                </div>




                <div className="privacy-option">

                    <div>

                        <h3>
                            Online Status
                        </h3>

                        <p>
                            Show when you are active
                        </p>

                    </div>


                    <label className="toggle">

                        <input
                            type="checkbox"
                            defaultChecked
                        />

                        <span></span>

                    </label>

                </div>




                <div className="privacy-option">

                    <div>

                        <h3>
                            Search Visibility
                        </h3>

                        <p>
                            Allow your profile to appear in discovery
                        </p>

                    </div>


                    <label className="toggle">

                        <input
                            type="checkbox"
                            defaultChecked
                        />

                        <span></span>

                    </label>

                </div>


            </div>


        </div>

    );

}
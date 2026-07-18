import "./NotificationSettings.css";


export default function NotificationSettings() {

    return (

        <div className="notification-settings-card">


            <div className="settings-section-title">

                <h2>
                    Notification Settings
                </h2>

                <p>
                    Manage alerts and updates from MatchSphere
                </p>

            </div>



            <div className="notification-options">


                <div className="notification-option">

                    <div>

                        <h3>
                            New Matches
                        </h3>

                        <p>
                            Get notified when someone matches with you
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




                <div className="notification-option">

                    <div>

                        <h3>
                            Connection Requests
                        </h3>

                        <p>
                            Receive alerts for new connection requests
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




                <div className="notification-option">

                    <div>

                        <h3>
                            Messages
                        </h3>

                        <p>
                            Get notified about new conversations
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




                <div className="notification-option">

                    <div>

                        <h3>
                            MatchSphere Updates
                        </h3>

                        <p>
                            Receive product announcements and updates
                        </p>

                    </div>


                    <label className="toggle">

                        <input
                            type="checkbox"
                        />

                        <span></span>

                    </label>

                </div>



            </div>


        </div>

    );

}
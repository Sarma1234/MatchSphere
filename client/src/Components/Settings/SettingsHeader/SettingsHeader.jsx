import "./SettingsHeader.css";


export default function SettingsHeader() {

    return (

        <div className="settings-header-card">

            <div className="settings-profile">

                <div className="settings-avatar">

                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="profile"
                    />

                </div>


                <div className="settings-user-info">

                    <h1>
                        Vikash Kumar
                    </h1>

                    <p>
                        Manage your MatchSphere account preferences
                    </p>


                    <div className="account-status">

                        <span></span>

                        Active Account

                    </div>

                </div>

            </div>


            <div className="settings-summary">

                <div className="summary-item">

                    <h3>
                        128
                    </h3>

                    <p>
                        Connections
                    </p>

                </div>


                <div className="summary-item">

                    <h3>
                        24
                    </h3>

                    <p>
                        Matches
                    </p>

                </div>


                <div className="summary-item">

                    <h3>
                        96%
                    </h3>

                    <p>
                        Profile
                    </p>

                </div>

            </div>


        </div>

    );

}
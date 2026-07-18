import "./AccountSettings.css";


export default function AccountSettings() {

    return (

        <div className="account-settings-card">

            <div className="settings-section-title">

                <h2>
                    Account Settings
                </h2>

                <p>
                    Manage your personal account information
                </p>

            </div>


            <div className="settings-options">


                <div className="settings-option">

                    <div>

                        <h3>
                            Email Address
                        </h3>

                        <p>
                            vikash@example.com
                        </p>

                    </div>


                    <button>
                        Change
                    </button>

                </div>



                <div className="settings-option">

                    <div>

                        <h3>
                            Username
                        </h3>

                        <p>
                            @vikashsphere
                        </p>

                    </div>


                    <button>
                        Edit
                    </button>

                </div>



                <div className="settings-option">

                    <div>

                        <h3>
                            Password
                        </h3>

                        <p>
                            Last updated 30 days ago
                        </p>

                    </div>


                    <button>
                        Update
                    </button>

                </div>



                <div className="settings-option">

                    <div>

                        <h3>
                            Connected Accounts
                        </h3>

                        <p>
                            Google account connected
                        </p>

                    </div>


                    <button>
                        Manage
                    </button>

                </div>


            </div>


        </div>

    );

}
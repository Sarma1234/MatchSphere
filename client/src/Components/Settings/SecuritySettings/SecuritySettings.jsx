import "./SecuritySettings.css";


export default function SecuritySettings() {

    return (

        <div className="security-settings-card">


            <div className="settings-section-title">

                <h2>
                    Security Settings
                </h2>

                <p>
                    Protect your MatchSphere account and activity
                </p>

            </div>



            <div className="security-options">



                <div className="security-option">

                    <div>

                        <h3>
                            Two Factor Authentication
                        </h3>

                        <p>
                            Add an extra layer of account security
                        </p>

                    </div>


                    <label className="security-toggle">

                        <input
                            type="checkbox"
                        />

                        <span></span>

                    </label>


                </div>




                <div className="security-option">

                    <div>

                        <h3>
                            Active Sessions
                        </h3>

                        <p>
                            Manage devices currently logged into your account
                        </p>

                    </div>


                    <button>
                        View
                    </button>


                </div>




                <div className="security-option">

                    <div>

                        <h3>
                            Login History
                        </h3>

                        <p>
                            Review recent login activity
                        </p>

                    </div>


                    <button>
                        Check
                    </button>


                </div>




                <div className="security-option">

                    <div>

                        <h3>
                            Account Recovery
                        </h3>

                        <p>
                            Manage recovery email and options
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
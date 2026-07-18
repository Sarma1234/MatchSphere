import "./DangerZone.css";


export default function DangerZone() {

    return (

        <div className="danger-zone-card">


            <div className="settings-section-title">

                <h2>
                    Danger Zone
                </h2>

                <p>
                    Permanent account actions that cannot be easily undone
                </p>

            </div>



            <div className="danger-options">



                <div className="danger-option">

                    <div>

                        <h3>
                            Deactivate Account
                        </h3>

                        <p>
                            Temporarily hide your profile and pause activity
                        </p>

                    </div>


                    <button className="warning-btn">

                        Deactivate

                    </button>


                </div>




                <div className="danger-option">

                    <div>

                        <h3>
                            Delete Account
                        </h3>

                        <p>
                            Permanently remove your account and all data
                        </p>

                    </div>


                    <button className="delete-btn">

                        Delete

                    </button>


                </div>



            </div>


        </div>

    );

}
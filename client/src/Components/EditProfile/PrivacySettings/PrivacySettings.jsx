import "./PrivacySettings.css";


export default function PrivacySettings({

    profileData,

    setProfileData,

}) {


    const privacy = profileData.privacy || {


        publicProfile: true,

        showEmail: false,

        showSocialLinks: true,

        allowMessages: true


    };



    const updatePrivacy = (field) => {


        setProfileData({

            ...profileData,

            privacy: {

                ...privacy,

                [field]: !privacy[field],

            },

        });


    };



    return (

        <section className="privacy-settings">


            <div className="section-heading">


                <h2>
                    Privacy Settings
                </h2>


                <p>
                    Control what others can see on your profile.
                </p>


            </div>




            <div className="privacy-list">



                <div className="privacy-item">


                    <div className="privacy-info">

                        <h3>
                            Public Profile
                        </h3>


                        <p>
                            Your profile will appear in Discover.
                        </p>

                    </div>


                    <button

                        className={
                            `toggle-switch ${
                                
                                privacy.publicProfile
                                    ? "active"
                                    : ""

                            }`
                        }

                        onClick={() =>
                            updatePrivacy(
                                "publicProfile"
                            )
                        }

                    >

                        <span></span>

                    </button>


                </div>





                <div className="privacy-item">


                    <div className="privacy-info">


                        <h3>
                            Show Email
                        </h3>


                        <p>
                            Display your email on your public profile.
                        </p>


                    </div>



                    <button

                        className={
                            `toggle-switch ${
                                
                                privacy.showEmail
                                    ? "active"
                                    : ""

                            }`
                        }

                        onClick={() =>
                            updatePrivacy(
                                "showEmail"
                            )
                        }

                    >

                        <span></span>

                    </button>


                </div>





                <div className="privacy-item">


                    <div className="privacy-info">


                        <h3>
                            Show Social Links
                        </h3>


                        <p>
                            Allow others to view your social profiles.
                        </p>


                    </div>



                    <button

                        className={
                            `toggle-switch ${
                                
                                privacy.showSocialLinks
                                    ? "active"
                                    : ""

                            }`
                        }

                        onClick={() =>
                            updatePrivacy(
                                "showSocialLinks"
                            )
                        }

                    >

                        <span></span>

                    </button>


                </div>





                <div className="privacy-item">


                    <div className="privacy-info">


                        <h3>
                            Allow Direct Messages
                        </h3>


                        <p>
                            Anyone who matches with you can message you.
                        </p>


                    </div>



                    <button

                        className={
                            `toggle-switch ${
                                
                                privacy.allowMessages
                                    ? "active"
                                    : ""

                            }`
                        }

                        onClick={() =>
                            updatePrivacy(
                                "allowMessages"
                            )
                        }

                    >

                        <span></span>

                    </button>


                </div>




            </div>


        </section>

    );

}
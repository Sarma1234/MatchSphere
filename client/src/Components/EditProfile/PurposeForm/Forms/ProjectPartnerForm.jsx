import "../PurposeForm.css";

export default function ProjectPartnerForm({

    profileData,

    setProfileData,

}) {

    const answers =
        profileData.purposeAnswers?.project_partner || {};



    const handleChange = (field, value) => {

        setProfileData({

            ...profileData,

            purposeAnswers: {

                ...profileData.purposeAnswers,

                project_partner: {

                    ...answers,

                    [field]: value,

                },

            },

        });

    };



    return (

        <section className="purpose-form">

            <div className="section-heading">

                <h2>
                    Project Partner Details
                </h2>

                <p>
                    Find collaborators who can help you build meaningful projects.
                </p>

            </div>

            <div className="purpose-form-grid">

                <div className="input-group">

                    <label>
                        Project Domain
                    </label>

                    <input

                        type="text"

                        placeholder="Web App, AI, Mobile App..."

                        value={answers.domain || ""}

                        onChange={(e)=>
                            handleChange("domain", e.target.value)
                        }

                    />

                </div>



                <div className="input-group">

                    <label>
                        Your Role
                    </label>

                    <select

                        value={answers.myRole || ""}

                        onChange={(e)=>
                            handleChange("myRole", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Frontend Developer
                        </option>

                        <option>
                            Backend Developer
                        </option>

                        <option>
                            Full Stack Developer
                        </option>

                        <option>
                            UI / UX Designer
                        </option>

                        <option>
                            AI / ML Engineer
                        </option>

                        <option>
                            Product Manager
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Looking For
                    </label>

                    <select

                        value={answers.partnerRole || ""}

                        onChange={(e)=>
                            handleChange("partnerRole", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Frontend Developer
                        </option>

                        <option>
                            Backend Developer
                        </option>

                        <option>
                            Full Stack Developer
                        </option>

                        <option>
                            UI / UX Designer
                        </option>

                        <option>
                            AI / ML Engineer
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Project Duration
                    </label>

                    <select

                        value={answers.duration || ""}

                        onChange={(e)=>
                            handleChange("duration", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Less than 1 Month
                        </option>

                        <option>
                            1 - 3 Months
                        </option>

                        <option>
                            3 - 6 Months
                        </option>

                        <option>
                            More than 6 Months
                        </option>

                    </select>

                </div>



                <div className="input-group full-width">

                    <label>
                        Project Description
                    </label>

                    <textarea

                        rows="4"

                        placeholder="Describe your project idea..."

                        value={answers.description || ""}

                        onChange={(e)=>
                            handleChange("description", e.target.value)
                        }

                    />

                </div>



                <div className="input-group full-width">

                    <label>
                        Expected Contribution
                    </label>

                    <textarea

                        rows="4"

                        placeholder="What do you expect from your project partner?"

                        value={answers.expectations || ""}

                        onChange={(e)=>
                            handleChange("expectations", e.target.value)
                        }

                    />

                </div>

            </div>

        </section>

    );

}
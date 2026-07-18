import "../PurposeForm.css";

export default function HackathonPartnerForm({

    profileData,

    setProfileData,

}) {

    const answers =
        profileData.purposeAnswers?.hackathon_partner || {};



    const handleChange = (field, value) => {

        setProfileData({

            ...profileData,

            purposeAnswers: {

                ...profileData.purposeAnswers,

                hackathon_partner: {

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
                    Hackathon Partner Details
                </h2>

                <p>
                    Find teammates who complement your skills and hackathon goals.
                </p>

            </div>

            <div className="purpose-form-grid">

                <div className="input-group">

                    <label>
                        Preferred Tech Stack
                    </label>

                    <input

                        type="text"

                        placeholder="React, Node.js, Flutter..."

                        value={answers.techStack || ""}

                        onChange={(e)=>
                            handleChange("techStack", e.target.value)
                        }

                    />

                </div>



                <div className="input-group">

                    <label>
                        Your Role
                    </label>

                    <select

                        value={answers.role || ""}

                        onChange={(e)=>
                            handleChange("role", e.target.value)
                        }

                    >

                        <option value="">
                            Select Role
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
                        Experience Level
                    </label>

                    <select

                        value={answers.experience || ""}

                        onChange={(e)=>
                            handleChange("experience", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Beginner
                        </option>

                        <option>
                            Intermediate
                        </option>

                        <option>
                            Advanced
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Team Size
                    </label>

                    <select

                        value={answers.teamSize || ""}

                        onChange={(e)=>
                            handleChange("teamSize", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            2 Members
                        </option>

                        <option>
                            3 Members
                        </option>

                        <option>
                            4 Members
                        </option>

                        <option>
                            5+ Members
                        </option>

                    </select>

                </div>



                <div className="input-group full-width">

                    <label>
                        Hackathon Goals
                    </label>

                    <textarea

                        rows="5"

                        placeholder="Tell others what kind of hackathons and teammates you're looking for..."

                        value={answers.goals || ""}

                        onChange={(e)=>
                            handleChange("goals", e.target.value)
                        }

                    />

                </div>

            </div>

        </section>

    );

}
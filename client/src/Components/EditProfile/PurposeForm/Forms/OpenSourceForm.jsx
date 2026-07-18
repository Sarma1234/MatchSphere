import "../PurposeForm.css";

export default function OpenSourceForm({

    profileData,

    setProfileData,

}) {

    const answers =
        profileData.purposeAnswers?.open_source || {};



    const handleChange = (field, value) => {

        setProfileData({

            ...profileData,

            purposeAnswers: {

                ...profileData.purposeAnswers,

                open_source: {

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
                    Open Source Details
                </h2>

                <p>
                    Connect with contributors who share your passion for building open-source projects.
                </p>

            </div>

            <div className="purpose-form-grid">

                <div className="input-group">

                    <label>
                        Preferred Technologies
                    </label>

                    <input

                        type="text"

                        placeholder="React, Node.js, Python..."

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

                        value={answers.myRole || ""}

                        onChange={(e)=>
                            handleChange("myRole", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Maintainer
                        </option>

                        <option>
                            Contributor
                        </option>

                        <option>
                            Documentation
                        </option>

                        <option>
                            Designer
                        </option>

                        <option>
                            Tester
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Experience Level
                    </label>

                    <select

                        value={answers.level || ""}

                        onChange={(e)=>
                            handleChange("level", e.target.value)
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
                        Contribution Type
                    </label>

                    <select

                        value={answers.contributionType || ""}

                        onChange={(e)=>
                            handleChange("contributionType", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Code
                        </option>

                        <option>
                            Documentation
                        </option>

                        <option>
                            UI / UX
                        </option>

                        <option>
                            Testing
                        </option>

                        <option>
                            Anything
                        </option>

                    </select>

                </div>



                <div className="input-group full-width">

                    <label>
                        GitHub Profile
                    </label>

                    <input

                        type="text"

                        placeholder="https://github.com/username"

                        value={answers.github || ""}

                        onChange={(e)=>
                            handleChange("github", e.target.value)
                        }

                    />

                </div>



                <div className="input-group full-width">

                    <label>
                        About Your Open Source Interests
                    </label>

                    <textarea

                        rows="5"

                        placeholder="Tell others about the projects you contribute to and what you're looking for..."

                        value={answers.description || ""}

                        onChange={(e)=>
                            handleChange("description", e.target.value)
                        }

                    />

                </div>

            </div>

        </section>

    );

}
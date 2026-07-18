import "../PurposeForm.css";

export default function StudyPartnerForm({

    profileData,

    setProfileData,

}) {

    const answers =
        profileData.purposeAnswers?.study_partner || {};



    const handleChange = (field, value) => {

        setProfileData({

            ...profileData,

            purposeAnswers: {

                ...profileData.purposeAnswers,

                study_partner: {

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
                    Study Partner Details
                </h2>

                <p>
                    Help others understand your study preferences.
                </p>

            </div>

            <div className="purpose-form-grid">

                <div className="input-group">

                    <label>
                        Subjects
                    </label>

                    <input

                        type="text"

                        placeholder="DSA, DBMS, React..."

                        value={answers.subjects || ""}

                        onChange={(e)=>
                            handleChange("subjects", e.target.value)
                        }

                    />

                </div>



                <div className="input-group">

                    <label>
                        Preferred Study Time
                    </label>

                    <select

                        value={answers.studyTime || ""}

                        onChange={(e)=>
                            handleChange("studyTime", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Morning
                        </option>

                        <option>
                            Afternoon
                        </option>

                        <option>
                            Evening
                        </option>

                        <option>
                            Night
                        </option>

                        <option>
                            Flexible
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Study Mode
                    </label>

                    <select

                        value={answers.studyMode || ""}

                        onChange={(e)=>
                            handleChange("studyMode", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Online
                        </option>

                        <option>
                            Offline
                        </option>

                        <option>
                            Hybrid
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



                <div className="input-group full-width">

                    <label>
                        Goals
                    </label>

                    <textarea

                        rows="5"

                        placeholder="Describe what you're preparing for and what kind of study partner you're looking for..."

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
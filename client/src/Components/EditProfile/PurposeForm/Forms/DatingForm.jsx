import "../PurposeForm.css";

export default function DatingForm({

    profileData,

    setProfileData,

}) {

    const answers =
        profileData.purposeAnswers?.dating || {};



    const handleChange = (field, value) => {

        setProfileData({

            ...profileData,

            purposeAnswers: {

                ...profileData.purposeAnswers,

                dating: {

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
                    Dating Preferences
                </h2>

                <p>
                    Share your preferences so we can help you find compatible matches.
                </p>

            </div>

            <div className="purpose-form-grid">

                <div className="input-group">

                    <label>
                        Looking For
                    </label>

                    <select

                        value={answers.relationshipType || ""}

                        onChange={(e)=>
                            handleChange("relationshipType", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Serious Relationship
                        </option>

                        <option>
                            Long Term
                        </option>

                        <option>
                            Casual Dating
                        </option>

                        <option>
                            Friendship First
                        </option>

                        <option>
                            Open to Explore
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Preferred Age Range
                    </label>

                    <input

                        type="text"

                        placeholder="21 - 28"

                        value={answers.ageRange || ""}

                        onChange={(e)=>
                            handleChange("ageRange", e.target.value)
                        }

                    />

                </div>



                <div className="input-group">

                    <label>
                        Preferred Meeting Style
                    </label>

                    <select

                        value={answers.meetingStyle || ""}

                        onChange={(e)=>
                            handleChange("meetingStyle", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Online First
                        </option>

                        <option>
                            Meet in Person
                        </option>

                        <option>
                            Either
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Distance Preference
                    </label>

                    <select

                        value={answers.distance || ""}

                        onChange={(e)=>
                            handleChange("distance", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Same City
                        </option>

                        <option>
                            Same State
                        </option>

                        <option>
                            Anywhere in India
                        </option>

                        <option>
                            No Preference
                        </option>

                    </select>

                </div>



                <div className="input-group full-width">

                    <label>
                        Ideal Partner
                    </label>

                    <textarea

                        rows="4"

                        placeholder="Describe the qualities you're looking for in a partner..."

                        value={answers.partnerPreference || ""}

                        onChange={(e)=>
                            handleChange("partnerPreference", e.target.value)
                        }

                    />

                </div>



                <div className="input-group full-width">

                    <label>
                        About You
                    </label>

                    <textarea

                        rows="5"

                        placeholder="Tell potential matches a little about yourself..."

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
import "../PurposeForm.css";

export default function FitnessPartnerForm({

    profileData,

    setProfileData,

}) {

    const answers =
        profileData.purposeAnswers?.fitness_partner || {};



    const handleChange = (field, value) => {

        setProfileData({

            ...profileData,

            purposeAnswers: {

                ...profileData.purposeAnswers,

                fitness_partner: {

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
                    Fitness Partner Details
                </h2>

                <p>
                    Find someone who shares your fitness goals and keeps you motivated.
                </p>

            </div>

            <div className="purpose-form-grid">

                <div className="input-group">

                    <label>
                        Fitness Goal
                    </label>

                    <select

                        value={answers.goal || ""}

                        onChange={(e)=>
                            handleChange("goal", e.target.value)
                        }

                    >

                        <option value="">
                            Select Goal
                        </option>

                        <option>
                            Weight Loss
                        </option>

                        <option>
                            Muscle Gain
                        </option>

                        <option>
                            Strength Training
                        </option>

                        <option>
                            General Fitness
                        </option>

                        <option>
                            Marathon / Endurance
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Workout Type
                    </label>

                    <select

                        value={answers.workoutType || ""}

                        onChange={(e)=>
                            handleChange("workoutType", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Gym
                        </option>

                        <option>
                            Home Workout
                        </option>

                        <option>
                            Running
                        </option>

                        <option>
                            Yoga
                        </option>

                        <option>
                            CrossFit
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Fitness Level
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
                        Preferred Workout Time
                    </label>

                    <select

                        value={answers.workoutTime || ""}

                        onChange={(e)=>
                            handleChange("workoutTime", e.target.value)
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



                <div className="input-group full-width">

                    <label>
                        Preferred Workout Location
                    </label>

                    <input

                        type="text"

                        placeholder="Gym name, City, Online..."

                        value={answers.location || ""}

                        onChange={(e)=>
                            handleChange("location", e.target.value)
                        }

                    />

                </div>



                <div className="input-group full-width">

                    <label>
                        About Your Fitness Journey
                    </label>

                    <textarea

                        rows="5"

                        placeholder="Describe your routine, motivation and what kind of workout partner you're looking for..."

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
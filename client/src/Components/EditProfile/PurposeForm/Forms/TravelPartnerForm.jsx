import "../PurposeForm.css";

export default function TravelPartnerForm({

    profileData,

    setProfileData,

}) {

    const answers =
        profileData.purposeAnswers?.travel_partner || {};



    const handleChange = (field, value) => {

        setProfileData({

            ...profileData,

            purposeAnswers: {

                ...profileData.purposeAnswers,

                travel_partner: {

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
                    Travel Partner Details
                </h2>

                <p>
                    Tell others about your travel style and the type of travel companion you're looking for.
                </p>

            </div>

            <div className="purpose-form-grid">

                <div className="input-group">

                    <label>
                        Travel Style
                    </label>

                    <select

                        value={answers.travelStyle || ""}

                        onChange={(e)=>
                            handleChange("travelStyle", e.target.value)
                        }

                    >

                        <option value="">
                            Select Style
                        </option>

                        <option>
                            Backpacking
                        </option>

                        <option>
                            Road Trips
                        </option>

                        <option>
                            Luxury
                        </option>

                        <option>
                            Adventure
                        </option>

                        <option>
                            Solo Travel
                        </option>

                        <option>
                            Cultural Exploration
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Preferred Destination
                    </label>

                    <input

                        type="text"

                        placeholder="Goa, Himachal, Japan..."

                        value={answers.destination || ""}

                        onChange={(e)=>
                            handleChange("destination", e.target.value)
                        }

                    />

                </div>



                <div className="input-group">

                    <label>
                        Travel Frequency
                    </label>

                    <select

                        value={answers.frequency || ""}

                        onChange={(e)=>
                            handleChange("frequency", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Monthly
                        </option>

                        <option>
                            Every 3 Months
                        </option>

                        <option>
                            Twice a Year
                        </option>

                        <option>
                            Once a Year
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Budget Preference
                    </label>

                    <select

                        value={answers.budget || ""}

                        onChange={(e)=>
                            handleChange("budget", e.target.value)
                        }

                    >

                        <option value="">
                            Select
                        </option>

                        <option>
                            Budget
                        </option>

                        <option>
                            Mid Range
                        </option>

                        <option>
                            Luxury
                        </option>

                        <option>
                            Flexible
                        </option>

                    </select>

                </div>



                <div className="input-group full-width">

                    <label>
                        Dream Destination
                    </label>

                    <input

                        type="text"

                        placeholder="Where do you want to travel next?"

                        value={answers.dreamDestination || ""}

                        onChange={(e)=>
                            handleChange("dreamDestination", e.target.value)
                        }

                    />

                </div>



                <div className="input-group full-width">

                    <label>
                        About Your Travel Preferences
                    </label>

                    <textarea

                        rows="5"

                        placeholder="Describe the kind of trips and travel partner you're looking for..."

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
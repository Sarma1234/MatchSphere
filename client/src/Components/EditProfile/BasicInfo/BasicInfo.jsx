import "./BasicInfo.css";

export default function BasicInfo({
    profileData,
    setProfileData,
}) {

    const calculateAge = (dateOfBirth) => {

        if (!dateOfBirth) return "";

        const today = new Date();
        const birthDate = new Date(dateOfBirth);

        let age =
            today.getFullYear() -
            birthDate.getFullYear();

        const monthDifference =
            today.getMonth() -
            birthDate.getMonth();

        if (
            monthDifference < 0 ||
            (
                monthDifference === 0 &&
                today.getDate() < birthDate.getDate()
            )
        ) {
            age--;
        }

        return age;
    };

    const ageToDOB = (age) => {

        if (!age) return "";

        const today = new Date();

        const birthYear =
            today.getFullYear() -
            Number(age);

        return new Date(
            birthYear,
            today.getMonth(),
            today.getDate()
        )
            .toISOString()
            .split("T")[0];

    };

    return (

        <section className="basic-info">

            <div className="section-heading">

                <h2>
                    Basic Information
                </h2>

                <p>
                    Tell everyone a little about yourself.
                </p>

            </div>

            <div className="basic-info-grid">

                {/* ---------------- Personal Information ---------------- */}

                <div className="full-width">

                    <h3 className="form-subheading">
                        Personal Information
                    </h3>

                </div>

                <div className="input-group">

                    <label>
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={profileData.fullName || ""}
                        onChange={(e) =>
                            setProfileData({
                                ...profileData,
                                fullName: e.target.value,
                            })
                        }
                    />

                </div>

                <div className="input-group">

                    <label>
                        Username
                    </label>

                    <input
                        type="text"
                        value={profileData.username || ""}
                        disabled
                    />

                </div>

                <div className="input-group">

                    <label>
                        Email
                    </label>

                    <input
                        type="email"
                        value={profileData.email || ""}
                        disabled
                    />

                </div>

                <div className="input-group">

                    <label>
                        Headline
                    </label>

                    <input
                        type="text"
                        placeholder="MERN Developer"
                        value={profileData.headline || ""}
                        onChange={(e) =>
                            setProfileData({
                                ...profileData,
                                headline: e.target.value,
                            })
                        }
                    />

                </div>

                <div className="input-group">

                    <label>
                        Age
                    </label>

                    <input
                        type="number"
                        placeholder="Your age"
                        value={calculateAge(profileData.dateOfBirth)}
                        onChange={(e) =>
                            setProfileData({
                                ...profileData,
                                dateOfBirth: ageToDOB(
                                    e.target.value
                                ),
                            })
                        }
                    />

                </div>

                <div className="input-group">

                    <label>
                        Gender
                    </label>

                    <select
                        value={profileData.gender || ""}
                        onChange={(e) =>
                            setProfileData({
                                ...profileData,
                                gender: e.target.value,
                            })
                        }
                    >

                        <option value="">
                            Select Gender
                        </option>

                        <option value="Male">
                            Male
                        </option>

                        <option value="Female">
                            Female
                        </option>

                        <option value="Other">
                            Other
                        </option>

                        <option value="Prefer not to say">
                            Prefer not to say
                        </option>

                    </select>

                </div>
                                {/* ---------------- Professional Information ---------------- */}

                <div className="full-width">

                    <h3 className="form-subheading">
                        Professional Information
                    </h3>

                </div>

                <div className="input-group">

                    <label>
                        Job Title
                    </label>

                    <input
                        type="text"
                        placeholder="Software Engineer"
                        value={
                            profileData.professional?.title || ""
                        }
                        onChange={(e) =>
                            setProfileData({

                                ...profileData,

                                professional: {

                                    ...profileData.professional,

                                    title: e.target.value,

                                },

                            })
                        }
                    />

                </div>

                <div className="input-group">

                    <label>
                        Company
                    </label>

                    <input
                        type="text"
                        placeholder="Google, Microsoft..."
                        value={
                            profileData.professional?.company || ""
                        }
                        onChange={(e) =>
                            setProfileData({

                                ...profileData,

                                professional: {

                                    ...profileData.professional,

                                    company: e.target.value,

                                },

                            })
                        }
                    />

                </div>

                {/* ---------------- Education ---------------- */}

                <div className="full-width">

                    <h3 className="form-subheading">
                        Education
                    </h3>

                </div>

                <div className="input-group">

                    <label>
                        College
                    </label>

                    <input
                        type="text"
                        placeholder="University / College"
                        value={
                            profileData.education?.college || ""
                        }
                        onChange={(e) =>
                            setProfileData({

                                ...profileData,

                                education: {

                                    ...profileData.education,

                                    college: e.target.value,

                                },

                            })
                        }
                    />

                </div>

                <div className="input-group">

                    <label>
                        Degree
                    </label>

                    <input
                        type="text"
                        placeholder="B.Tech, MBA, BCA..."
                        value={
                            profileData.education?.degree || ""
                        }
                        onChange={(e) =>
                            setProfileData({

                                ...profileData,

                                education: {

                                    ...profileData.education,

                                    degree: e.target.value,

                                },

                            })
                        }
                    />

                </div>

                <div className="input-group">

                    <label>
                        Graduation Year
                    </label>

                    <input
                        type="number"
                        placeholder="2028"
                        value={
                            profileData.education?.graduationYear || ""
                        }
                        onChange={(e) =>
                            setProfileData({

                                ...profileData,

                                education: {

                                    ...profileData.education,

                                    graduationYear: e.target.value,

                                },

                            })
                        }
                    />

                </div>
                                {/* ---------------- Location ---------------- */}

                <div className="full-width">

                    <h3 className="form-subheading">
                        Location
                    </h3>

                </div>

                <div className="input-group">

                    <label>
                        City
                    </label>

                    <input
                        type="text"
                        placeholder="Your City"
                        value={
                            profileData.location?.city || ""
                        }
                        onChange={(e) =>
                            setProfileData({

                                ...profileData,

                                location: {

                                    ...profileData.location,

                                    city: e.target.value,

                                },

                            })
                        }
                    />

                </div>

                <div className="input-group">

                    <label>
                        State
                    </label>

                    <input
                        type="text"
                        placeholder="Your State"
                        value={
                            profileData.location?.state || ""
                        }
                        onChange={(e) =>
                            setProfileData({

                                ...profileData,

                                location: {

                                    ...profileData.location,

                                    state: e.target.value,

                                },

                            })
                        }
                    />

                </div>

                <div className="input-group">

                    <label>
                        Country
                    </label>

                    <input
                        type="text"
                        placeholder="Your Country"
                        value={
                            profileData.location?.country || ""
                        }
                        onChange={(e) =>
                            setProfileData({

                                ...profileData,

                                location: {

                                    ...profileData.location,

                                    country: e.target.value,

                                },

                            })
                        }
                    />

                </div>

                {/* ---------------- About ---------------- */}

                <div className="full-width">

                    <h3 className="form-subheading">
                        About You
                    </h3>

                </div>

                <div className="input-group full-width">

                    <label>
                        Bio
                    </label>

                    <textarea
                        rows="5"
                        placeholder="Tell people about yourself, your goals, passions and what you're looking for on MatchSphere..."
                        value={profileData.bio || ""}
                        onChange={(e) =>
                            setProfileData({

                                ...profileData,

                                bio: e.target.value,

                            })
                        }
                    />

                </div>

            </div>

        </section>

    );

}
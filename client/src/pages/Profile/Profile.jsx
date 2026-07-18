import "./Profile.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfilePreview from "../../components/EditProfile/ProfilePreview/ProfilePreview";

import { getMyProfile } from "../../services/userService";
import ProfileCompletion from "../../components/Profile/ProfileCompletion/ProfileCompletion";

import { toast } from "react-toastify";

export default function Profile() {

    const navigate = useNavigate();

    const [profileData, setProfileData] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const response = await getMyProfile();

                setProfileData(response.data);

            } catch (error) {

                console.error(error);

                toast.error("Failed to load profile.");

            } finally {

                setLoading(false);

            }

        };

        fetchProfile();

    }, []);

    if (loading) {

        return (

            <main className="profile-page">

                <h2 style={{ textAlign: "center", marginTop: "100px" }}>

                    Loading Profile...

                </h2>

            </main>

        );

    }

    if (!profileData) {

        return (

            <main className="profile-page">

                <h2 style={{ textAlign: "center", marginTop: "100px" }}>

                    Unable to load profile.

                </h2>

            </main>

        );

    }

    return (

        <main className="profile-page">

            <div className="profile-container">

                <section className="profile-content">

                    <div className="profile-card">

                        <div className="profile-avatar">

                            <img

                                src={
                                    profileData.photos?.find(
                                        photo => photo.isPrimary
                                    )?.url ||
                                    "https://i.pravatar.cc/300"
                                }

                                alt="Profile"

                            />

                        </div>

                        <h1>

                            {profileData.fullName}

                        </h1>

                        <p className="profile-username">

                            @{profileData.username}

                        </p>

                        <span className="profile-purpose">

                            {profileData.activePurpose
                                ?.replaceAll("_", " ")
                            }

                        </span>

                        <h3>

                            {profileData.headline || "No headline added"}

                        </h3>

                        <p className="profile-bio">

                            {profileData.bio || "No bio added yet."}

                        </p>

                        <div className="profile-details">

                            <p>

                                📍

                                {profileData.location?.city || "Unknown"}

                                {profileData.location?.country
                                    ? `, ${profileData.location.country}`
                                    : ""}

                            </p>

                            <p>

                                💼

                                {profileData.professional?.title ||
                                    "Not specified"}

                            </p>

                            <p>

                                🎓

                                {profileData.education?.college ||
                                    "Not specified"}

                            </p>

                        </div>

                        <div className="profile-skills">

                            {(profileData.skills || []).length > 0 ? (

                                profileData.skills.map((skill, index) => (

                                    <span key={index}>

                                        {typeof skill === "string"
                                            ? skill
                                            : skill.name}

                                    </span>

                                ))

                            ) : (

                                <span>No skills added</span>

                            )}

                        </div>

                        <div className="profile-interests">

                            {(profileData.interests || []).length > 0 ? (

                                profileData.interests.map((interest, index) => (

                                    <span key={index}>

                                        {interest}

                                    </span>

                                ))

                            ) : (

                                <span>No interests added</span>

                            )}

                        </div>

                    </div>

                    <div className="profile-action-card">
<div className="profile-action-content">

    <ProfileCompletion

        percentage={profileData.profileCompletion || 0}

        size={80}

    />

    <div>

        <h2>

            {

                profileData.isProfileCompleted

                    ? "Your profile is ready"

                    : "Complete your MatchSphere profile"

            }

        </h2>

        <p>

            {

                profileData.isProfileCompleted

                    ? "Your profile is complete and ready for better matches."

                    : "Complete your profile to improve visibility, increase match quality and connect with the right people."

            }

        </p>

    </div>

</div>

                        <button

                            className="profile-action-btn"

                            onClick={() => navigate("/edit-profile")}

                        >

                            {

                                profileData.isProfileCompleted

                                    ? "Edit Profile"

                                    : "Complete Profile"

                            }

                        </button>

                    </div>

                </section>

                <aside className="profile-preview">

                    <ProfilePreview

                        profileData={profileData}

                    />

                </aside>

            </div>

        </main>

    );

}
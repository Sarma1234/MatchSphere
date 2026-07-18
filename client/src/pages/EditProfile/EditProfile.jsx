import "./EditProfile.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ProfileHeader from "../../components/EditProfile/ProfileHeader/ProfileHeader";
import BasicInfo from "../../components/EditProfile/BasicInfo/BasicInfo";
import PurposeSelector from "../../components/EditProfile/PurposeSelector/PurposeSelector";
import PurposeForm from "../../components/EditProfile/PurposeForm/PurposeForm";
import SkillsSection from "../../components/EditProfile/SkillsSection/SkillsSection";
import InterestsSection from "../../components/EditProfile/InterestsSection/InterestsSection";
// import SocialLinks from "../../components/EditProfile/SocialLinks/SocialLinks";
import PrivacySettings from "../../components/EditProfile/PrivacySettings/PrivacySettings";
import ProfilePreview from "../../components/EditProfile/ProfilePreview/ProfilePreview";
import SaveBar from "../../components/EditProfile/SaveBar/SaveBar";

import { getMyProfile } from "../../services/userService";

export default function EditProfile() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [profileData, setProfileData] = useState({

        fullName: "",

        username: "",

        email: "",

        headline: "",

        bio: "",

        gender: "",

        dateOfBirth: "",

        professional: {

            title: "",

            company: "",

        },

        education: {

            college: "",

            degree: "",

            graduationYear: "",

        },

        location: {

            city: "",

            state: "",

            country: "",

        },

        photos: [],

        skills: [],

        interests: [],

        languages: [],

        socialLinks: {

            github: "",

            linkedin: "",

            portfolio: "",

            instagram: "",

            twitter: "",

        },

        activePurpose: "study_partner",

        enabledPurposes: ["study_partner"],

        purposeAnswers: {

            study_partner: {},

            hackathon_partner: {},

            startup_cofounder: {},

            project_partner: {},

            open_source: {},

            fitness_partner: {},

            travel_partner: {},

            dating: {},

        },

        privacy: {

            publicProfile: true,

            showEmail: false,

            showSocialLinks: true,

            allowMessages: true,

        },

    });

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const response = await getMyProfile();

                setProfileData(prev => ({

                    ...prev,

                    ...response.data,

                    purposeAnswers: prev.purposeAnswers,

                }));

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

            <main className="edit-profile-page">

                <h2 style={{ textAlign: "center", marginTop: "100px" }}>

                    Loading Profile...

                </h2>

            </main>

        );

    }

    return (

        <main className="edit-profile-page">

            <div className="edit-profile-topbar">

                <button

                    className="back-profile-btn"

                    onClick={() => navigate("/profile")}

                >

                    ← Back to Profile

                </button>

                <div className="edit-profile-heading">

                    <h1>Edit Profile</h1>

                    <p>

                        Update your MatchSphere profile, purpose,
                        skills and preferences.

                    </p>

                </div>

            </div>

            <div className="edit-profile-container">

                <section className="edit-profile-content">

                    <ProfileHeader
    profileData={profileData}
/>

                    <BasicInfo

                        profileData={profileData}

                        setProfileData={setProfileData}

                    />

                    <PurposeSelector

                        profileData={profileData}

                        setProfileData={setProfileData}

                    />

                    <PurposeForm

                        profileData={profileData}

                        setProfileData={setProfileData}

                    />

                    <SkillsSection

                        profileData={profileData}

                        setProfileData={setProfileData}

                    />

                    <InterestsSection

                        profileData={profileData}

                        setProfileData={setProfileData}

                    />

                    {/*

                    <SocialLinks

                        profileData={profileData}

                        setProfileData={setProfileData}

                    />

                    */}

                    <PrivacySettings

                        profileData={profileData}

                        setProfileData={setProfileData}

                    />

                </section>

                <aside className="edit-profile-preview">

                    <ProfilePreview

                        profileData={profileData}

                    />

                </aside>

            </div>

            <SaveBar

                profileData={profileData}

                setProfileData={setProfileData}

            />

        </main>

    );

}
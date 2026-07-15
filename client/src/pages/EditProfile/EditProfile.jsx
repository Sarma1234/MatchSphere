import "./EditProfile.css";

import ProfileHeader from "../../components/EditProfile/ProfileHeader/ProfileHeader";
import BasicInfo from "../../components/EditProfile/BasicInfo/BasicInfo";
import PurposeSelector from "../../components/EditProfile/PurposeSelector/PurposeSelector";
import PurposeForm from "../../components/EditProfile/PurposeForm/PurposeForm";
import SkillsSection from "../../components/EditProfile/SkillsSection/SkillsSection";
import InterestsSection from "../../components/EditProfile/InterestsSection/InterestsSection";
import SocialLinks from "../../components/EditProfile/SocialLinks/SocialLinks";
import PrivacySettings from "../../components/EditProfile/PrivacySettings/PrivacySettings";
import ProfilePreview from "../../components/EditProfile/ProfilePreview/ProfilePreview";
import SaveBar from "../../components/EditProfile/SaveBar/SaveBar";

export default function EditProfile() {
    return (
        <main className="edit-profile-page">

            <div className="edit-profile-container">

                <section className="edit-profile-content">

                    <ProfileHeader />

                    <BasicInfo />

                    <PurposeSelector />

                    <PurposeForm />

                    <SkillsSection />

                    <InterestsSection />

                    <SocialLinks />

                    <PrivacySettings />

                </section>

                <aside className="edit-profile-preview">

                    <ProfilePreview />

                </aside>

            </div>

            <SaveBar />

        </main>
    );
}
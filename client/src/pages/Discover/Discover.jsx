import "./Discover.css";

import ProfileHero from "../../components/Discover/ProfileHero";
import AboutSection from "../../components/Discover/AboutSection";
import SkillsSection from "../../components/Discover/SkillsSection";
import PurposeSection from "../../components/Discover/PurposeSection";
import CompatibilitySection from "../../components/Discover/CompatibilitySection";
import ActionButtons from "../../components/Discover/ActionButtons";

export default function Discover() {

  const handlePass = () => {
    console.log("Profile Passed");
  };

  const handleConnect = () => {
    console.log("Connection Sent");
  };

  return (
    <>
      <ActionButtons
        onPass={handlePass}
        onConnect={handleConnect}
      />

      <div className="discover-page">

        <ProfileHero />

        <AboutSection />

        <SkillsSection />

        <PurposeSection />

        <CompatibilitySection />

      </div>
    </>
  );
}
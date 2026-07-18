import StudyPartnerForm from "./Forms/StudyPartnerForm";
import HackathonPartnerForm from "./Forms/HackathonPartnerForm";
import StartupCofounderForm from "./Forms/StartupCofounderForm";
import ProjectPartnerForm from "./Forms/ProjectPartnerForm";
import OpenSourceForm from "./Forms/OpenSourceForm";
import FitnessPartnerForm from "./Forms/FitnessPartnerForm";
import TravelPartnerForm from "./Forms/TravelPartnerForm";
import DatingForm from "./Forms/DatingForm";

export default function PurposeForm({

    profileData,

    setProfileData,

}) {

    switch (profileData.activePurpose) {

        case "study_partner":

            return (

                <StudyPartnerForm

                    profileData={profileData}

                    setProfileData={setProfileData}

                />

            );



        case "hackathon_partner":

            return (

                <HackathonPartnerForm

                    profileData={profileData}

                    setProfileData={setProfileData}

                />

            );



        case "startup_cofounder":

            return (

                <StartupCofounderForm

                    profileData={profileData}

                    setProfileData={setProfileData}

                />

            );



        case "project_partner":

            return (

                <ProjectPartnerForm

                    profileData={profileData}

                    setProfileData={setProfileData}

                />

            );



        case "open_source":

            return (

                <OpenSourceForm

                    profileData={profileData}

                    setProfileData={setProfileData}

                />

            );



        case "fitness_partner":

            return (

                <FitnessPartnerForm

                    profileData={profileData}

                    setProfileData={setProfileData}

                />

            );



        case "travel_partner":

            return (

                <TravelPartnerForm

                    profileData={profileData}

                    setProfileData={setProfileData}

                />

            );



        case "dating":

            return (

                <DatingForm

                    profileData={profileData}

                    setProfileData={setProfileData}

                />

            );



        default:

            return (

                <StudyPartnerForm

                    profileData={profileData}

                    setProfileData={setProfileData}

                />

            );

    }

}
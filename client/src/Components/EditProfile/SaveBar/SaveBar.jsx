import "./SaveBar.css";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { updateProfile } from "../../../services/userService";
import { updatePurpose } from "../../../services/userPurposeService";

export default function SaveBar({

    profileData,

}) {

    const navigate = useNavigate();

    const handleSaveAndContinue = async () => {

        try {

            // Save general profile
            await updateProfile(profileData);

            // Save active purpose answers
            await updatePurpose(

                profileData.activePurpose,

                profileData.purposeAnswers[
                    profileData.activePurpose
                ]

            );

            toast.success(
                "Profile updated successfully."
            );

            navigate("/profile");

        }

        catch (error) {

            console.error(error);

            toast.error(
                "Failed to update profile."
            );

        }

    };

    return (

        <div className="save-bar">

            <button className="draft-btn">

                Save Draft

            </button>

            <button

                className="continue-btn"

                onClick={handleSaveAndContinue}

            >

                Save & Continue

            </button>

        </div>

    );

}
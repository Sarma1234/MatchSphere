import "./DangerZone.css";

import { toast } from "react-hot-toast";

import {
    deactivateAccount,
    deleteAccount,
} from "../../../services/userService";

export default function DangerZone() {

    const handleDeactivate = async () => {

        const confirmed = window.confirm(

            "Are you sure you want to deactivate your account?\n\nYou can reactivate it later by logging in again."

        );

        if (!confirmed) return;

        try {

            await deactivateAccount();

            toast.success(

                "Account deactivated successfully."

            );

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to deactivate account."

            );

        }

    };

    const handleDelete = async () => {

        const confirmed = window.confirm(

            "This action is permanent.\n\nDeleting your account will remove all your data and cannot be undone.\n\nDo you want to continue?"

        );

        if (!confirmed) return;

        try {

            await deleteAccount();

            toast.success(

                "Account deleted successfully."

            );

            localStorage.removeItem("token");

            window.location.href = "/";

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to delete account."

            );

        }

    };

    return (

        <div className="danger-zone-card">

            <div className="settings-section-title">

                <h2>

                    Danger Zone

                </h2>

                <p>

                    Permanent account actions that cannot be easily undone

                </p>

            </div>

            <div className="danger-options">

                <div className="danger-option">

                    <div>

                        <h3>

                            Deactivate Account

                        </h3>

                        <p>

                            Temporarily hide your profile and pause activity.

                        </p>

                    </div>

                    <button

                        className="warning-btn"

                        onClick={handleDeactivate}

                    >

                        Deactivate

                    </button>

                </div>

                <div className="danger-option">

                    <div>

                        <h3>

                            Delete Account

                        </h3>

                        <p>

                            Permanently remove your account and all associated data.

                        </p>

                    </div>

                    <button

                        className="delete-btn"

                        onClick={handleDelete}

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

}
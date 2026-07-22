import "./SecuritySettings.css";

import { useState } from "react";
import { toast } from "react-hot-toast";

import {
    changePassword,
    updateSecuritySettings,
} from "../../../services/userService";

export default function SecuritySettings() {

    const [passwordData, setPasswordData] = useState({

        currentPassword: "",

        newPassword: "",

    });

    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    const [loading, setLoading] = useState(false);

    const handlePasswordChange = (e) => {

        setPasswordData({

            ...passwordData,

            [e.target.name]: e.target.value,

        });

    };

    const handleUpdatePassword = async () => {

        try {

            if (

                !passwordData.currentPassword ||

                !passwordData.newPassword

            ) {

                return toast.error(

                    "Please fill both password fields."

                );

            }

            setLoading(true);

            await changePassword(passwordData);

            toast.success(

                "Password updated successfully."

            );

            setPasswordData({

                currentPassword: "",

                newPassword: "",

            });

        }

        catch (error) {

            toast.error(

                error?.response?.data?.message ||

                "Failed to update password."

            );

        }

        finally {

            setLoading(false);

        }

    };

    const handleToggle2FA = async () => {

        try {

            const value = !twoFactorEnabled;

            setTwoFactorEnabled(value);

            await updateSecuritySettings({

                twoFactorEnabled: value,

            });

            toast.success(

                "Security settings updated."

            );

        }

        catch (error) {

            setTwoFactorEnabled(!twoFactorEnabled);

            toast.error(

                "Failed to update settings."

            );

        }

    };

    return (

        <div className="security-settings-card">

            <div className="settings-section-title">

                <h2>

                    Security Settings

                </h2>

                <p>

                    Protect your MatchSphere account and activity

                </p>

            </div>

            <div className="security-options">

                <div className="security-option">

                    <div>

                        <h3>

                            Current Password

                        </h3>

                    </div>

                    <input

                        type="password"

                        name="currentPassword"

                        value={passwordData.currentPassword}

                        onChange={handlePasswordChange}

                        placeholder="Current password"

                    />

                </div>

                <div className="security-option">

                    <div>

                        <h3>

                            New Password

                        </h3>

                    </div>

                    <input

                        type="password"

                        name="newPassword"

                        value={passwordData.newPassword}

                        onChange={handlePasswordChange}

                        placeholder="New password"

                    />

                </div>

                <div className="security-option">

                    <div>

                        <h3>

                            Update Password

                        </h3>

                        <p>

                            Secure your account with a new password.

                        </p>

                    </div>

                    <button

                        onClick={handleUpdatePassword}

                        disabled={loading}

                    >

                        {

                            loading

                                ? "Updating..."

                                : "Update"

                        }

                    </button>

                </div>

                <div className="security-option">

                    <div>

                        <h3>

                            Two Factor Authentication

                        </h3>

                        <p>

                            Add an extra layer of account security.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={twoFactorEnabled}

                            onChange={handleToggle2FA}

                        />

                        <span></span>

                    </label>

                </div>

                <div className="security-option">

                    <div>

                        <h3>

                            Active Sessions

                        </h3>

                        <p>

                            Coming soon.

                        </p>

                    </div>

                </div>

                <div className="security-option">

                    <div>

                        <h3>

                            Login History

                        </h3>

                        <p>

                            Coming soon.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}
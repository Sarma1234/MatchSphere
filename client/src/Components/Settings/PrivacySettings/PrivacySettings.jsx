import "./PrivacySettings.css";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import {
    getMyProfile,
    updatePrivacySettings,
} from "../../../services/userService";

export default function PrivacySettings() {

    const [privacy, setPrivacy] = useState({

        publicProfile: true,

        showEmail: false,

        showSocialLinks: true,

        allowMessages: true,

    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetchPrivacySettings();

    }, []);

    const fetchPrivacySettings = async () => {

        try {

            const response = await getMyProfile();

            setPrivacy({

                ...response.data.privacy,

            });

        }

        catch (error) {

            toast.error(

                "Failed to load privacy settings."

            );

        }

    };

    const handleToggle = async (field) => {

        const updated = {

            ...privacy,

            [field]: !privacy[field],

        };

        setPrivacy(updated);

        try {

            setLoading(true);

            await updatePrivacySettings(updated);

            toast.success(

                "Privacy settings updated."

            );

        }

        catch (error) {

            setPrivacy(privacy);

            toast.error(

                "Failed to update privacy settings."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="privacy-settings-card">

            <div className="settings-section-title">

                <h2>

                    Privacy Settings

                </h2>

                <p>

                    Control who can discover and interact with you

                </p>

            </div>

            <div className="privacy-options">

                <div className="privacy-option">

                    <div>

                        <h3>

                            Public Profile

                        </h3>

                        <p>

                            Allow other users to view your profile.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={privacy.publicProfile}

                            onChange={() =>

                                handleToggle(

                                    "publicProfile"

                                )

                            }

                            disabled={loading}

                        />

                        <span></span>

                    </label>

                </div>

                <div className="privacy-option">

                    <div>

                        <h3>

                            Show Email Address

                        </h3>

                        <p>

                            Display your email on your public profile.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={privacy.showEmail}

                            onChange={() =>

                                handleToggle(

                                    "showEmail"

                                )

                            }

                            disabled={loading}

                        />

                        <span></span>

                    </label>

                </div>

                <div className="privacy-option">

                    <div>

                        <h3>

                            Show Social Links

                        </h3>

                        <p>

                            Allow others to view your linked social profiles.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={privacy.showSocialLinks}

                            onChange={() =>

                                handleToggle(

                                    "showSocialLinks"

                                )

                            }

                            disabled={loading}

                        />

                        <span></span>

                    </label>

                </div>

                <div className="privacy-option">

                    <div>

                        <h3>

                            Allow Messages

                        </h3>

                        <p>

                            Let other users send you direct messages.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={privacy.allowMessages}

                            onChange={() =>

                                handleToggle(

                                    "allowMessages"

                                )

                            }

                            disabled={loading}

                        />

                        <span></span>

                    </label>

                </div>

            </div>

        </div>

    );

}
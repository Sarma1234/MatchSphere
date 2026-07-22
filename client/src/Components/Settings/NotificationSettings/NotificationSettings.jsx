import "./NotificationSettings.css";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import {
    getMyProfile,
    updateNotificationSettings,
} from "../../../services/userService";

export default function NotificationSettings() {

    const [notifications, setNotifications] = useState({

        newMatches: true,

        connectionRequests: true,

        messages: true,

        productUpdates: false,

    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetchNotificationSettings();

    }, []);

    const fetchNotificationSettings = async () => {

        try {

            const response =
                await getMyProfile();

            setNotifications({

                ...response.data.notifications,

            });

        }

        catch (error) {

            toast.error(
                "Failed to load notification settings."
            );

        }

    };

    const handleToggle = async (field) => {

        const updated = {

            ...notifications,

            [field]: !notifications[field],

        };

        setNotifications(updated);

        try {

            setLoading(true);

            await updateNotificationSettings(updated);

            toast.success(
                "Notification settings updated."
            );

        }

        catch (error) {

            setNotifications(notifications);

            toast.error(
                "Failed to update notification settings."
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="notification-settings-card">

            <div className="settings-section-title">

                <h2>

                    Notification Settings

                </h2>

                <p>

                    Manage alerts and updates from MatchSphere

                </p>

            </div>

            <div className="notification-options">

                <div className="notification-option">

                    <div>

                        <h3>

                            New Matches

                        </h3>

                        <p>

                            Get notified when someone matches with you.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={notifications.newMatches}

                            onChange={() =>
                                handleToggle(
                                    "newMatches"
                                )
                            }

                            disabled={loading}

                        />

                        <span></span>

                    </label>

                </div>

                <div className="notification-option">

                    <div>

                        <h3>

                            Connection Requests

                        </h3>

                        <p>

                            Receive alerts for new connection requests.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={notifications.connectionRequests}

                            onChange={() =>
                                handleToggle(
                                    "connectionRequests"
                                )
                            }

                            disabled={loading}

                        />

                        <span></span>

                    </label>

                </div>

                <div className="notification-option">

                    <div>

                        <h3>

                            Messages

                        </h3>

                        <p>

                            Get notified about new conversations.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={notifications.messages}

                            onChange={() =>
                                handleToggle(
                                    "messages"
                                )
                            }

                            disabled={loading}

                        />

                        <span></span>

                    </label>

                </div>

                <div className="notification-option">

                    <div>

                        <h3>

                            MatchSphere Updates

                        </h3>

                        <p>

                            Receive product announcements and feature updates.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={notifications.productUpdates}

                            onChange={() =>
                                handleToggle(
                                    "productUpdates"
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
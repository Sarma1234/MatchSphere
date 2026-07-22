import "./SettingsHeader.css";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { getMyProfile } from "../../../services/userService";

export default function SettingsHeader() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async () => {

        try {

            const response = await getMyProfile();

            setUser(response.data);

        }

        catch (error) {

            toast.error(

                "Failed to load profile."

            );

        }

    };

    return (

        <div className="settings-header-card">

            <div className="settings-profile">

                <div className="settings-avatar">

                    <img

                        src={
                            user?.photos?.[0]?.url ||

                            "https://i.pravatar.cc/150?img=12"
                        }

                        alt="profile"

                    />

                </div>

                <div className="settings-user-info">

                    <h1>

                        {

                            user?.fullName ||

                            "MatchSphere User"

                        }

                    </h1>

                    <p>

                        Manage your MatchSphere account preferences

                    </p>

                    <div className="account-status">

                        <span></span>

                        {

                            user?.accountStatus === "deactivated"

                                ? "Deactivated Account"

                                : "Active Account"

                        }

                    </div>

                </div>

            </div>

            <div className="settings-summary">

                <div className="summary-item">

                    <h3>

                        --

                    </h3>

                    <p>

                        Connections

                    </p>

                </div>

                <div className="summary-item">

                    <h3>

                        --

                    </h3>

                    <p>

                        Matches

                    </p>

                </div>

                <div className="summary-item">

                    <h3>

                        {

                            user?.profileCompletion || 0

                        }%

                    </h3>

                    <p>

                        Profile

                    </p>

                </div>

            </div>

        </div>

    );

}
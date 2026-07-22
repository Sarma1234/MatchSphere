import "./AccountSettings.css";

import { useEffect, useState } from "react";

import {

    getMyProfile,

    updateAccountSettings,

    switchActivePurpose,

} from "../../../services/userService";

import { toast } from "react-hot-toast";
export default function AccountSettings() {

    const [formData, setFormData] = useState({

        fullName: "",

        username: "",

        email: "",

        activePurpose: "",

    });

    const [enabledPurposes, setEnabledPurposes] = useState([]);

    const [loading, setLoading] = useState(false);

    const [initialPurpose, setInitialPurpose] = useState("");

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async () => {

        try {

            const response = await getMyProfile();

            const user = response.data;
            console.log(response.data);

            setFormData({

                fullName: user.fullName || "",

                username: user.username || "",

                email: user.email || "",

                activePurpose: user.activePurpose || "",

            });

            setEnabledPurposes(

                user.enabledPurposes || []

            );

            setInitialPurpose(

                user.activePurpose || ""

            );

        }

        catch (error) {

            toast.error(

                "Failed to load account settings."

            );

        }

    };

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSave = async () => {

        try {

            setLoading(true);

            await updateAccountSettings({

                fullName: formData.fullName,

                username: formData.username,

                email: formData.email,

            });

            if (

                formData.activePurpose !== initialPurpose

            ) {

                await switchActivePurpose(

                    formData.activePurpose

                );

            }

            toast.success(

                "Account settings updated."

            );

            setInitialPurpose(

                formData.activePurpose

            );

        }

        catch (error) {

            toast.error(

                error?.response?.data?.message ||

                "Update failed."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="account-settings-card">

            <div className="settings-section-title">

                <h2>

                    Account Settings

                </h2>

                <p>

                    Manage your personal account information

                </p>

            </div>

            <div className="settings-options">

                <div className="settings-field">

                    <label>

                        Full Name

                    </label>
<input

    type="text"

    name="fullName"

    value={formData.fullName}

    onChange={handleChange}

    placeholder="Full Name"

/>

                </div>

                <div className="settings-field">

                    <label>

                        Username

                    </label>

                    <input

    type="text"

    name="username"

    value={formData.username}

    onChange={handleChange}

    placeholder="Username"

/>

                </div>

                <div className="settings-field">

                    <label>

                        Email Address

                    </label>

                   <input

    type="email"

    name="email"

    value={formData.email}

    onChange={handleChange}

    placeholder="Email"

/>
                </div>

                <div className="settings-field">

                    <label>

                        Active Purpose

                    </label>

                    <select

    name="activePurpose"

    value={formData.activePurpose}

    onChange={handleChange}

>

{

enabledPurposes.map((purpose) => (

<option

key={purpose}

value={purpose}

>

{purpose}

</option>

))

}

</select>

                </div>

               <button

    className="settings-save-btn"

    onClick={handleSave}

    disabled={loading}

>

{

loading

?

"Saving..."

:

"Save Changes"

}

</button>

            </div>

        </div>

    );

}
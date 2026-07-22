import "./AppearanceSettings.css";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
  import { applyAppearance } from "../../../utils/theme";

import {
    getMyProfile,
    updateAppearanceSettings,
} from "../../../services/userService";

export default function AppearanceSettings() {

    const [appearance, setAppearance] = useState({

        theme: "dark",

        accentColor: "purple",

        compactMode: false,

        animations: true,

    });

    const [loading, setLoading] = useState(false);

    /* -------------------------------------------------------------------------- */
    /*                              Load Settings                                 */
    /* -------------------------------------------------------------------------- */

    useEffect(() => {

        fetchAppearanceSettings();

    }, []);

    const fetchAppearanceSettings = async () => {

        try {

            const response =
                await getMyProfile();

         const settings =
    response.data.settings.appearance || {};
            setAppearance({

    theme:
        settings.theme || "dark",

    accentColor:
        settings.accentColor || "purple",

    compactMode:
        settings.compactMode ?? false,

    animations:
        settings.animations ?? true,

});
        }

        catch {

            toast.error(
                "Failed to load appearance settings."
            );

        }

    };

   useEffect(() => {

    applyAppearance(appearance);

}, [appearance]);

    /* -------------------------------------------------------------------------- */
    /*                               Save Settings                                */
    /* -------------------------------------------------------------------------- */

   const saveAppearance = async (updatedAppearance) => {

    setAppearance(updatedAppearance);

    try {

        setLoading(true);

        await updateAppearanceSettings(
            updatedAppearance
        );

        applyAppearance(
            updatedAppearance
        );

        toast.success(
            "Appearance updated."
        );

    }

    catch {

        toast.error(
            "Failed to update appearance."
        );

    }

    finally {

        setLoading(false);

    }

};

    /* -------------------------------------------------------------------------- */

    return (

        <div className="appearance-settings-card">

            <div className="settings-section-title">

                <h2>

                    Appearance Settings

                </h2>

                <p>

                    Customize your MatchSphere experience

                </p>

            </div>

            <div className="appearance-options">

                <div className="appearance-option">

                    <div>

                        <h3>

                            Theme

                        </h3>

                        <p>

                            Choose your preferred theme.

                        </p>

                    </div>

                    <select

                        value={appearance.theme}

                        disabled={loading}

                        onChange={(e) =>

                            saveAppearance({

                                ...appearance,

                                theme: e.target.value,

                            })

                        }

                    >

                        <option value="dark">

                            Futuristic Dark

                        </option>

                        <option value="midnight">

                            Midnight Blue

                        </option>

                        <option value="auto">

                            Auto

                        </option>

                    </select>

                </div>

               <div className="appearance-option">

    <div>

        <h3>
            Accent Color
        </h3>

        <p>
            Choose your preferred accent color.
        </p>

    </div>

    <select
        value={appearance.accentColor}
        disabled={loading}
        onChange={(e) =>
            saveAppearance({
                ...appearance,
                accentColor: e.target.value,
            })
        }
    >

        <option value="purple">
            Purple
        </option>

        <option value="blue">
            Blue
        </option>

        <option value="cyan">
            Cyan
        </option>

        <option value="pink">
            Pink
        </option>

        <option value="emerald">
            Emerald
        </option>

    </select>

</div>

                <div className="appearance-option">

                    <div>

                        <h3>

                            Compact Mode

                        </h3>

                        <p>

                            Reduce spacing.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={appearance.compactMode}

                            disabled={loading}

                            onChange={() =>

                                saveAppearance({

                                    ...appearance,

                                    compactMode:

                                        !appearance.compactMode,

                                })

                            }

                        />

                        <span></span>

                    </label>

                </div>

                <div className="appearance-option">

                    <div>

                        <h3>

                            Animations

                        </h3>

                        <p>

                            Enable transitions.

                        </p>

                    </div>

                    <label className="toggle">

                        <input

                            type="checkbox"

                            checked={appearance.animations}

                            disabled={loading}

                            onChange={() =>

                                saveAppearance({

                                    ...appearance,

                                    animations:

                                        !appearance.animations,

                                })

                            }

                        />

                        <span></span>

                    </label>

                </div>

            </div>

        </div>

    );

}
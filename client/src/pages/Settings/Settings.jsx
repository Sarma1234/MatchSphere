import "./Settings.css";

import SettingsHeader from "../../components/Settings/SettingsHeader/SettingsHeader";
import AccountSettings from "../../components/Settings/AccountSettings/AccountSettings";
import PrivacySettings from "../../components/Settings/PrivacySettings/PrivacySettings";
import NotificationSettings from "../../components/Settings/NotificationSettings/NotificationSettings";
import AppearanceSettings from "../../components/Settings/AppearanceSettings/AppearanceSettings";
import SecuritySettings from "../../components/Settings/SecuritySettings/SecuritySettings";
import DangerZone from "../../components/Settings/DangerZone/DangerZone";


export default function Settings() {

    return (

        <div className="settings-page">

            <div className="settings-container">

                <SettingsHeader />

                <div className="settings-grid">

                    <AccountSettings />

                    <PrivacySettings />

                    <NotificationSettings />

                    <AppearanceSettings />

                    <SecuritySettings />

                    <DangerZone />

                </div>

            </div>

        </div>

    );

}
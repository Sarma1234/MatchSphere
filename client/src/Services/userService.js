import axios from "../api/authApi";

/* -------------------------------------------------------------------------- */
/*                               Profile APIs                                 */
/* -------------------------------------------------------------------------- */

export const getMyProfile = async () => {

    const response = await axios.get("/users/me");

    return response.data;

};

export const updateProfile = async (profileData) => {

    const response = await axios.put(

        "/users/me",

        profileData

    );

    return response.data;

};

export const switchActivePurpose = async (activePurpose) => {

    const response = await axios.patch(

        "/users/me/purpose",

        {

            activePurpose,

        }

    );

    return response.data;

};

/* -------------------------------------------------------------------------- */
/*                           Account Settings                                 */
/* -------------------------------------------------------------------------- */

export const updateAccountSettings = async (accountData) => {

    const response = await axios.patch(

        "/users/settings/account",

        accountData

    );

    return response.data;

};

export const changePassword = async (passwordData) => {

    const response = await axios.patch(

        "/users/settings/password",

        passwordData

    );

    return response.data;

};

/* -------------------------------------------------------------------------- */
/*                           Privacy Settings                                 */
/* -------------------------------------------------------------------------- */

export const updatePrivacySettings = async (privacyData) => {

    const response = await axios.patch(

        "/users/settings/privacy",

        privacyData

    );

    return response.data;

};

/* -------------------------------------------------------------------------- */
/*                        Notification Settings                               */
/* -------------------------------------------------------------------------- */

export const updateNotificationSettings = async (notificationData) => {

    const response = await axios.patch(

        "/users/settings/notifications",

        notificationData

    );

    return response.data;

};

/* -------------------------------------------------------------------------- */
/*                         Appearance Settings                                */
/* -------------------------------------------------------------------------- */

export const updateAppearanceSettings = async (appearanceData) => {

    const response = await axios.patch(

        "/users/settings/appearance",

        appearanceData

    );
    console.log(updatedUser.settings.appearance);

    return response.data;

};

/* -------------------------------------------------------------------------- */
/*                          Security Settings                                 */
/* -------------------------------------------------------------------------- */

export const updateSecuritySettings = async (securityData) => {

    const response = await axios.patch(

        "/users/settings/security",

        securityData

    );

    return response.data;

};

/* -------------------------------------------------------------------------- */
/*                           Account Actions                                  */
/* -------------------------------------------------------------------------- */

export const deactivateAccount = async () => {

    const response = await axios.patch(

        "/users/deactivate"

    );

    return response.data;

};

export const deleteAccount = async () => {

    const response = await axios.delete(

        "/users/delete"

    );

    return response.data;

};

    import axios from "../api/authApi";

    /* -------------------------------------------------------------------------- */
    /*                             Account Settings                               */
    /* -------------------------------------------------------------------------- */

    export const updateAccountSettings = async (data) => {

        const response =
            await axios.patch(

                "/users/settings/account",

                data

            );

        return response.data;

    };

    /* -------------------------------------------------------------------------- */
    /*                           Change Password                                  */
    /* -------------------------------------------------------------------------- */

    export const changePassword = async (data) => {

        const response =
            await axios.patch(

                "/users/settings/password",

                data

            );

        return response.data;

    };

    /* -------------------------------------------------------------------------- */
    /*                           Privacy Settings                                 */
    /* -------------------------------------------------------------------------- */

    export const updatePrivacySettings = async (data) => {

        const response =
            await axios.patch(

                "/users/settings/privacy",

                data

            );

        return response.data;

    };

    /* -------------------------------------------------------------------------- */
    /*                       Notification Settings                                */
    /* -------------------------------------------------------------------------- */

    export const updateNotificationSettings = async (data) => {

        const response =
            await axios.patch(

                "/users/settings/notifications",

                data

            );

        return response.data;

    };

    /* -------------------------------------------------------------------------- */
    /*                        Appearance Settings                                 */
    /* -------------------------------------------------------------------------- */

    export const updateAppearanceSettings = async (data) => {

        const response =
            await axios.patch(

                "/users/settings/appearance",

                data

            );

        return response.data;

    };

    /* -------------------------------------------------------------------------- */
    /*                         Security Settings                                  */
    /* -------------------------------------------------------------------------- */

    export const updateSecuritySettings = async (data) => {

        const response =
            await axios.patch(

                "/users/settings/security",

                data

            );

        return response.data;

    };

    /* -------------------------------------------------------------------------- */
    /*                         Deactivate Account                                 */
    /* -------------------------------------------------------------------------- */

    export const deactivateAccount = async () => {

        const response =
            await axios.patch(

                "/users/deactivate"

            );

        return response.data;

    };

    /* -------------------------------------------------------------------------- */
    /*                           Delete Account                                   */
    /* -------------------------------------------------------------------------- */

    export const deleteAccount = async () => {

        const response =
            await axios.delete(

                "/users/delete"

            );

        return response.data;

    };
    export const updateAppearanceSettings = async (data) => {

    console.log("Sending:", data);

    const response = await axios.patch(
        "/users/settings/appearance",
        data
    );

    return response.data;
};
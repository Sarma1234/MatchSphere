import axios from "../api/authApi";

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
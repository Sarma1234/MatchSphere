
import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/discover";

/* -------------------------------------------------------------------------- */
/*                              Axios Config                                  */
/* -------------------------------------------------------------------------- */

const getConfig = () => {

    const token = localStorage.getItem("token");

    return {

        headers: {

            Authorization: `Bearer ${token}`,

        },

    };

};

/* -------------------------------------------------------------------------- */
/*                         Get Next Discover Profile                          */
/* -------------------------------------------------------------------------- */

export const getNextProfile = async () => {

    const response = await axios.get(

        API_URL,

        getConfig()

    );

    return response;

};

/* -------------------------------------------------------------------------- */
/*                               Swipe Right                                  */
/* -------------------------------------------------------------------------- */

export const swipeRight = async ({ targetUserId }) => {

    const response = await axios.post(

        `${API_URL}/swipe/right`,

        {

            targetUserId,

        },

        getConfig()

    );

    return response;

};

/* -------------------------------------------------------------------------- */
/*                                Swipe Left                                  */
/* -------------------------------------------------------------------------- */

export const swipeLeft = async ({ targetUserId }) => {

    const response = await axios.post(

        `${API_URL}/swipe/left`,

        {

            targetUserId,

        },

        getConfig()

    );

    return response;

};


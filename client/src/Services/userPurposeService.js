import axios from "../api/authApi";

export const updatePurpose = async (

    purpose,

    answers

) => {

    const response = await axios.put(

        `/user-purposes/${purpose}`,

        {

            answers,

        }

    );

    return response.data;

};
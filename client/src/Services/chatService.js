import axios from "../api/authApi";

/* -------------------------------------------------------------------------- */
/*                           Get Conversations                                */
/* -------------------------------------------------------------------------- */

export const getConversations = async () => {

    const response = await axios.get(

        "/chat/conversations"

    );

    return response;

};

/* -------------------------------------------------------------------------- */
/*                           Get Messages                                     */
/* -------------------------------------------------------------------------- */

export const getMessages = async (

    conversationId,

    page = 1,

    limit = 30

) => {

    const response = await axios.get(

        `/chat/${conversationId}/messages`,

        {

            params: {

                page,

                limit,

            },

        }

    );

    return response;

};

/* -------------------------------------------------------------------------- */
/*                           Send Message                                     */
/* -------------------------------------------------------------------------- */

export const sendMessage = async (

    messageData

) => {

    const response = await axios.post(

        "/chat/message",

        messageData

    );

    return response;

};
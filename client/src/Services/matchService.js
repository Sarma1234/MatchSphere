import axios from "../api/authApi";

export const getMyMatches = async () => {
    const response = await axios.get("/matches");
    return response.data.data;
};

export const blockMatch = async (matchId) => {
    const response = await axios.patch(`/matches/${matchId}/block`);
    return response.data.data;
};

export const unmatch = async (matchId) => {
    const response = await axios.delete(`/matches/${matchId}`);
    return response.data;
};
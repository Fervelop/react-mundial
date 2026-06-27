import api from "../api/axios";

export const getMatches = async()=>{
    const response = await api.get("/matches");
    return response.data;
}
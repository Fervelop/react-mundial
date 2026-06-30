import api from "../api/axios";
import type { Match, UpcomingMatch } from "../types/Match";

export const getResults = async (): Promise<Match[]> => {
    const response = await api.get("/matches/results");
    return response.data;
}

export const getUpcomingMatches = async (): Promise<UpcomingMatch[]> => {
    const response = await api.get("/matches/upcoming");
    return response.data;
}
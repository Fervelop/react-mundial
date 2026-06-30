import api from "../api/axios";
import type { Match, UpcomingMatch } from "../types/Match";

// Forma real que devuelve la API (mundial-api/src/controllers/matches.controller.js)
interface ApiMatch {
    id: number;
    homeTeam: string;
    awayTeam: string;
    date: string; // "2026-06-29"
    time: string;
    status: string; // "finalizado" | "programado" | "en vivo"
    result: { homeScore: number; awayScore: number } | null;
}

interface ApiMatchesResponse {
    total: number;
    matches: ApiMatch[];
}

// "2026-06-29" -> "29/06/2026"
function formatFecha(isoDate: string): string {
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
}

function formatEstado(status: string): string {
    return status.charAt(0).toUpperCase() + status.slice(1);
}

export const getResults = async (): Promise<Match[]> => {
    const response = await api.get<ApiMatchesResponse>("/matches/results");
    return response.data.matches.map((m) => ({
        id: m.id,
        local: m.homeTeam,
        visitante: m.awayTeam,
        resultado: m.result ? `${m.result.homeScore} - ${m.result.awayScore}` : "-",
        estado: formatEstado(m.status),
    }));
}

export const getUpcomingMatches = async (): Promise<UpcomingMatch[]> => {
    const response = await api.get<ApiMatchesResponse>("/matches/upcoming");
    return response.data.matches.map((m) => ({
        id: m.id,
        local: m.homeTeam,
        visitante: m.awayTeam,
        fecha: formatFecha(m.date),
    }));
}

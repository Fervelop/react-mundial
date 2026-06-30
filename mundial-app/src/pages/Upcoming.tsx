import { useEffect, useState } from "react";
import { getUpcomingMatches } from "../services/matchService";
import UpcomingMatchCard from "../components/UpcomingMatchCard";
import Navbar from "../components/Navbar";
import type { UpcomingMatch } from "../types/Match";

export default function Upcoming() {
  const [matches, setMatches] = useState<UpcomingMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getUpcomingMatches()
      .then(setMatches)
      .catch(() => setError("No se pudieron cargar los próximos partidos."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />

      <main className="px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 uppercase">
              Calendario
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Próximos Partidos
            </h1>
            <p className="mt-3 text-gray-400">
              Fixture de los partidos por disputarse.
            </p>
          </div>

          {loading && <p className="text-center text-gray-400">Cargando próximos partidos...</p>}
          {!loading && error && <p className="text-center text-red-400">{error}</p>}
          {!loading && !error && matches.length === 0 && (
            <p className="text-center text-gray-400">No hay partidos programados por el momento.</p>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((match) => (
              <UpcomingMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

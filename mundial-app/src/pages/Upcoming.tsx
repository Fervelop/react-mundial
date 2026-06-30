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
    <div className="bg-green-50 min-h-screen text-gray-800">
      <Navbar />

      <main className="px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-green-700 bg-green-100 rounded-full border border-green-200 uppercase">
              Calendario
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-900">
              Próximos Partidos
            </h1>
            <p className="mt-3 text-gray-500">
              Fixture de los partidos por disputarse.
            </p>
          </div>

          {loading && <p className="text-center text-gray-500">Cargando próximos partidos...</p>}
          {!loading && error && <p className="text-center text-red-600">{error}</p>}
          {!loading && !error && matches.length === 0 && (
            <p className="text-center text-gray-500">No hay partidos programados por el momento.</p>
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
import { useEffect, useState } from "react";
import { getResults } from "../services/matchService";
import MatchCard from "../components/MatchCard";
import Navbar from "../components/Navbar";
import type { Match } from "../types/Match";

export default function Results() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getResults()
      .then(setMatches)
      .catch(() => setError("No se pudieron cargar los resultados."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-green-50 min-h-screen text-gray-800">
      <Navbar />

      <main className="px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-green-700 bg-green-100 rounded-full border border-green-200 uppercase">
              Resultados
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-900">
              Resultados del Mundial
            </h1>
            <p className="mt-3 text-gray-500">
              Marcadores de los partidos ya disputados.
            </p>
          </div>

          {loading && <p className="text-center text-gray-500">Cargando resultados...</p>}
          {!loading && error && <p className="text-center text-red-600">{error}</p>}
          {!loading && !error && matches.length === 0 && (
            <p className="text-center text-gray-500">Aún no hay resultados disponibles.</p>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
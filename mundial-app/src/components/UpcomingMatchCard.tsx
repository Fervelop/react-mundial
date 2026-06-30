import type { UpcomingMatch } from "../types/Match";

interface Props {
  match: UpcomingMatch;
}

export default function UpcomingMatchCard({ match }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center gap-3 text-gray-900 border border-green-100">
      <div className="flex w-full items-center justify-center gap-4">
        <span className="flex-1 text-right font-semibold truncate">{match.local}</span>
        <span className="text-xs font-bold uppercase text-green-600">vs</span>
        <span className="flex-1 text-left font-semibold truncate">{match.visitante}</span>
      </div>
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <span className="font-medium">Fecha:</span>
        <span>{match.fecha}</span>
      </div>
    </div>
  );
}
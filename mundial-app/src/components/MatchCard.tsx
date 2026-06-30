import type {Match} from "../types/Match";

interface Props{
    match:Match;
}

export default function MatchCard({match}:Props){
    const isFinished = match.estado?.toLowerCase().includes("final");
    
    return (
    <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col gap-3 text-gray-900">
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold truncate">{match.local}</span>
        <span className="text-xl font-extrabold text-indigo-600 whitespace-nowrap">
          {match.resultado}
        </span>
        <span className="font-semibold truncate text-right">{match.visitante}</span>
      </div>
      <div className="flex justify-center">
        <span
          className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full ${
            isFinished ? "bg-gray-100 text-gray-600" : "bg-red-100 text-red-600"
          }`}
        >
          {match.estado}
        </span>
      </div>
    </div>
  );
}
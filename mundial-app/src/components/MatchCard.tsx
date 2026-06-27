import type {Match} from "../types/Match";

interface Props{
    match:Match;
}

export default function MatchCard({match}:Props){
    return(
    <div>
        <h2>{match.local}vs{match.visitante}</h2>
        <p>Resultado:{match.resultado}</p>
        <span>{match.estado}</span>
    </div>
    )
}
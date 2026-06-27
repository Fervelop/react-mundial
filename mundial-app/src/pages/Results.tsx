import {useEffect,useState} from "react";
import {getMatches} from "../services/matchService";
import MatchCard from "../components/MatchCard";

export default function Results(){
    const [matches,setMatches]=useState([]);
    useEffect(()=>{
        getMatches().then(data=>{
            setMatches(data);
    })
},[])

return(
<div>
    <h1>Resultados Mundial</h1>
    {matches.map(match=>(<MatchCard key={match.id} match={match}/>
    ))
    }
</div>
)
}
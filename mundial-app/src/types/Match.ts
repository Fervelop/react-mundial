export interface Match{
    id:number;
    local:string;
    visitante:string;
    resultado:string;
    estado:string;
}

export interface UpcomingMatch {
    id: number;
    local: string;
    visitante: string;
    fecha: string;
}
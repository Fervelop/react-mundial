import {Navigate} from "react-router-dom";

interface Props{
    children:any;
}

export default function ProtectedRoute({children}:Props){

const token = localStorage.getItem("token");

if(!token){
    return <Navigate to="/login"/>
}

return children;
}
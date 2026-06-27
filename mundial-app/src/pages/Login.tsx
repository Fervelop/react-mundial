import {useState} from "react";
import {login} from "../services/authService";

export default function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const ingresar=async()=>{
        const data = await login({username, password});
    localStorage.setItem("token",data.token);
    window.location.href="/dashboard";
}

return(
<div>
    <h1>Login Mundial App</h1>
    <input placeholder="Email" onChange={e=> setUsername(e.target.value)}/>
    <input type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)}/>
    <button onClick={ingresar}>Ingresar</button>
</div>
)

}
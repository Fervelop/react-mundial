import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Results from "./pages/Results";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

export default function App(){
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/results" element={<ProtectedRoute><Results/></ProtectedRoute>}/>
  </Routes>
  </BrowserRouter>
  
  )
}
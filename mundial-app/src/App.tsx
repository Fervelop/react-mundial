import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Upcoming from "./pages/Upcoming";
import Equipos from "./pages/Equipos";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/resultados" element={<ProtectedRoute><Results /></ProtectedRoute>} />
        <Route path="/proximos" element={<ProtectedRoute><Upcoming /></ProtectedRoute>} />
        <Route path="/equipos" element={<ProtectedRoute><Equipos /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

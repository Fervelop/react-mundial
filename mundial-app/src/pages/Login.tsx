import { useState } from "react";
import { login } from "../services/authService";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = async () => {
    const data = await login({ username, password });
    localStorage.setItem("token", data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 border border-green-100">
        <h1 className="text-2xl font-semibold text-green-700 text-center mb-6">
          Login Mundial App
        </h1>

        <div className="space-y-4">
          <input
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400"
          />
          <button
            onClick={ingresar}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors"
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}
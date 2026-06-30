import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />

      {/* Contenido Principal (Hero de Bienvenida) */}
      <main className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 uppercase">
            Panel de Usuario
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            ¡Bienvenido a <span className="text-indigo-500">Mundial App</span>!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Gestiona y visualiza en tiempo real los resultados de los partidos, estadísticas de los equipos clasificados y calendarios del torneo.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/resultados" className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition">
              Ver Resultados
            </a>
            <a href="/proximos" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition">
              Ver Calendario <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

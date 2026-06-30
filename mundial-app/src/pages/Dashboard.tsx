import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="bg-green-50 min-h-screen text-gray-800">
      <Navbar />

      {/* Contenido Principal (Hero de Bienvenida) */}
      <main className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-green-700 bg-green-100 rounded-full border border-green-200 uppercase">
            Panel de Usuario
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            ¡Bienvenido a <span className="text-green-600">Mundial App</span>!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Gestiona y visualiza en tiempo real los resultados de los partidos, estadísticas de los equipos clasificados y calendarios del torneo.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/resultados" className="rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-700 transition">
              Ver Resultados
            </a>
            <a href="/proximos" className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900 transition">
              Ver Calendario <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
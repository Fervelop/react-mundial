import Navbar from "../components/Navbar";

export default function Equipos() {
  return (
    <div className="bg-green-50 min-h-screen text-gray-800">
      <Navbar />

      <main className="px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-green-700 bg-green-100 rounded-full border border-green-200 uppercase">
            Equipos
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-green-800">
            Equipos Clasificados
          </h1>
          <p className="mt-3 text-gray-500">
            Esta sección estará disponible próximamente, en cuanto se defina el endpoint de equipos.
          </p>
        </div>
      </main>
    </div>
  );
}
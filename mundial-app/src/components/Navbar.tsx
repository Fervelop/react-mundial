import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // Estado para controlar el menú móvil sin usar Web Components puros
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gray-900/50 backdrop-blur-md border-b border-gray-800">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex lg:flex-1 items-center gap-2">
          <span className="text-2xl">⚽</span>
          <span className="font-bold text-xl tracking-wider text-indigo-400">Mundial App</span>
        </div>

        {/* Botón Menú Móvil - Abre el menú */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:text-indigo-400 transition"
          >
            <span className="sr-only">Open main menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Menú Escritorio */}
        <div className="hidden lg:flex lg:gap-x-8">
          <a href="/resultados" className="text-sm font-semibold hover:text-indigo-400 transition">Resultados</a>
          <a href="/proximos" className="text-sm font-semibold hover:text-indigo-400 transition">Próximos partidos</a>
          <a href="/equipos" className="text-sm font-semibold hover:text-indigo-400 transition">Equipos</a>
        </div>

        {/* Botón Cerrar Sesión Escritorio */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={handleLogout}
            className="text-sm font-semibold text-red-400 hover:text-red-300 transition"
          >
            Cerrar sesión <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Fondo oscuro para cerrar al hacer clic fuera */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setIsOpen(false)} />

          <div className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm border-l border-gray-800 z-50 animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚽</span>
                <span className="font-bold text-xl text-indigo-400">Mundial App</span>
              </div>
              {/* Botón para cerrar */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200 hover:text-red-400 transition"
              >
                <span className="sr-only">Close menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-800">
                <div className="space-y-3 py-6">
                  <a href="/resultados" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-800 text-gray-100">Resultados</a>
                  <a href="/proximos" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-800 text-gray-100">Próximos partidos</a>
                  <a href="/equipos" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-800 text-gray-100">Equipos</a>
                </div>
                <div className="py-6">
                  <button
                    onClick={handleLogout}
                    className="-mx-3 block w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold text-red-400 hover:bg-red-500/10"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

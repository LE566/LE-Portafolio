import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black px-4 sm:px-6 py-4 flex justify-between items-center z-50 shadow-md">
      {/* Logo y título */}
      <div className="flex flex-col">
        <a href="#hero" className="text-2xl sm:text-3xl font-bold text-cyan-400 leading-none">
          Luis Esparza
        </a>
        <span className="text-sm sm:text-base text-gray-300">Software Engineer</span>
      </div>

      {/* Menú para pantallas grandes */}
      <ul className="hidden md:flex space-x-6 text-base sm:text-lg text-gray-300 font-medium">
        <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
        <li><a href="#Servicios" className="hover:text-cyan-400 transition">Servicios</a></li>
        <li><a href="#proyectos" className="hover:text-cyan-400 transition">Proyectos</a></li>
        <li><a href="#Formulario" className="hover:text-cyan-400 transition">Contacto</a></li>
      </ul>

      {/* Botón hamburguesa para móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-full bg-cyan-400 rounded transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block h-1 w-full bg-cyan-400 rounded transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-1 w-full bg-cyan-400 rounded transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Menú desplegable para móvil */}
      <ul
        className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-11/12 max-w-xs bg-black border border-cyan-400 rounded-lg shadow-lg transform transition-all duration-300 origin-top ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <li>
          <a
            href="#Servicios"
            className="block px-4 py-3 hover:bg-cyan-500 hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            href="#proyectos"
            className="block px-4 py-3 hover:bg-cyan-500 hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#Formulario"
            className="block px-4 py-3 hover:bg-cyan-500 hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

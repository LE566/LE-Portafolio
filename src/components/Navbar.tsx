import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 sm:px-6 py-4 flex justify-between items-center z-50 transition-all duration-300 ${scrolled
        ? "bg-black/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,255,255,0.1)] border-b border-cyan-500/30 py-3"
        : "bg-transparent py-5"
        }`}
    >
      {/* Logo y título */}
      <div className="flex flex-col group cursor-pointer">
        <a href="#hero" className="text-2xl sm:text-3xl font-bold text-cyan-400 leading-none transition-transform duration-300 group-hover:scale-105">
          Luis Esparza
        </a>
        <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">Software Engineer</span>
      </div>

      {/* Menú para pantallas grandes */}
      <ul className="hidden md:flex space-x-6 text-base sm:text-lg text-gray-300 font-medium">
        {["Home", "Servicios", "Stack", "Certificaciones", "Proyectos", "Contacto"].map((item) => {
          const href = item === "Home" ? "#hero" : item === "Contacto" ? "#Formulario" : `#${item.toLowerCase()}`;
          return (
            <li key={item}>
              <a href={href} className="relative hover:text-cyan-400 transition duration-300 group">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Botón hamburguesa para móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[60]"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-full bg-cyan-400 rounded transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
        />
        <span
          className={`block h-1 w-full bg-cyan-400 rounded transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-1 w-full bg-cyan-400 rounded transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
        />
      </button>

      {/* Menú desplegable para móvil - Overlay completo */}
      <div
        className={`fixed inset-0 h-[100dvh] w-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden z-[55] ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {["Home", "Servicios", "Stack", "Certificaciones", "Proyectos", "Contacto"].map((item) => {
          const href = item === "Home" ? "#hero" : item === "Contacto" ? "#Formulario" : `#${item.toLowerCase()}`;
          return (
            <a
              key={item}
              href={href}
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors transform hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

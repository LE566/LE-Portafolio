import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { FiSun, FiMoon, FiGlobe } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

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

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const navItems = ["home", "services", "projects", "timeline", "stack", "certifications", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 sm:px-6 py-4 flex justify-between items-center z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,255,255,0.1)] border-b border-gray-200 dark:border-cyan-500/30 py-3"
        : "bg-transparent py-5"
        }`}
    >
      {/* Logo y título */}
      <div className="flex flex-col group cursor-pointer">
        <a href="#hero" className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-cyan-400 leading-none transition-transform duration-300 group-hover:scale-105">
          Luis Esparza
        </a>
        <span className="text-sm sm:text-base text-gray-500 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">Software Engineer</span>
      </div>

      {/* Menú para pantallas grandes */}
      <ul className="hidden md:flex items-center space-x-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium">
        {navItems.map((key) => {
          const itemLabel = t(`nav.${key}`);

          const linkMap: Record<string, string> = {
            home: "#hero",
            services: "#Servicios",
            projects: "#featured",
            timeline: "#trayectoria",
            stack: "#stack",
            certifications: "#certificaciones",
            contact: "#Formulario"
          };

          return (
            <li key={key}>
              <a href={linkMap[key]} className="relative hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300 group">
                {itemLabel}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          );
        })}

        {/* Toggles Desktop */}
        <li className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-300 dark:border-gray-700">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-yellow-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-cyan-300 font-bold text-sm flex items-center gap-1"
            aria-label="Toggle Language"
          >
            <FiGlobe size={18} />
            {language.toUpperCase()}
          </button>
        </li>
      </ul>

      {/* Botón hamburguesa y Toggles para móvil */}
      <div className="md:hidden flex items-center gap-4">
        {/* Toggles Mobile (Visible always or inside menu? Let's keep distinct) */}
        {/* Let's put toggles inside the menu for cleaner look on mobile, or next to hamburger */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[60]"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-full bg-gray-800 dark:bg-cyan-400 rounded transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`block h-1 w-full bg-gray-800 dark:bg-cyan-400 rounded transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-1 w-full bg-gray-800 dark:bg-cyan-400 rounded transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Menú desplegable para móvil - Overlay completo */}
      <div
        className={`fixed inset-0 h-[100dvh] w-screen bg-white/95 dark:bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden z-[55] ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {navItems.map((key) => {
          const itemLabel = t(`nav.${key}`);
          const linkMap: Record<string, string> = {
            home: "#hero",
            services: "#Servicios",
            projects: "#featured",
            timeline: "#trayectoria",
            stack: "#stack",
            certifications: "#certificaciones",
            contact: "#Formulario"
          };
          return (
            <a
              key={key}
              href={linkMap[key]}
              className="text-2xl font-bold text-gray-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors transform hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              {itemLabel}
            </a>
          );
        })}

        {/* Mobile Toggles */}
        <div className="flex gap-6 mt-8">
          <button
            onClick={toggleTheme}
            className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-300 transition-colors"
          >
            {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
          <button
            onClick={toggleLanguage}
            className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-cyan-300 font-bold text-lg flex items-center gap-2"
          >
            <FiGlobe size={24} />
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

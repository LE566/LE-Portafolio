import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiGlobe,
} from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-cyan-400/20 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ===== BRAND ===== */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Luis Esparza
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Desarrollador Full Stack enfocado en crear experiencias web
            modernas, rápidas y escalables.
          </p>

          <p className="text-xs text-cyan-400/70 mt-3">
            Disponible para proyectos
          </p>
        </div>

        {/* ===== LINKS ===== */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:text-cyan-400 transition duration-200">
                Inicio
              </a>
            </li>
            <li>
              <a href="#Servicios" className="hover:text-cyan-400 transition duration-200">
                Servicios
              </a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-cyan-400 transition duration-200">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#Formulario" className="hover:text-cyan-400 transition duration-200">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* ===== SOCIAL ===== */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Conecta conmigo
          </h4>

          <div className="flex space-x-4">
            <a
              href="https://github.com/LE566"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition duration-200"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/luis-enrique-villalobos-esparza-87004b2a0/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition duration-200"
            >
              <FiLinkedin size={20} />
            </a>

            <a
              href="mailto:quiq28615@gmail.com"
              className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition duration-200"
            >
              <FiMail size={20} />
            </a>

            <a
              href="#Formulario"
              title="Disponible para proyectos"
              className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition duration-200"
            >
              <FiGlobe size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Luis Esparza · Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiGlobe,
} from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 bg-white dark:bg-black border-t border-gray-200 dark:border-cyan-400/20 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ===== BRAND ===== */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Luis Esparza
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {t('footer.brand_desc')}
          </p>

          <p className="text-xs text-cyan-600 dark:text-cyan-400/70 mt-3">
            {t('footer.available')}
          </p>
        </div>

        {/* ===== LINKS ===== */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t('footer.nav_title')}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200">
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a href="#Servicios" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200">
                {t('nav.services')}
              </a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200">
                {t('nav.projects')}
              </a>
            </li>
            <li>
              <a href="#Formulario" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200">
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </div>

        {/* ===== SOCIAL ===== */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t('footer.connect_title')}
          </h4>

          <div className="flex space-x-4">
            <a
              href="https://github.com/LE566"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/luis-enrique-villalobos-esparza-87004b2a0/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200"
            >
              <FiLinkedin size={20} />
            </a>

            <a
              href="mailto:quiq28615@gmail.com"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200"
            >
              <FiMail size={20} />
            </a>

            <a
              href="#Formulario"
              title="Disponible para proyectos"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200"
            >
              <FiGlobe size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="border-t border-gray-200 dark:border-gray-800 text-center py-6 text-sm text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Luis Esparza · {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;

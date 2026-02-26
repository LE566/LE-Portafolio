import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../TextAnimations/SplitText/SplitText";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import useIsMobile from "../Hooks/useIsMobile";
import { useLanguage } from "../context/LanguageContext";

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // Referencia para cerrar el menú
  const { t, language } = useLanguage();

  // Estado para el menú desplegable
  const [showCVDropdown, setShowCVDropdown] = useState(false);

  // Efecto para cerrar el dropdown si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCVDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useGSAP(() => {
    if (isMobile) return;

    const tl = gsap.timeline();

    tl.from(".hero-subtitle", {
      y: -30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    })
      .from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.2")
      .from(".hero-image", {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4");

  }, { scope: containerRef, dependencies: [isMobile] });

  useEffect(() => {
    if (!typedRef.current) return;

    // Texto base para evitar colapso
    typedRef.current.innerHTML = "&nbsp;";

    // Get roles from translation
    const roles = isMobile ? t('hero.typed_mobile') : t('hero.roles');

    const typed = new Typed(typedRef.current, {
      strings: roles,
      typeSpeed: isMobile ? 40 : 60,
      backSpeed: isMobile ? 30 : 45,
      backDelay: 1200,
      smartBackspace: false,
      loop: true,

      // 👉 evita frame vacío
      preStringTyped: () => {
        if (typedRef.current?.textContent === "") {
          typedRef.current.innerHTML = "&nbsp;";
        }
      },
    });

    return () => typed.destroy();
  }, [isMobile, language, t]);

  // Función para manejar la descarga específica
  const downloadSpecificCV = (lang: 'en' | 'es') => {
    // Asegúrate de tener los archivos en public/docs/
    const cvUrl = lang === 'en' 
      ? `${import.meta.env.BASE_URL}docs/LuisEnriqueVillalobosEsparza_CV_EN.pdf` 
      : `${import.meta.env.BASE_URL}docs/LuisEnriqueVillalobosEsparza_CV_ES.pdf`;
      
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = `Luis_Esparza_CV_${lang.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowCVDropdown(false);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-24 lg:pt-0 lg:pb-0 gap-10 lg:gap-16"
    >
      {/* ===== TEXTO ===== */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* Subtítulo */}
        {isMobile ? (
          <h3 className="text-xl text-gray-500 dark:text-gray-300 mb-2">{t('hero.subtitle')}</h3>
        ) : (
          <h3 className="hero-subtitle text-2xl md:text-3xl text-gray-500 dark:text-gray-300 mb-2">
            {t('hero.subtitle')}
          </h3>
        )}

        {/* Nombre */}
        {isMobile ? (
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Luis Esparza
          </h1>
        ) : (
          <SplitText
            text="Luis Esparza"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3"
            delay={100}
            duration={0.6}
            ease="power3.out"
            enableScrollTrigger={false}
          />
        )}

        {/* Typed */}
        <h3 className="text-lg sm:text-2xl mb-4 text-gray-600 dark:text-gray-300">
          {t('hero.and_im')}{" "}
          <span
            ref={typedRef}
            className="
              text-cyan-600 dark:text-cyan-400 font-semibold inline-block
              min-h-[1.6em]
              text-left
              align-middle
            "
          />
        </h3>

        {/* Descripción */}
        {isMobile ? (
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto lg:mx-0 text-sm leading-relaxed">
            {t('hero.desc_mobile')}
          </p>
        ) : (
          <ShinyText
            text={t('hero.desc_desktop')}
            speed={5}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto lg:mx-0 text-base leading-relaxed"
          />
        )}

        {/* CTA con Dropdown */}
        <div className="hero-cta relative flex flex-col items-center lg:items-start mt-6" ref={dropdownRef}>
          <button 
            onClick={() => setShowCVDropdown(!showCVDropdown)}
            className={`bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 text-white px-6 py-2 rounded-lg ${isMobile ? "text-base" : "text-lg"} font-bold transition duration-300 transform hover:scale-105 flex items-center gap-2`}
          >
            {t('hero.download_cv')}
            {/* Ícono de flecha que rota cuando el menú se abre */}
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showCVDropdown ? 'rotate-180' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Menú Dropdown con animación suave de Tailwind */}
          <div 
            className={`absolute top-full mt-2 w-52 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 transition-all duration-300 transform origin-top ${showCVDropdown ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
          >
            <button 
              onClick={() => downloadSpecificCV('es')}
              className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-gray-700 rounded-t-lg transition-colors border-b border-gray-100 dark:border-gray-700"
            >
              CV en Español
            </button>
            <button 
              onClick={() => downloadSpecificCV('en')}
              className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-gray-700 rounded-b-lg transition-colors"
            >
              CV in English
            </button>
          </div>
        </div>
      </div>

      {/* ===== IMAGEN ===== */}
      <div className="relative w-full lg:w-1/2 flex justify-center hero-image">
        <div className="flex flex-col items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/yo1.png`}
            alt="Luis Esparza"
            className="rounded-lg shadow-xl w-40 h-48 object-cover border border-gray-300 dark:border-black"
          />
          <h2 className="mt-4 text-2xl text-gray-900 dark:text-white font-semibold">
            {t('hero.role_card')}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
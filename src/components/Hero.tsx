import React, { useEffect, useRef } from "react";
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
  const { t, language } = useLanguage();

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

        {/* CTA */}
        <div className="hero-cta flex justify-center lg:justify-start">
          <button className={`${isMobile ? "mt-6" : "mt-6"} bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 text-white px-6 py-2 rounded-lg ${isMobile ? "text-base" : "text-lg"} font-bold transition duration-300 transform hover:scale-105`}>
            {t('hero.download_cv')}
          </button>
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

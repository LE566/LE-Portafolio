import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import SplitText from "../TextAnimations/SplitText/SplitText";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import useIsMobile from "../Hooks/useIsMobile";

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!typedRef.current) return;

    // Texto base para evitar colapso
    typedRef.current.innerHTML = "&nbsp;";

    const typed = new Typed(typedRef.current, {
      strings: isMobile
        ? ["Web Developer"]
        : ["Web Developer", "Software Engineer", "Full Stack Developer"],
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
  }, [isMobile]);

  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-24 lg:pt-0 lg:pb-0 gap-10 lg:gap-16"
    >
      {/* ===== TEXTO ===== */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* Subtítulo */}
        {isMobile ? (
          <h3 className="text-xl text-gray-300 mb-2">Hello, I'm</h3>
        ) : (
          <motion.h3
            className="text-2xl md:text-3xl text-gray-300 mb-2"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </motion.h3>
        )}

        {/* Nombre */}
        {isMobile ? (
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Luis Esparza
          </h1>
        ) : (
          <SplitText
            text="Luis Esparza"
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            delay={100}
            duration={0.6}
            ease="power3.out"
          />
        )}

        {/* Typed */}
        <h3 className="text-lg sm:text-2xl mb-4 text-gray-300">
          and I'm{" "}
          <span
            ref={typedRef}
            className="
              text-cyan-400 font-semibold inline-block
              min-h-[1.6em]
              text-left
              align-middle
            "
          />
        </h3>

        {/* Descripción */}
        {isMobile ? (
          <p className="mt-4 text-gray-400 max-w-md mx-auto lg:mx-0 text-sm leading-relaxed">
            Soy desarrollador de software enfocado en crear aplicaciones web
            modernas, rápidas y optimizadas. Disfruto aprender nuevas tecnologías y mejorar continuamente como profesional.
          </p>
        ) : (
          <ShinyText
            text="Soy desarrollador de software enfocado en crear aplicaciones web modernas, optimizadas y escalables. Disfruto aprender nuevas tecnologías y mejorar continuamente como profesional."
            speed={5}
            className="mt-4 text-gray-400 max-w-md mx-auto lg:mx-0 text-base leading-relaxed"
          />
        )}

        {/* CTA */}
        {isMobile ? (
          <div className="flex justify-center lg:justify-start">
            <button className="mt-6 bg-cyan-500 text-white px-6 py-2 rounded-lg text-base font-bold">
              Download CV
            </button>
          </div>
        ) : (
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg text-lg font-bold transition duration-300">
              Download CV
            </button>
          </motion.div>
        )}
      </div>

      {/* ===== IMAGEN ===== */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/yo1.png`}
            alt="Luis Esparza"
            className="rounded-lg shadow-xl w-40 h-48 object-cover border border-black"
          />
          <h2 className="mt-4 text-2xl text-white font-semibold">
            Software Developer
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

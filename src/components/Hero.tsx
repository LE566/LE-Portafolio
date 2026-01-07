import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import SplitText from "../TextAnimations/SplitText/SplitText";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Developer", "Engineer", "Full Stack", "Web Dev", "Coder"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-24 lg:pt-0 lg:pb-0 gap-10 lg:gap-16"
      id="hero"
    >
      {/* Contenido de texto */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.h3
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-2"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.h3>

        <SplitText
          text="Luis Esparza"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
          delay={100}
          duration={0.6}
          ease="power3.out"
        />

        <h3 className="text-lg sm:text-2xl mb-4 text-gray-300">
          and, I'm{" "}
          <span
            ref={typedRef}
            className="text-cyan-400 font-semibold inline-block min-h-[1.5em]"
          ></span>
        </h3>

        <ShinyText
          text="A programmer is a person who writes, tests, and maintains code to develop software and applications."
          disabled={false}
          speed={5}
          className="mt-4 text-gray-400 max-w-md mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed"
        />

        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg text-base sm:text-lg font-bold transition duration-300">
            Download CV
          </button>
        </motion.div>
      </div>

      {/* Imagen */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/yo1.png`}
            alt="Luis Esparza"
            className="rounded-lg shadow-xl w-30 h-35 sm:w-40 sm:h-47 md:w-40 md:h-47 object-cover border border-black"
          />
          <h2 className="mt-4 text-xl sm:text-2xl text-white font-semibold">Dev</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

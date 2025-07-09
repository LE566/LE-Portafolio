import React, { useEffect, useRef, useState } from "react";
import AnimatedContent from "../Animations/AnimatedContent/AnimatedContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Squares from "../Backgrounds/Squares/Squares";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";

gsap.registerPlugin(ScrollTrigger);

type ServicesProps = {
  openModal: (title: string, imgSrc: string, description: string) => void;
};

const servicesData = [
  {
    title: "Desarrollo front-end",
    img: "/images/sitio-web.png",
    description: "Ofrezco diseño web moderno, responsivo y atractivo.",
  },
  {
    title: "Aplicaciones Web",
    img: "/images/desarrollo-de-aplicaciones (3).png",
    description: "Desarrollo de aplicaciones web seguras y escalables.",
  },
  {
    title: "E-Commerce",
    img: "/images/carrito-de-compras.png",
    description: "Creación de tiendas en línea con pasarelas de pago.",
  },
  {
    title: "Desarrollo back-end",
    img: "/images/backend (1).png",
    description: "Servicios de backend para manejar datos y lógica de negocios.",
  },
  {
    title: "Testing",
    img: "/images/libro-de-ciencia.png",
    description: "Pruebas para garantizar calidad y estabilidad de tus apps.",
  },
  {
    title: "Aplicaciones Móviles",
    img: "/images/desarrollo-de-aplicaciones (5).png",
    description: "Desarrollo de apps móviles nativas y multiplataforma.",
  },
];

const Services: React.FC<ServicesProps> = ({ openModal }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Animación de subida desde más abajo (sin desvanecimiento)
    gsap.fromTo(
      el,
      { 
        y: isMobile ? "200px" : "200px", // Comienza mucho más abajo
      },
      {
        y: 0,
        ease: "power2.out",
        duration: 1.5, // Animación más larga para mayor efecto
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // Comienza la animación antes
          end: "top 20%",
          scrub: 1.5, // Scrub más lento
          toggleActions: "play none none none",
        },
      }
    );
  }, [isMobile]);

  return (
    <div
      id="Servicios"
      ref={sectionRef}
      className="relative w-full min-h-screen z-[30]  px-4 sm:px-6 py-12 md:py-16 lg:py-40 border-b border-t border-cyan-400 bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center"
    >
      {/* Fondo animado de cuadros */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Squares
          speed={0.1}
          squareSize={isMobile ? 40 : 50}
          direction="diagonal"
          borderColor="#00ffff"
          hoverFillColor="#00ffff"
        />
      </div>

      {/* Encabezado */}
      <AnimatedContent
        distance={isMobile ? 80 : 120}
        direction="vertical"
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity={false} // Sin desvanecimiento
        scale={0.1}
        threshold={-0.4}
        delay={0.1}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
          Mis servicios
        </h2>
        <p className="text-center text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto px-4 text-sm sm:text-base">
          Ofrezco soluciones modernas, intuitivas y adaptadas a tus necesidades digitales.
        </p>
      </AnimatedContent>

      {/* Tarjetas de servicios */}
      <div className="relative z-10 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mb-10 mx-auto px-2 sm:px-4 w-full">
        {servicesData.map(({ title, img, description }, index) => (
          <AnimatedContent
            key={title}
            distance={isMobile ? 60 : 100}
            direction="vertical"
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity={false} // Sin desvanecimiento
            scale={0.1}
            threshold={-0.4}
            delay={0.1 + index * 0.08}
          >
            <section
              onClick={() => openModal(title, img, description)}
              className="cursor-pointer flex flex-col items-center text-center border border-white/20 bg-black/80 p-4 sm:p-5 rounded-lg shadow-lg hover:bg-gray-800 hover:scale-[1.02] hover:ring-1 hover:ring-cyan-400 hover:border-cyan-400 transition-all duration-300 ease-in-out backdrop-blur-sm"
            >
              <ShinyText
                text={title}
                disabled={false}
                speed={3}
                className="text-lg sm:text-xl mb-2 border-b border-cyan-500/50 pb-1"
              />
              <hr className="w-10 sm:w-12 border-cyan-400/40 my-2" />
              <img
                src={img}
                alt={title}
                width={isMobile ? 50 : 60}
                height={isMobile ? 50 : 60}
                className="hover:animate-pulse mb-3"
              />
              <p className="text-gray-300 text-sm sm:text-base mt-1 px-2">
                {description}
              </p>
            </section>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default Services;
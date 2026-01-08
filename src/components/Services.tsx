import React, { useEffect, useRef, useState } from "react";
import AnimatedContent from "../Animations/AnimatedContent/AnimatedContent";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import FloatingLines from "../Backgrounds/lines/FloatingLines";

type ServicesProps = {
  openModal: (title: string, imgSrc: string, description: string) => void;
};

const servicesData = [
  {
    title: "Desarrollo front-end",
    img: `${import.meta.env.BASE_URL}images/sitio-web.png`,
    description: "Ofrezco diseño web moderno, responsivo y atractivo.",
  },
  {
    title: "Aplicaciones Web",
    img: `${import.meta.env.BASE_URL}images/desarrollo-de-aplicaciones (3).png`,
    description: "Desarrollo de aplicaciones web seguras y escalables.",
  },
  {
    title: "E-Commerce",
    img: `${import.meta.env.BASE_URL}images/carrito-de-compras.png`,
    description: "Creación de tiendas en línea con pasarelas de pago.",
  },
  {
    title: "Desarrollo back-end",
    img: `${import.meta.env.BASE_URL}images/backend (1).png`,
    description: "Servicios de backend para manejar datos y lógica de negocios.",
  },
  {
    title: "Testing",
    img: `${import.meta.env.BASE_URL}images/libro-de-ciencia.png`,
    description: "Pruebas para garantizar calidad y estabilidad de tus apps.",
  },
  {
    title: "Aplicaciones Móviles",
    img: `${import.meta.env.BASE_URL}images/desarrollo-de-aplicaciones (5).png`,
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

  return (
    <section
      id="Servicios"
      ref={sectionRef}
      className="
        relative min-h-screen
        px-4 sm:px-6 py-12 md:py-16 lg:py-40
        border-t border-b border-cyan-400
        bg-gradient-to-br from-black via-gray-900 to-black
        overflow-hidden
      "
    >
      {/* ===== FONDO (DETRÁS) ===== */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          linesGradient={["#1c4fa0", "#2F4BC0", "#47f572"]}
          animationSpeed={1.2}
          interactive = {false}
          bendRadius={6}
          bendStrength={-0.7}
          mouseDamping={0.1}
          parallax
          parallaxStrength={0.3}
        />
      </div>


      {/* ===== CONTENIDO (ENCIMA) ===== */}
      <div className="relative z-10">
        {/* Encabezado */}
        <AnimatedContent
          distance={isMobile ? 150 : 120}
          direction="vertical"
          duration={0.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.1}
          threshold={0}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
            Mis servicios
          </h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto px-4 text-sm sm:text-base">
            Ofrezco soluciones modernas, intuitivas y adaptadas a tus necesidades digitales.
          </p>
        </AnimatedContent>

        {/* Tarjetas */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2 sm:px-4 w-full">
          {servicesData.map(({ title, img, description }, index) => (
            <AnimatedContent
              key={title}
              distance={isMobile ? 150 : 100}
              direction="vertical"
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.1}
              threshold={isMobile ? -0.4 : -0.2}
              delay={index * 0.08}
            >
              <section
                onClick={() => openModal(title, img, description)}
                className="
                  cursor-pointer flex flex-col items-center text-center
                  border border-white/20 bg-black
                  p-4 sm:p-5 rounded-lg shadow-lg
                  hover:bg-gray-800 hover:scale-[1.02]
                  hover:ring-1 hover:ring-cyan-400 hover:border-cyan-400
                  transition-all duration-300 ease-in-out
                  backdrop-blur-sm
                "
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
    </section>
  );
};

export default Services;

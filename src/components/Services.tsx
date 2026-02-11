import React, { useEffect, useState } from "react";
import AnimatedContent from "../Animations/AnimatedContent/AnimatedContent";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import FloatingLines from "../Backgrounds/lines/FloatingLines";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

type ServicesProps = {
  openModal: (title: string, imgSrc: string, description: string) => void;
};

// Mapping keys to images
const serviceKeys = [
  { key: "frontend", img: "sitio-web.png" },
  { key: "webapps", img: "desarrollo-de-aplicaciones (3).png" },
  { key: "ecommerce", img: "carrito-de-compras.png" },
  { key: "backend", img: "backend (1).png" },
  { key: "testing", img: "libro-de-ciencia.png" },
  { key: "mobile", img: "desarrollo-de-aplicaciones (5).png" },
];

const Services: React.FC<ServicesProps> = ({ openModal }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="Servicios"
      className="
      relative min-h-screen
      px-4 sm:px-6 py-12 md:py-16 lg:py-40
      border-t border-b border-gray-200 dark:border-cyan-400
      bg-zinc-50 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black
      transition-colors duration-300
      overflow-hidden

      scroll-mt-24 sm:scroll-mt-20 md:scroll-mt-16
      "
    >
      {/* ===== FONDO ===== */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          // Cyan/Blue/Emerald for Dark, maybe lighter blue/purple for Light
          linesGradient={theme === 'dark'
            ? ["#1c4fa0", "#2F4BC0", "#47f572"]
            : ["#3b82f6", "#8b5cf6", "#ec4899"]}
          backgroundColor={theme === 'dark' ? "#000000" : "#FAFAFA"} // Black vs Zinc-50
          animationSpeed={isMobile ? 0.5 : 1.2}
          interactive={false}
          bendRadius={isMobile ? 3 : 6}
          bendStrength={isMobile ? -0.4 : -0.7}
          mouseDamping={0.1}
          parallax
          parallaxStrength={isMobile ? 0.1 : 0.3}
          lineCount={isMobile ? 3 : 4}
        />
      </div>

      {/* Light Mode "Spots" / Blobs (Like Stack) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none dark:hidden">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="relative z-10">
        {/* Header */}
        {isMobile ? (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
              {t('services.title')}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto text-sm">
              {t('services.mobile_desc')}
            </p>
          </>
        ) : (
          <AnimatedContent
            distance={120}
            direction="vertical"
            duration={0.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.1}
            threshold={0}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
              {t('services.title')}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
              {t('services.desktop_desc')}
            </p>
          </AnimatedContent>
        )}

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2">
          {serviceKeys.map(({ key, img }, index) => {
            const title = t(`services.items.${key}.title`) as string;
            const description = t(`services.items.${key}.desc`) as string;
            const imgSrc = `${import.meta.env.BASE_URL}images/${img}`;

            const Card = (
              <section
                onClick={() => openModal(title, imgSrc, description)}
                className="
                  group cursor-pointer flex flex-col items-center text-center
                  h-full
                  bg-white/60 backdrop-blur-md dark:bg-black dark:border-zinc-800
                  border border-gray-200
                  p-6 md:p-8 rounded-2xl shadow-sm
                  hover:shadow-xl hover:-translate-y-2
                  hover:border-cyan-400 dark:hover:border-cyan-500
                  transition-all duration-300 ease-out
                "
              >
                <div className="mb-4 p-4 rounded-full bg-cyan-50 dark:bg-cyan-900/20 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40 transition-colors duration-300">
                  <img
                    src={imgSrc}
                    alt={title}
                    width={isMobile ? 40 : 50}
                    height={isMobile ? 40 : 50}
                    className="object-contain"
                  />
                </div>

                <div className="mb-3">
                  <ShinyText
                    text={title}
                    disabled={isMobile}
                    speed={3}
                    className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                  />
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </section>
            );

            return isMobile ? (
              <div key={key}>{Card}</div>
            ) : (
              <AnimatedContent
                key={key}
                distance={60}
                direction="vertical"
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={0.95}
                threshold={0.1}
                delay={index * 0.1}
              >
                {Card}
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

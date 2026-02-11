import { useState, Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Particles from "./Backgrounds/Particles/Particles";
import useIsMobile from "./Hooks/useIsMobile";
import Lenis from "lenis";
import { useTheme } from "./context/ThemeContext";

const Services = lazy(() => import("./components/Services"));
const FeaturedProjects = lazy(() => import("./components/FeaturedProjects"));
const Timeline = lazy(() => import("./components/Timeline"));
const GitHubRepos = lazy(() => import("./components/GitHubRepos"));
const Stack = lazy(() => import("./components/Stack"));
const Certifications = lazy(() => import("./components/Certifications"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));
const Modal = lazy(() => import("./components/Modal"));

function App() {
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  // Estado para modal
  const [modalData, setModalData] = useState<{
    title: string;
    imgSrc: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const openModal = (title: string, imgSrc: string, description: string) => {
    setModalData({ title, imgSrc, description });
  };

  const closeModal = () => setModalData(null);

  const particleColors = theme === 'dark'
    ? ['#ffffff', '#00ffff']
    : ['#000000', '#00aaaa']; // Black/Teal for light mode

  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen text-gray-900 dark:text-white font-sans relative transition-colors duration-300">
      {/* Navbar fuera del contenedor de partículas */}
      <Navbar />
      <div id="hero" className="div"></div>
      <div className="h-[100dvh] overflow-hidden relative"> {/* CONTENEDOR PRINCIPAL */}
        {/* Partículas de fondo */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={particleColors}
            particleCount={isMobile ? 40 : 300}
            particleSpread={isMobile ? 3 : 8}
            speed={isMobile ? 0.10 : 0.15}
            particleBaseSize={isMobile ? 70 : 100}
            moveParticlesOnHover={false}
            alphaParticles={true}
          />
        </div>
        {/* Contenido del Hero */}
        <div className="z-20 h-full flex items-center">
          <Hero />
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-cyan-400">Loading...</div>}>
        <div className="flex flex-col gap-24 md:gap-32 pb-24">
          <Services openModal={openModal} />
          <FeaturedProjects />
          <div className="flex flex-col gap-0 md:gap-8">
            <Timeline />
            <Stack />
            <Certifications />
            <GitHubRepos />
            <ContactForm />
          </div>
        </div>
        <Footer />
        {modalData && (
          <Modal {...modalData} closeModal={closeModal} />
        )}
      </Suspense>
    </div>
  );
}

export default App;

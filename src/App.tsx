import { useState, Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Particles from "./Backgrounds/Particles/Particles";
import useIsMobile from "./Hooks/useIsMobile";
import Lenis from "lenis";

const Services = lazy(() => import("./components/Services"));
const GitHubRepos = lazy(() => import("./components/GitHubRepos"));
const Stack = lazy(() => import("./components/Stack"));
const Certifications = lazy(() => import("./components/Certifications"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));
const Modal = lazy(() => import("./components/Modal"));

function App() {
  const isMobile = useIsMobile();
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

  return (
    <div className="bg-black min-h-screen text-white font-sans relative">
      {/* Navbar fuera del contenedor de partículas */}
      <Navbar />
      <div id="hero" className="div"></div>
      <div className="h-[100dvh] overflow-hidden relative"> {/* CONTENEDOR PRINCIPAL */}
        {/* Partículas de fondo */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#ffffff', '#00ffff']}
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
        <Services openModal={openModal} />
        <Stack />
        <Certifications />
        <GitHubRepos />
        <ContactForm />
        <Footer />
        {modalData && (
          <Modal {...modalData} closeModal={closeModal} />
        )}
      </Suspense>
    </div>
  );
}

export default App;

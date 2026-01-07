import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import GitHubRepos from "./components/GitHubRepos";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Particles from "./Backgrounds/Particles/Particles";
import ScrollVelocity from "./TextAnimations/ScrollVelocity/ScrollVelocity";
import useIsMobile from "./Hooks/useIsMobile";




function App() {
  const isMobile = useIsMobile();
  // Estado para modal
  const [modalData, setModalData] = useState<{
    title: string;
    imgSrc: string;
    description: string;
  } | null>(null);

  const openModal = (title: string, imgSrc: string, description: string) => {
    setModalData({ title, imgSrc, description });
  };

  const closeModal = () => setModalData(null);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Navbar fuera del contenedor de partículas */}
      <Navbar />
      <div id="hero" className="div"></div>
      <div className="relative h-screen overflow-hidden"> {/* CONTENEDOR PRINCIPAL */}
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
        <div className="relative z-20 h-full flex items-center">
          <Hero />
        </div>
      </div>

      <Services openModal={openModal} />

      <GitHubRepos />
      
      <ScrollVelocity
        texts={['Back-end Developer', 'Front-end Developer']} 
        velocity={100} 
        className=" text-lg sm:text-4xl pr-15 custom-scroll-text text-cyan-400"
      />
      <ContactForm />

      <Footer />
      {modalData && (
        <Modal {...modalData} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;

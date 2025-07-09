import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import GitHubRepos from "./components/GitHubRepos";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Particles from "./Backgrounds/Particles/Particles";
import { motion } from "framer-motion";
import ScrollVelocity from "./TextAnimations/ScrollVelocity/ScrollVelocity";



function App() {
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
            particleCount={600}
            particleSpread={10}
            speed={0.15}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={true}
          />
        </div>

        {/* 🌌 Rayo de luz animado desde la esquina superior derecha */}
        <motion.div
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{
            opacity: [0.2, 0.4, 0.6, 0.4, 0.2],
            scale: [1, 1.05, 1.1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[900px] h-[900px] bg-[radial-gradient(ellipse_at_top_right,_rgba(0,255,255,0.4),_transparent_80%)] blur-3xl rotate-45 -translate-y-1/3 translate-x-1/4 pointer-events-none z-10"
        />


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

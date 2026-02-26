import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);


const SmartImage = ({ src, alt }: { src: string; alt: string }) => {
    // Estado para saber si la imagen es horizontal (PC)
    const [isLandscape, setIsLandscape] = useState(false);

    return (
        <img
            src={src}
            alt={alt}
            onLoad={(e) => {
                // Detectamos si el ancho natural es mayor que el alto
                if (e.currentTarget.naturalWidth > e.currentTarget.naturalHeight) {
                    setIsLandscape(true);
                }
            }}
            className={`relative z-10 w-full h-full transform transition-transform duration-700 group-hover:scale-[1.03] ${
                isLandscape 
                    ? 'object-cover' // Llena el espacio completo si es PC
                    : 'object-contain max-h-[100%] drop-shadow-2xl' // Mantiene la forma si es móvil
            }`}
        />
    );
};
// =======================================================================

const FeaturedProjects: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const isMobile = window.innerWidth < 768;
    const items = t('featured.items') as any[];

    useGSAP(() => {
        const el = containerRef.current;
        if (!el || !Array.isArray(items)) return;

        if (isMobile) {
            gsap.set(".featured-title", { opacity: 1, y: 0 });
            gsap.set(".featured-card", { opacity: 1, y: 0 });
            return;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(
            ".featured-title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )
            .fromTo(
                ".featured-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                },
                "-=0.4"
            );

    }, { scope: containerRef, dependencies: [isMobile, items] });

    if (!Array.isArray(items)) return null;

    return (
        <section id="featured" ref={containerRef} className="py-20 px-6 bg-zinc-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="featured-title text-center mb-16 opacity-0 translate-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('featured.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('featured.subtitle')}
                    </p>
                </div>

                <div className="space-y-12 md:space-y-24">
                    {items.map((project, index) => (
                        <div key={index} className={`featured-card flex flex-col md:flex-row gap-8 items-center opacity-0 translate-y-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                            
                            {/* ===== CARRUSEL DE IMÁGENES ===== */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 group shadow-lg">
                                    
                                    {project.images && project.images.length > 0 ? (
                                        <Swiper
                                            modules={[Autoplay, Pagination, Navigation]}
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                                            pagination={{ clickable: true }}
                                            navigation={true}
                                            loop={true}
                                            className="w-full h-full featured-swiper"
                                        >
                                            {project.images.map((img: string, imgIndex: number) => (
                                                <SwiperSlide key={imgIndex} className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                                    
                                                    {/* IMAGEN DE FONDO DIFUMINADA */}
                                                    <img 
                                                        src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`} 
                                                        alt=""
                                                        className="absolute inset-0 w-full h-full object-cover opacity-50 blur-xl scale-110"
                                                        aria-hidden="true"
                                                    />
                                                    
                                                    {/* IMAGEN PRINCIPAL (Usa el componente inteligente) */}
                                                    <SmartImage 
                                                        src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`} 
                                                        alt={`${project.title} screenshot ${imgIndex + 1}`} 
                                                    />

                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 font-mono text-sm">
                                            Project Preview Image
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* ===== CONTENIDO ===== */}
                            <div className="w-full md:w-1/2 space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech: string) => (
                                        <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
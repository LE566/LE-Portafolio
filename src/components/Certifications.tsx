import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAward } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const Certifications: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const isMobile = window.innerWidth < 768;

    // Certificaciones actualizadas según tu currículum
    const certifications = [
        {
            title: "Scrum Fundamentals Certified",
            issuer: "SCRUMstudy",
            date: "2025",
            link: "#", // Puedes poner el link a tu credencial aquí
        },
        {
            title: "Ionic 7",
            issuer: "Udemy",
            date: "2025",
            link: "#",
        },
        {
            title: "Internet of Things (IoT)",
            issuer: "Udemy",
            date: "2025",
            link: "#",
        },
        {
            title: "MongoDB",
            issuer: "Udemy",
            date: "2025",
            link: "#",
        },
        {
            title: "Mendix Rapid Developer Certification",
            issuer: "Mendix",
            date: "2025",
            link: "#",
        },
        {
            title: "Python Programming Basics",
            issuer: "Huawei Talent Online",
            date: "2025",
            link: "#",
        },
    ];

    useGSAP(() => {
        const el = containerRef.current;
        if (!el) return;

        if (isMobile) {
            // Mobile: visible immediately
            gsap.set(".cert-card", { opacity: 1, x: 0 });
            gsap.set(".cert-title", { opacity: 1, y: 0 });
            return;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(
            ".cert-title",
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )
            .fromTo(
                ".cert-card",
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.15, // Reduje un poco el tiempo para que fluyan más rápido
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.3"
            );
    }, { scope: containerRef, dependencies: [isMobile] });

    return (
        <section id="certificaciones" ref={containerRef} className="py-10 px-6 flex flex-col justify-center bg-zinc-50 dark:bg-transparent transition-colors duration-300">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="cert-title text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 opacity-0 -translate-y-8">
                    {t('certifications.title')}
                </h2>

                {/* Contenedor actualizado a Grid para mostrar 2 columnas en PC */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                        <a
                            key={cert.title}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card block p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:border-cyan-500 transition-all duration-300 shadow-sm dark:shadow-lg group opacity-0 -translate-x-12"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <FaAward size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                                        {cert.issuer} • <span className="text-gray-400 dark:text-gray-500">{cert.date}</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
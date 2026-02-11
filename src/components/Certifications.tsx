import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiAward } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
    {
        title: "Meta Front-End Developer",
        issuer: "Meta",
        date: "2024",
        link: "#", // Add actual links if available
        description: "Certificación profesional en desarrollo web frontend React.",
    },
    {
        title: "JavaScript Algorithms & Data Structures",
        issuer: "FreeCodeCamp",
        date: "2023",
        link: "#",
        description: "Fundamentos de programación y estructuras de datos en JS.",
    },
    {
        title: "Advanced React Patterns",
        issuer: "Udemy",
        date: "2023",
        link: "#",
        description: "Patrones de diseño avanzados y optimización de rendimiento en React.",
    },
    {
        title: "Full Stack Open",
        issuer: "University of Helsinki",
        date: "2023",
        link: "#",
        description: "Desarrollo moderno de aplicaciones web con React, Redux, Node.js y MongoDB.",
    },
    {
        title: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        date: "2022",
        link: "#",
        description: "Diseño web adaptable y accesible con HTML5 y CSS3.",
    },
    {
        title: "Git & GitHub Masterclass",
        issuer: "Udemy",
        date: "2022",
        link: "#",
        description: "Control de versiones y flujo de trabajo colaborativo.",
    },
];

const Certifications: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (window.innerWidth < 768) return;

        const el = containerRef.current;
        if (!el) return;

        gsap.fromTo(
            ".cert-card",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, { scope: containerRef });

    return (
        <section id="certificaciones" ref={containerRef} className="relative z-10 py-20 px-6 max-w-7xl mx-auto bg-black/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                    <span className="text-cyan-400">Certificaciones</span> y Logros
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Aprendizaje continuo para mantenerme al día con las últimas tecnologías.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-card block bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-800/50 transition-all duration-300 group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                                <FiAward size={24} />
                            </div>
                            <span className="text-sm text-zinc-500 font-mono">{cert.date}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {cert.title}
                        </h3>
                        <p className="text-cyan-200/80 text-sm mb-3 font-medium">
                            {cert.issuer}
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {cert.description}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certifications;

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importamos los íconos necesarios (Incluyendo HTML5 y CSS3)
import { 
    FaReact, 
    FaNodeJs, 
    FaPython, 
    FaGithub, 
    FaGitAlt,
    FaHtml5,
    FaCss3Alt
} from "react-icons/fa";
import { 
    SiTypescript, 
    SiJavascript, 
    SiAngular, 
    SiIonic, 
    SiTailwindcss, 
    SiBootstrap, 
    SiFlask, 
    SiMongodb, 
    SiMysql, 
    SiArduino, 
    SiCplusplus 
} from "react-icons/si";

import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// ===== ARREGLO DE TECNOLOGÍAS =====
const technologies = [
    // Web Base
    { name: "HTML5", icon: <FaHtml5 size={46} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={46} className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript size={46} className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript size={46} className="text-blue-600" /> },
    
    // Frontend & Mobile
    { name: "React", icon: <FaReact size={46} className="text-cyan-400" /> },
    { name: "Angular", icon: <SiAngular size={46} className="text-red-600" /> },
    { name: "Ionic", icon: <SiIonic size={46} className="text-blue-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={46} className="text-teal-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={46} className="text-purple-600" /> },
    
    // Backend & Lenguajes
    { name: "Node.js", icon: <FaNodeJs size={46} className="text-green-500" /> },
    { name: "Python", icon: <FaPython size={46} className="text-blue-500" /> },
    { name: "Flask", icon: <SiFlask size={46} className="text-gray-900 dark:text-white" /> },
    { name: "C++", icon: <SiCplusplus size={46} className="text-blue-700 dark:text-blue-400" /> },
    
    // DB & Herramientas & IoT
    { name: "MongoDB", icon: <SiMongodb size={46} className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql size={46} className="text-blue-500" /> },
    { name: "Arduino", icon: <SiArduino size={46} className="text-teal-600" /> },
    { name: "Git", icon: <FaGitAlt size={46} className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub size={46} className="text-gray-900 dark:text-white" /> },
];

const Stack: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const isMobile = window.innerWidth < 768;

    useGSAP(() => {
        const el = containerRef.current;
        if (!el) return;

        if (isMobile) {
            gsap.set(".stack-item", { opacity: 1, y: 0 });
            gsap.set(".stack-title", { opacity: 1, y: 0 });
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
            ".stack-title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )
            .fromTo(
                ".stack-item",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.03,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "-=0.4"
            );
    }, { scope: containerRef, dependencies: [isMobile] });

    return (
        <section id="stack" ref={containerRef} className="min-h-screen relative flex flex-col justify-center py-10 px-6 bg-zinc-50 dark:bg-transparent transition-colors duration-300">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="stack-title text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 opacity-0 translate-y-8">
                    {t('stack.title')}
                </h2>
                
                {/* Contenedor del Grid */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            /* MEDIDAS FIJAS: w-28 h-28 en móviles, w-36 h-36 en PC, garantizan un cuadrado perfecto siempre */
                            className="stack-item flex flex-col items-center justify-center gap-3 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-xl bg-white dark:bg-black/40 border border-gray-200 dark:border-zinc-800 hover:border-cyan-500 hover:bg-gray-50 dark:hover:bg-zinc-900/80 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.1)] transition-all duration-300 group flex-shrink-0"
                        >
                            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                {tech.icon}
                            </div>
                            <span className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm font-medium text-center group-hover:text-black dark:group-hover:text-white transition-colors px-1">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
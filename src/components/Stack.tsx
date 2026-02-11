import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs, SiVite } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
    { name: "React", icon: <FaReact size={50} className="text-cyan-400" /> },
    { name: "TypeScript", icon: <SiTypescript size={50} className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={50} className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} className="text-white" /> },
    { name: "Vite", icon: <SiVite size={50} className="text-purple-500" /> },
    { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={50} className="text-blue-400" /> },
    { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJsSquare size={50} className="text-yellow-400" /> },
    { name: "Git", icon: <FaGitAlt size={50} className="text-red-500" /> },
];

const Stack: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const isMobile = window.innerWidth < 768; // Simplest check or use hook if verified

    useGSAP(() => {
        const el = containerRef.current;
        if (!el) return;

        if (isMobile) {
            // Mobile: Ensure visible immediately
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
        <section id="stack" ref={containerRef} className="min-h-screen relative flex flex-col justify-center py-20 px-6">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <h2 className="stack-title text-4xl md:text-5xl font-bold text-center text-white mb-16 opacity-0 translate-y-8">
                    Mi <span className="text-cyan-400">Stack</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="stack-item flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-black/40 border border-zinc-800 hover:border-cyan-500 hover:bg-zinc-900/80 hover:shadow-[0_0_25px_rgba(34,211,238,0.1)] transition-all duration-300 group w-full max-w-[150px] aspect-square"
                        >
                            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">{tech.icon}</div>
                            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;

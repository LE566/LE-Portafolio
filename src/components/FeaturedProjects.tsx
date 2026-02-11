import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const isMobile = window.innerWidth < 768;
    const items = t('featured.items') as any[];

    useGSAP(() => {
        const el = containerRef.current;
        if (!el || !Array.isArray(items)) return;

        if (isMobile) {
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
                            {/* Image Placeholder or Container */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 font-mono text-sm">
                                        Project Preview Image
                                    </div>
                                    {/* Override with actual image if available */}
                                    {/* <img src={project.img} alt={project.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" /> */}
                                </div>
                            </div>

                            {/* Content */}
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
                                    <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
                                        <FaGithub /> Code
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                        <FaExternalLinkAlt /> Live Demo
                                    </button>
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

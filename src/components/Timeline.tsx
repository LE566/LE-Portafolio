import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const isMobile = window.innerWidth < 768;

    // Get timeline items from translation
    // We assume the structure is an array of objects
    // Since t() returns string or object, we need to cast or ensure it is treated as array
    const items = t('timeline.items') as any[];

    useGSAP(() => {
        const el = containerRef.current;
        if (!el || !Array.isArray(items)) return;

        if (isMobile) {
            // On mobile, play animation immediately (ScrollTrigger conflicts with Lenis)
            const tl = gsap.timeline({ delay: 0.3 });
            tl.fromTo(
                ".timeline-line",
                { height: "0%" },
                { height: "100%", duration: 1, ease: "power2.inOut" }
            )
                .fromTo(
                    ".timeline-item",
                    { opacity: 0, x: -30 },
                    { opacity: 1, x: 0, duration: 0.4, stagger: 0.2, ease: "power2.out" },
                    "-=0.8"
                );
            return;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(
            ".timeline-line",
            { height: "0%" },
            { height: "100%", duration: 1.5, ease: "power2.inOut" }
        )
            .fromTo(
                ".timeline-item",
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.3, ease: "power2.out" },
                "-=1.2"
            );

    }, { scope: containerRef, dependencies: [isMobile, items] });

    if (!Array.isArray(items)) return null;

    return (
        <section id="trayectoria" ref={containerRef} className="py-10 px-6 min-h-[60vh] bg-zinc-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('timeline.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {t('timeline.subtitle')}
                    </p>
                </div>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical Line */}
                    <div className="timeline-line absolute left-8 md:left-1/2 top-4 bottom-0 w-0.5 bg-cyan-200 dark:bg-cyan-900 transform md:-translate-x-1/2 origin-top"></div>

                    <div className="space-y-12">
                        {items.map((item, index) => (
                            <div key={index} className={`timeline-item flex flex-col md:flex-row items-center justify-between w-full opacity-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                <div className="w-full md:w-5/12"></div>

                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-black transform -translate-x-2 md:-translate-x-1/2 shadow-lg z-10"></div>

                                <div className={`w-full md:w-5/12 pl-8 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                    <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-md dark:shadow-lg hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-300">
                                        <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30 rounded-full border border-cyan-200 dark:border-cyan-500/30">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

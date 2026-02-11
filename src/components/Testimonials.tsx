import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaQuoteLeft } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const isMobile = window.innerWidth < 768;
    const items = t('testimonials.items') as any[];

    useGSAP(() => {
        const el = containerRef.current;
        if (!el || !Array.isArray(items)) return;

        if (isMobile) {
            gsap.set(".testimonial-card", { opacity: 1, y: 0 });
            return;
        }

        gsap.fromTo(
            ".testimonial-card",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            }
        );
    }, { scope: containerRef, dependencies: [isMobile, items] });

    if (!Array.isArray(items)) return null;

    return (
        <section id="testimonios" ref={containerRef} className="py-20 px-6 bg-zinc-100 dark:bg-zinc-900/30 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="testimonial-card relative bg-white dark:bg-black p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-800 hover:border-cyan-500 transition-all duration-300">
                            <FaQuoteLeft className="text-4xl text-cyan-500/20 mb-6" />
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "../context/LanguageContext";


gsap.registerPlugin(ScrollTrigger);

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const isMobile = window.innerWidth < 768; // Simplest check

  useEffect(() => {
    fetch("https://api.github.com/users/Le0510/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los repositorios");
        }
        return response.json();
      })
      .then((data) => {
        const sortedRepos = data
          .sort((a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
          .slice(0, 6);
        setRepos(sortedRepos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useGSAP(() => {
    if (loading || repos.length === 0) return;

    const el = containerRef.current;
    if (!el) return;

    if (isMobile) {
      gsap.set(".repo-card", { opacity: 1, y: 0 });
      gsap.set(".repo-header", { opacity: 1, y: 0 });
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
      ".repo-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        ".repo-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

  }, { scope: containerRef, dependencies: [loading, repos, isMobile] });

  return (
    <section id="proyectos" ref={containerRef} className="relative py-10 px-6 bg-zinc-50 dark:bg-black transition-colors duration-300 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-50 pointer-events-none overflow-hidden">
        {/* MetaBalls removed as per user request */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="repo-header text-center mb-16 opacity-0 translate-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')} <span className="text-cyan-600 dark:text-cyan-400">GitHub</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {loading ? (
          <div className="text-center text-cyan-600 dark:text-cyan-400 animate-pulse text-xl">{t('projects.loading')}</div>
        ) : error ? (
          <div className="text-center text-red-500">{t('projects.error')} {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="repo-card flex flex-col justify-between bg-white dark:bg-zinc-900/40 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-6 rounded-xl hover:border-cyan-500 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 group opacity-0 translate-y-8"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <FaGithub size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                      {/* ShinyText might be too heavy for many cards? Let's use it sparingly or conditional */}
                      <h3 className="font-bold text-xl text-gray-800 dark:text-white truncate max-w-[200px]" title={repo.name}>
                        {repo.name}
                      </h3>
                    </div>
                    <div className="flex gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <span className="flex items-center gap-1"><FaStar className="text-yellow-500" /> {repo.stargazers_count}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                    {repo.description || t('projects.no_desc')}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {repo.topics.slice(0, 4).map(topic => (
                        <span key={topic} className="px-2 py-1 text-xs rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-800 dark:text-white text-sm font-medium transition-colors"
                  >
                    <FaCodeBranch /> {t('projects.view_code')}
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-cyan-600 dark:bg-cyan-500/20 hover:bg-cyan-700 dark:hover:bg-cyan-500/30 text-white dark:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      <FaExternalLinkAlt /> {t('projects.demo')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubRepos;

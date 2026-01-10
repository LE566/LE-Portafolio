import React, { useEffect, useState, useRef, memo } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import MetaBalls from "../Animations/MetaBalls/MetaBalls";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import useIsMobile from "../Hooks/useIsMobile";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string;
};

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    fetch("https://api.github.com/users/LE566/repos")
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching repos");
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center my-10 text-cyan-300">Cargando proyectos...</p>;

  if (error)
    return <p className="text-center my-10 text-red-400">{error}</p>;

  return (
    <section
      ref={containerRef}
      id="proyectos"
      className="relative max-w-7xl mx-auto px-6 mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12"
    >
      {/* ===== COLUMNA IZQUIERDA ===== */}
      <div className="lg:sticky lg:top-20 lg:h-[80vh] flex flex-col justify-center relative mt-20">

        {/* TEXTO */}
        {isMobile ? (
          <div>
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
              Mis Proyectos
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Aquí encontrarás una selección de mis trabajos más recientes.
              <span className="block mt-2 text-cyan-300/80">
                Cada proyecto representa un desafío único.
              </span>
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mb-6" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
              Mis Proyectos
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              <ShinyText
                text="Aquí encontrarás una selección de mis trabajos más recientes."
                disabled={false}
                speed={5}
                className="text-xl text-gray-300"
              />
              <span className="block mt-2 text-cyan-300/80">
                Cada proyecto representa un desafío único.
              </span>
            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mb-6" />
          </motion.div>
        )}

        {/* METABALLS → SOLO DESKTOP */}
        {!isMobile && (
          <motion.div
            className="w-full h-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <MetaBalls
              color="#22d3ee"
              cursorBallColor="#22d3ee"
              cursorBallSize={3}
              ballCount={18}
              animationSize={30}
              enableMouseInteraction
              enableTransparency
              hoverSmoothness={0.05}
              clumpFactor={1}
              speed={0.3}
            />
          </motion.div>
        )}
      </div>

      {/* ===== CARDS ===== */}
      <div className="space-y-8 mt-10 lg:mt-40">
        {repos.map((repo, index) => {
          const CardWrapper = isMobile ? "div" : motion.div;

          return (
            <CardWrapper
              key={repo.id}
              className="group relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
              {...(!isMobile && {
                initial: { opacity: 0, y: 35 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-60px" },
                transition: {
                  duration: 0.2,
                  delay: 0.15 + index * 0.01,
                  ease: "easeOut",
                },
              })}
            >
              <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/0 group-hover:border-cyan-400/30 pointer-events-none transition-all duration-500" />

              <h3 className="text-2xl font-bold text-cyan-300 mb-3">
                {repo.name.replace(/-/g, " ")}
              </h3>

              <p className="text-gray-300 mb-6">
                {repo.description || "Descripción no disponible"}
              </p>

              <div className="flex space-x-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-cyan-300 rounded-lg transition border border-gray-700 hover:border-cyan-400/50"
                >
                  <FiGithub className="mr-2" /> Ver código
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center px-4 py-2 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 rounded-lg transition border border-cyan-400/20 hover:border-cyan-400/40"
                  >
                    <FiExternalLink className="mr-2" /> Demo
                  </a>
                )}
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default memo(GitHubRepos);

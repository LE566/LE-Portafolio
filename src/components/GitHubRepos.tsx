import React, { useEffect, useState, useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import MetaBalls from "../Animations/MetaBalls/MetaBalls";
import { motion } from "framer-motion";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
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

  if (loading) return <p className="text-center my-10 text-cyan-300">Cargando proyectos...</p>;
  if (error) return <p className="text-center my-10 text-red-400">{error}</p>;

  return (
    <section
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-6 mb-40 mt-0 grid grid-cols-1 lg:grid-cols-2 gap-12"
      id="proyectos"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 to-black"></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImdyaWQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpIiBzdHJva2Utd2lkdGg9IjAuNSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+Cjwvc3ZnPg==')] opacity-10"
        ></div>
      </div>

      {/* Columna izquierda (sin animación) */}
      <div className="lg:sticky lg:top-20 lg:h-[80vh] flex flex-col justify-center relative mt-20">
        <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
          Mis Proyectos
        </h2>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          <ShinyText
            text="Aquí encontrarás una selección de mis trabajos más recientes."
            disabled={false}
            speed={5}
            className="text-xl text-gray-300 mb-0 leading-relaxed"
          />
          <span className="block mt-0 text-cyan-300/80">Cada proyecto representa un desafío único.</span>
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent" />

        {/* MetaBalls oculto en pantallas pequeñas */}
        <div className="w-100 h-80 mb-0">
          <MetaBalls
            color="#22d3ee"
            cursorBallColor="#22d3ee"
            cursorBallSize={3}
            ballCount={18}
            animationSize={30}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.05}
            clumpFactor={1}
            speed={0.3}
          />
        </div>
      </div>

      {/* Columna derecha (proyectos animados) */}
      <div className="space-y-8 mt-0 lg:mt-45">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            className="group relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            {/* Efecto de borde al hover */}
            <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/0 group-hover:border-cyan-400/30 pointer-events-none transition-all duration-500"></div>

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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GitHubRepos;

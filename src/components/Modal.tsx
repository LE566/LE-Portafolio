import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaTimes } from "react-icons/fa";

type ModalProps = {
  title: string;
  imgSrc: string;
  description: string;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ title, imgSrc, description, closeModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    tl.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" },
      "-=0.2"
    );
  }, { scope: overlayRef });

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: closeModal });
    tl.to(modalRef.current, { opacity: 0, scale: 0.8, y: 20, duration: 0.3, ease: "power2.in" });
    tl.to(overlayRef.current, { opacity: 0, duration: 0.3 }, "-=0.2");
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[100] p-4"
    >
      <div
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        className="bg-white dark:bg-zinc-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-200 dark:border-white/10 relative overflow-hidden"
      >
        {/* Decorative gradient blob */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex justify-between items-start mb-4 relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white pr-8 leading-tight">{title}</h3>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors p-1"
            aria-label="Cerrar modal"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-5 bg-gray-100 dark:bg-black/50 border border-gray-100 dark:border-white/5">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-auto object-contain max-h-[60vh]"
          />
        </div>

        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed relative z-10 text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Modal;

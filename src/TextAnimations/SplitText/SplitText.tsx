/*
  Refactored to use standard GSAP
*/

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
  enableScrollTrigger?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  threshold = 0.1,
  textAlign = "center",
  onLetterAnimationComplete,
  enableScrollTrigger = true,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const letters = el.querySelectorAll(".split-char");
    const startPct = (1 - threshold) * 100;

    // Initial state
    gsap.set(letters, { opacity: 0, y: 40 });

    const animationConfig: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      duration,
      ease,
      stagger: 0.03,
      delay: delay / 1000,
      onComplete: onLetterAnimationComplete,
    };

    if (enableScrollTrigger) {
      animationConfig.scrollTrigger = {
        trigger: el,
        start: `top ${startPct}%`,
        toggleActions: "play none none reverse",
      };
    }

    gsap.to(letters, animationConfig);

  }, { scope: ref, dependencies: [text, delay, duration, ease, threshold, enableScrollTrigger] });

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="split-char inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setProgress(Number(scroll));
        };

        window.addEventListener("scroll", updateProgress);

        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-transparent">
            <div
                className="h-full bg-cyan-400 origin-left"
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    );
};

export default ScrollProgress;

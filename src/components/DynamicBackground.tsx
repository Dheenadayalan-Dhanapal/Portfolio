"use client";

import { useEffect } from "react";
import { useSpring, useMotionValue, motion } from "framer-motion";

export default function DynamicBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 50, stiffness: 100 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute w-[60rem] h-[60rem] rounded-full bg-accent/15 blur-[150px]"
                style={{
                    left: x,
                    top: y,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
    );
}

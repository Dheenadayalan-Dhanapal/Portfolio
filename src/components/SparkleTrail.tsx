"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Sparkle {
    id: number;
    x: number;
    y: number;
}

export default function SparkleTrail() {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        const addSparkle = (e: MouseEvent) => {
            const newSparkle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setSparkles((prev) => [...prev.slice(-15), newSparkle]);
        };

        window.addEventListener("mousemove", addSparkle);
        return () => window.removeEventListener("mousemove", addSparkle);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
            <AnimatePresence>
                {sparkles.map((sparkle) => (
                    <motion.div
                        key={sparkle.id}
                        initial={{ opacity: 1, scale: 0 }}
                        animate={{ opacity: 0, scale: 1.5, rotate: 180 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute w-1 h-1 bg-accent rounded-full shadow-[0_0_10px_#a78bfa]"
                        style={{ left: sparkle.x, top: sparkle.y }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InteractiveBlob() {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const blob = blobRef.current;
        if (!blob) return;

        const xQuick = gsap.quickTo(blob, "x", { duration: 1.2, ease: "power2" });
        const yQuick = gsap.quickTo(blob, "y", { duration: 1.2, ease: "power2" });

        const moveBlob = (e: MouseEvent) => {
            xQuick(e.clientX);
            yQuick(e.clientY);
        };

        window.addEventListener("mousemove", moveBlob);
        return () => window.removeEventListener("mousemove", moveBlob);
    }, []);

    return (
        <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
            <div
                ref={blobRef}
                className="absolute w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
}

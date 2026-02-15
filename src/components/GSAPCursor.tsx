"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GSAPCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // quickTo for performance
        const xQuickCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
        const yQuickCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

        const xQuickFollower = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3" });
        const yQuickFollower = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3" });

        const moveMouse = (e: MouseEvent) => {
            xQuickCursor(e.clientX);
            yQuickCursor(e.clientY);
            xQuickFollower(e.clientX);
            yQuickFollower(e.clientY);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.gsap-hover')) {
                gsap.to(follower, {
                    scale: 4,
                    backgroundColor: "white",
                    mixBlendMode: "difference",
                    duration: 0.3
                });
                gsap.to(cursor, { opacity: 0, duration: 0.2 });
            } else {
                gsap.to(follower, {
                    scale: 1,
                    backgroundColor: "transparent",
                    mixBlendMode: "normal",
                    duration: 0.3
                });
                gsap.to(cursor, { opacity: 1, duration: 0.2 });
            }
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
        </>
    );
}

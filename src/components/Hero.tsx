"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 pb-32 px-4 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center space-y-8 max-w-5xl z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Available for new opportunities
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                    Building the <br />
                    <span className="text-gradient">future</span> of the web.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
                    I'm a computer science student pushing the boundaries of what's possible
                    on the web through engineering excellence and immersive design.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                    <Magnetic>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(167, 139, 250, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="gsap-hover px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-2 transition-all duration-300"
                        >
                            Explore Projects <ArrowRight size={20} />
                        </motion.button>
                    </Magnetic>

                    <div className="flex items-center gap-3">
                        {[Github, Linkedin, Twitter].map((Icon, i) => (
                            <Magnetic key={i}>
                                <motion.a
                                    href="#"
                                    whileHover={{ y: -5, color: "var(--accent)" }}
                                    className="gsap-hover p-4 rounded-full glass-morphism text-muted-foreground transition-all border-white/5 active:scale-90 flex items-center justify-center"
                                >
                                    <Icon size={22} />
                                </motion.a>
                            </Magnetic>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

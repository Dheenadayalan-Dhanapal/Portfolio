"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Globe, Cpu } from "lucide-react";

const skills = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], icon: Globe },
    { name: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "Python"], icon: Cpu },
    { name: "Design", items: ["Figma", "UI/UX", "Adobe CC", "Framer Motion"], icon: Palette },
    { name: "Tools", items: ["Git", "Docker", "VS Code", "Vercel"], icon: Code2 },
];

export default function About() {
    return (
        <section id="about" className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-10"
                >
                    <div className="space-y-6">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">About <span className="text-gradient">Me</span></h2>
                        <p className="text-xl text-muted-foreground/90 leading-relaxed font-medium">
                            I'm a computer science student with an insatiable curiosity for
                            engineering systems that scale and designs that resonate.
                            My approach blends technical rigor with artistic intuition.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            When I'm not architecting web applications, you'll find me
                            exploring the latest in distributed systems, refining my
                            UI craft, or diving into open source.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-12 pt-6">
                        <div>
                            <h4 className="text-5xl font-black text-white tracking-tighter">2+</h4>
                            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-black mt-2">Years of Code</p>
                        </div>
                        <div>
                            <h4 className="text-5xl font-black text-white tracking-tighter">15+</h4>
                            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-black mt-2">Live Deployments</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="p-8 rounded-3xl glass-morphism space-y-6 border-white/5 group"
                        >
                            <div className="p-4 rounded-2xl bg-accent/5 border border-accent/20 w-fit text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
                                <skill.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight">{skill.name}</h3>
                            <ul className="space-y-2.5">
                                {skill.items.map(item => (
                                    <li key={item} className="text-muted-foreground/80 text-sm flex items-center gap-3 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-radial pointer-events-none" />
        </section>
    );
}

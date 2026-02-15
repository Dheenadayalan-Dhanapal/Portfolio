"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "EcoTrack AI",
        description: "An AI-powered sustainability tracker that helps users minimize their carbon footprint using real-time data.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
        tags: ["Next.js", "OpenAI", "Tailwind"],
        github: "#",
        demo: "#"
    },
    {
        title: "Quantum Ledger",
        description: "A secure, decentralized finance platform built on advanced cryptographic principles for modern assets.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
        tags: ["Solidity", "React", "Ethers.js"],
        github: "#",
        demo: "#"
    },
    {
        title: "Nexus Labs",
        description: "A collaborative workspace for developers to build, test, and deploy microservices with ease.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        tags: ["Docker", "Node.js", "GraphQL"],
        github: "#",
        demo: "#"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A selection of my recent work where software engineering meets innovative design.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="glass-morphism rounded-3xl overflow-hidden flex flex-col h-full group hover:border-accent/30 transition-all duration-500 shadow-2xl shadow-black"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-accent/10 transition-opacity duration-700 group-hover:opacity-0 bg-muted/20 backdrop-blur-[2px]" />
                        </div>

                        <div className="p-8 flex flex-col flex-1 space-y-5">
                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-tighter font-black px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-3xl font-black tracking-tight group-hover:text-accent transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground/80 leading-relaxed flex-1 font-medium">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                                <a href={project.github} className="text-muted-foreground hover:text-white transition-all flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                                    <Github size={18} /> Code
                                </a>
                                <a href={project.demo} className="text-muted-foreground hover:text-white transition-all flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

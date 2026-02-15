"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Mail, Home } from "lucide-react";
import Link from "next/link";
import Magnetic from "./Magnetic";

const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-fit">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="glass-morphism flex items-center gap-2 p-1.5 rounded-full px-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] border-white/5"
            >
                {navItems.map((item) => (
                    <Magnetic key={item.name}>
                        <Link
                            href={item.href}
                            className="gsap-hover p-3 text-muted-foreground hover:text-foreground transition-colors relative group block"
                        >
                            <item.icon size={20} />
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-muted text-foreground text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold uppercase tracking-widest border border-white/5">
                                {item.name}
                            </span>
                        </Link>
                    </Magnetic>
                ))}
            </motion.div>
        </nav>
    );
}

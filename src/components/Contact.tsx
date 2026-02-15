"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">Let's <br /> <span className="text-gradient">Connect</span></h2>
                            <p className="text-muted-foreground/80 text-xl max-w-md font-medium leading-relaxed">
                                Whether you have a groundbreaking idea or just want to discuss
                                the future of tech, I'm just a message away.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email", value: "hello@developer.me" },
                                { icon: MapPin, label: "Location", value: "San Francisco, CA" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="p-5 rounded-3xl glass-morphism text-accent border-white/5 shadow-xl transition-all duration-300 group-hover:bg-accent group-hover:text-black">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-black mb-1">{item.label}</p>
                                        <p className="text-xl font-bold tracking-tight text-white">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-morphism p-10 md:p-12 rounded-[2.5rem] space-y-8 border-white/5 shadow-2xl shadow-black/50"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs uppercase tracking-widest font-black text-white/50 px-1">Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-accent focus:bg-white/10 transition-all duration-300 outline-none text-white font-medium" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs uppercase tracking-widest font-black text-white/50 px-1">Email</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-accent focus:bg-white/10 transition-all duration-300 outline-none text-white font-medium" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-xs uppercase tracking-widest font-black text-white/50 px-1">Message</label>
                            <textarea placeholder="Tell me about your vision..." rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-accent focus:bg-white/10 transition-all duration-300 outline-none resize-none text-white font-medium"></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-5 bg-white text-black rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500 shadow-xl shadow-accent/20"
                        >
                            Send Message <Send size={22} />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

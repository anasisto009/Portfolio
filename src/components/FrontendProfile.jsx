import { motion } from 'framer-motion';
import { Layout, Palette, Zap, Monitor, Smartphone, Code, MousePointer2, Box, Instagram, Globe, Code2 } from 'lucide-react';
import { GlassCard, SectionTitle, TextGradient } from './UI';
import zakariaPhoto from '../assets/zakaria.jpg';

const SkillCard = ({ icon: Icon, name, desc }) => (
    <GlassCard className="flex flex-col items-center text-center space-y-3 p-8 border-secondary/5 hover:border-secondary/20">
        <div className="p-4 rounded-full bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </GlassCard>
);

export const FrontendProfile = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-24"
        >
            <section className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-12">
                <div className="relative group">
                    {/* Ambient Glow */}
                    <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-all duration-700 animate-pulse" />

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-secondary/20 glass p-2"
                    >
                        <img
                            src={zakariaPhoto}
                            alt="Zakaria Eddaraz"
                            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-block px-4 py-1.5 glass rounded-full text-xs font-semibold tracking-widest text-[#a855f7] uppercase border-secondary/20"
                    >
                        Creative Frontend Architect
                    </motion.div>
                    <motion.h1
                        className="text-6xl md:text-8xl font-extrabold text-white tracking-tight"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        ZAKARIA <span className="text-secondary">EDDARAZ</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
                        Merging aesthetics with performance to create digital masterpieces.
                    </p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <a
                            href="https://www.instagram.com/zakaria_z16/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass rounded-full text-white hover:text-secondary hover:shadow-[0_0_20px_-5px_#a855f7] transition-all duration-300"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            </section>

            <section>
                <SectionTitle>Technical Expertise</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCard
                        icon={Layout}
                        name="React & Next.js"
                        desc="Building high-performance, SEO-friendly applications with modern React patterns."
                    />
                    <SkillCard
                        icon={Box}
                        name="Three.js & WebGL"
                        desc="Creating immersive 3D web experiences with custom shaders and physics."
                    />
                    <SkillCard
                        icon={Palette}
                        name="Framer Motion"
                        desc="Crafting fluid animations and complex gesture-based interactions."
                    />
                    <SkillCard
                        icon={Code}
                        name="Modern CSS"
                        desc="Mastering Tailwind, CSS modules, and custom design systems."
                    />
                </div>
            </section>

            <section>
                <SectionTitle>Select Projects</SectionTitle>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <GlassCard className="group relative overflow-hidden p-0 border-accent/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 space-y-4">
                            <div className="flex justify-between items-start">
                                <Globe className="text-accent w-10 h-10" />
                                <span className="text-xs font-mono text-slate-500">2024 // Open Source</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Fluid Interaction Systems</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Physics-based animations and custom gesture handling for uniquely responsive user interfaces.
                            </p>
                            <div className="flex gap-2">
                                {['Framer Motion', 'TypeScript', 'Tailwind', 'Vite'].map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-1 glass rounded-md text-slate-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard className="group relative overflow-hidden p-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 space-y-4">
                            <div className="flex justify-between items-start">
                                <Zap className="text-secondary w-10 h-10" />
                                <span className="text-xs font-mono text-slate-500">2024 // Game</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Jeux 4 en Ligne (Connect 4)</h3>
                            <p className="text-slate-400 leading-relaxed">
                                A strategic Connect Four game implementation with AI opponent, game logic, and interactive UI for turn-based gameplay.
                            </p>
                            <div className="flex gap-2">
                                {['Python', 'Game Logic', 'AI', 'OOP'].map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-1 glass rounded-md text-slate-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard className="group relative overflow-hidden p-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 space-y-4">
                            <div className="flex justify-between items-start">
                                <Code2 className="text-secondary w-10 h-10" />
                                <span className="text-xs font-mono text-slate-500">2025 // Game</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Chess Engine</h3>
                            <p className="text-slate-400 leading-relaxed">
                                A high-performance chess game engine built in C++ with minimax algorithm, move validation, and interactive gameplay for competitive chess analysis.
                            </p>
                            <div className="flex gap-2">
                                {['C++', 'Game Logic', 'Algorithms', 'AI'].map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-1 glass rounded-md text-slate-300">{tag}</span>
                                ))}
                            </div>
                            <a
                                href="https://your-chess-game-url.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-secondary hover:text-secondary/80 font-semibold text-sm mt-2 transition-colors"
                            >
                                Play Game → 
                            </a>
                        </div>
                    </GlassCard>
                </div>
            </section>
        </motion.div>
    );
};

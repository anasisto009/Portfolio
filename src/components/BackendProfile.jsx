import { motion } from 'framer-motion';
import { Database, Server, Code2, Globe, Cpu, Layers, ShieldCheck, Zap, Instagram } from 'lucide-react';
import { GlassCard, SectionTitle, TextGradient } from './UI';
import anasPhoto from '../assets/anas.jpg';

const SkillCard = ({ icon: Icon, name, desc }) => (
    <GlassCard className="flex flex-col items-center text-center space-y-3 p-8 border-primary/5 hover:border-primary/20">
        <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </GlassCard>
);

export const BackendProfile = () => {
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
                    <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700 animate-pulse" />

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/20 glass p-2"
                    >
                        <img
                            src={anasPhoto}
                            alt="Anas Elmardi"
                            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-block px-4 py-1.5 glass rounded-full text-xs font-semibold tracking-widest text-[#6366f1] uppercase border-primary/20"
                    >
                        Junior Backend Architect
                    </motion.div>
                    <motion.h1
                        className="text-6xl md:text-8xl font-extrabold text-white tracking-tight"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        ANAS <span className="text-primary">ELMARDI</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
                        Building high-performance, distributed systems that scale to millions.
                    </p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <a
                            href="https://www.instagram.com/_anasnus___/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass rounded-full text-white hover:text-primary hover:shadow-[0_0_20px_-5px_#6366f1] transition-all duration-300"
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
                        icon={Server}
                        name="Node.js & Go"
                        desc="Expertise in asynchronous runtimes and high-concurrency architectures."
                    />
                    <SkillCard
                        icon={Database}
                        name="Distributed DBs"
                        desc="Optimizing PostgreSQL, MongoDB, and Redis Cluster for low latency."
                    />
                    <SkillCard
                        icon={Cpu}
                        name="Microservices"
                        desc="Designing resilient systems with gRPC, RabbitMQ, and Kubernetes."
                    />
                    <SkillCard
                        icon={ShieldCheck}
                        name="System Security"
                        desc="Implementing OAuth2, JWT, and robust data encryption standards."
                    />
                </div>
            </section>

            <section>
                <SectionTitle>Select Projects</SectionTitle>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <a href="https://padel-finder-web.vercel.app" target="_blank" rel="noopener noreferrer" className="no-underline">
                        <GlassCard parallax={true} className="group relative overflow-hidden p-0 cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-8 space-y-4">
                                <div className="flex justify-between items-start">
                                    <Globe className="text-primary w-10 h-10" />
                                    <span className="text-xs font-mono text-slate-500">2025 // Live</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Padel-Finder</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    A full-stack platform for discovering and booking padel courts. Features real-time availability, user authentication, and booking management system.
                                </p>
                                <div className="flex gap-2">
                                    {['Node.js', 'MongoDB', 'React', 'Express'].map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-1 glass rounded-md text-slate-300">{tag}</span>
                                    ))}
                                </div>
                                <span className="inline-block text-primary hover:text-primary/80 font-semibold text-sm mt-2 transition-colors">
                                    View Live → 
                                </span>
                            </div>
                        </GlassCard>
                    </a>

                    <GlassCard className="group relative overflow-hidden p-0 border-secondary/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 space-y-4">
                            <div className="flex justify-between items-start">
                                <Zap className="text-secondary w-10 h-10" />
                                <span className="text-xs font-mono text-slate-500">2024 // Game</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Jeux 4 en Ligne (Connect 4)</h3>
                            <p className="text-slate-400 leading-relaxed">
                                A strategic Connect Four game implementation in Python with AI opponent, game logic, and interactive UI for turn-based gameplay.
                            </p>
                            <div className="flex gap-2">
                                {['Python', 'Game Logic', 'AI', 'OOP'].map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-1 glass rounded-md text-slate-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard className="group relative overflow-hidden p-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 space-y-4">
                            <div className="flex justify-between items-start">
                                <Zap className="text-primary w-10 h-10" />
                                <span className="text-xs font-mono text-slate-500">2025 // Production</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Hyper-Scale Auth Service</h3>
                            <p className="text-slate-400 leading-relaxed">
                                A centralized identity provider handling 2M+ sessions daily with Redis-backed session management and multi-region synchronization.
                            </p>
                            <div className="flex gap-2">
                                {['Go', 'Redis', 'PostgreSQL', 'Docker'].map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-1 glass rounded-md text-slate-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard className="group relative overflow-hidden p-0 border-secondary/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 space-y-4">
                            <div className="flex justify-between items-start">
                                <Globe className="text-secondary w-10 h-10" />
                                <span className="text-xs font-mono text-slate-500">2024 // Open Source</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Distributed Logging Engine</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Built a high-throughput event processing pipeline using Kafka and Elasticsearch for real-time monitoring of microservices.
                            </p>
                            <div className="flex gap-2">
                                {['Node.js', 'Kafka', 'Elasticsearch', 'AWS'].map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-1 glass rounded-md text-slate-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard className="group relative overflow-hidden p-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 space-y-4">
                            <div className="flex justify-between items-start">
                                <Code2 className="text-primary w-10 h-10" />
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
                                className="inline-block text-primary hover:text-primary/80 font-semibold text-sm mt-2 transition-colors"
                            >
                                Play Game → 
                            </a>
                        </div>
                    </GlassCard>
                </div>
            </section>

            <section>
                <SectionTitle> Learning</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <GlassCard className="p-8 space-y-4 border-primary/10 hover:border-primary/30">
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="text-primary w-8 h-8 flex-shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-white">Google Cloud Cybersecurity</h3>
                                <p className="text-sm text-slate-400">Professional certification covering cloud security architecture, identity management, and threat detection.</p>
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard className="p-8 space-y-4 border-secondary/10 hover:border-secondary/30">
                        <div className="flex items-start gap-4">
                            <Layers className="text-secondary w-8 h-8 flex-shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-white">Google Cloud Data Analytics</h3>
                                <p className="text-sm text-slate-400">Advanced training in BigQuery, data pipelines, and analytics solutions on Google Cloud Platform.</p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </section>
        </motion.div>
    );
};


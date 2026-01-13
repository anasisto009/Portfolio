import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { BackendProfile } from './components/BackendProfile';
import { FrontendProfile } from './components/FrontendProfile';
import Typewriter from './components/Typewriter';
import { Github, Linkedin } from 'lucide-react';
import { MusicPlayer } from './components/MusicPlayer';
import { Magnetic } from './components/UI';

function App() {
  const [activeTab, setActiveTab] = useState('backend');
  const [scrolled, setScrolled] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(splashTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-slate-300 font-sans selection:bg-primary/30">
      <BackgroundCanvas />

      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase overflow-hidden">
                {"STUDENTS OF".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.03, duration: 0.5 }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary"
                >
                  ESISA
                </motion.span>
              </h1>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#030014]/80 backdrop-blur-md' : 'py-8'}`}>
              <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <Magnetic strength={0.2}>
                  <div className="text-xl font-black text-white cursor-pointer">
                    A<span className="text-primary">&</span>Z<span className="text-slate-500">.</span>
                  </div>
                </Magnetic>

                <div className="glass px-1 py-1 rounded-full flex items-center border-white/5">
                  <button
                    onClick={() => setActiveTab('backend')}
                    className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 relative ${activeTab === 'backend' ? 'text-white' : 'text-slate-500 hover:text-white'}`}
                  >
                    {activeTab === 'backend' && (
                      <motion.div layoutId="nav-tab" className="absolute inset-0 bg-primary/20 rounded-full border border-primary/30 -z-10" />
                    )}
                    Backend
                  </button>
                  <button
                    onClick={() => setActiveTab('frontend')}
                    className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 relative ${activeTab === 'frontend' ? 'text-white' : 'text-slate-500 hover:text-white'}`}
                  >
                    {activeTab === 'frontend' && (
                      <motion.div layoutId="nav-tab" className="absolute inset-0 bg-secondary/20 rounded-full border border-secondary/30 -z-10" />
                    )}
                    Frontend
                  </button>
                </div>
              </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4 uppercase">
                  STUDENT OF <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">ESISA</span>
                </h2>
                <div className="h-10">
                  <Typewriter phrases={
                    activeTab === 'backend'
                      ? ["Distributed Systems", "Cloud Infrastructure", "API Architecture"]
                      : ["Immersive UI", "3D Experiences", "Fluid Animations"]
                  } />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'backend' ? (
                  <BackendProfile key="backend" />
                ) : (
                  <FrontendProfile key="frontend" />
                )}
              </AnimatePresence>
            </main>

            <footer className="py-20 border-t border-white/5 text-center space-y-10">
              <div className="flex justify-center space-x-8">
                <a href="https://github.com/anasisto009" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/anas-elmardi-02a37b338" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="space-y-4">
                <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase">
                  ANAS ELMARDI & ZAKARIA EDDARAZ &copy; 2026
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer />
    </div>
  );
}

export default App;

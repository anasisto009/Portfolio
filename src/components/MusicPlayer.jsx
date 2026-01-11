import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward } from 'lucide-react';

const SONGS = [
    {
        name: "Beauty & Beat",
        src: "/src/assets/ytmp3free.cc_justin-bieber-beauty-and-a-beat-slowed-reverb-youtubemp3free.org.mp3",
        start: 8,
        end: 160
    }
];

export const MusicPlayer = () => {
    const [songIndex, setSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const sourceRef = useRef(null);

    const currentSong = SONGS[songIndex];

    useEffect(() => {
        // Random song on mount
        const randomIndex = Math.floor(Math.random() * SONGS.length);
        setSongIndex(randomIndex);
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = currentSong.start;
            if (isPlaying) audio.play().catch(() => setIsPlaying(false));
        }
    }, [songIndex]);

    const initAudioContext = () => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            analyserRef.current = audioContextRef.current.createAnalyser();
            sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
            sourceRef.current.connect(analyserRef.current);
            analyserRef.current.connect(audioContextRef.current.destination);
            analyserRef.current.fftSize = 64;
        }
    };

    const drawVisualizer = () => {
        if (!canvasRef.current || !analyserRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const animate = () => {
            animationRef.current = requestAnimationFrame(animate);
            analyserRef.current.getByteFrequencyData(dataArray);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const barWidth = (canvas.width / bufferLength) * 2.5;
            let x = 0;
            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i] / 2;
                ctx.fillStyle = `rgba(99, 102, 241, ${barHeight / 100})`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                x += barWidth + 2;
            }
        };
        animate();
    };

    const togglePlay = () => {
        initAudioContext();
        if (isPlaying) {
            audioRef.current.pause();
            cancelAnimationFrame(animationRef.current);
        } else {
            audioRef.current.play().catch(console.error);
            drawVisualizer();
            if (audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }
        }
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        setSongIndex((prev) => (prev + 1) % SONGS.length);
    };

    const handleTimeUpdate = () => {
        const time = audioRef.current.currentTime;
        if (time >= currentSong.end) {
            audioRef.current.currentTime = currentSong.start;
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[60] flex items-center space-x-3">
            <AnimatePresence>
                {isPlaying && SONGS.length > 1 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="glass p-2 rounded-full border-white/10 flex items-center"
                    >
                        <button
                            onClick={nextSong}
                            className="p-1 hover:text-primary transition-colors text-slate-400"
                            title="Switch Song"
                        >
                            <SkipForward size={16} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative group">
                <div className={`absolute -inset-2 rounded-full blur-xl transition-opacity duration-1000 ${isPlaying ? 'bg-primary/20 opacity-100' : 'bg-transparent opacity-0'}`} />
                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full glass border transition-all duration-500 overflow-hidden ${isPlaying ? 'border-primary/40' : 'border-white/10'}`}
                >
                    <canvas ref={canvasRef} width={56} height={56} className="absolute inset-0 opacity-40 pointer-events-none" />
                    <AnimatePresence mode="wait">
                        {isPlaying ? (
                            <motion.div key="pause" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <Pause className="w-5 h-5 text-primary" fill="currentColor" />
                            </motion.div>
                        ) : (
                            <motion.div key="play" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <Play className="w-5 h-5 text-slate-400" fill="currentColor" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            <audio
                ref={audioRef}
                src={currentSong.src}
                onTimeUpdate={handleTimeUpdate}
            />
        </div>
    );
};

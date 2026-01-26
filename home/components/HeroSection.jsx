import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HeroSection() {
    const [currentWord, setCurrentWord] = useState(0);
    const words = ["THALARI", "KOUSHIK"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent">
            {/* Main Name - Rotating Text */}
            <div className="flex-1 flex items-center justify-center w-full px-4">
                <div className="relative" style={{ minHeight: '200px' }}>
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentWord}
                            className="text-white font-black tracking-tighter leading-none text-center select-none uppercase"
                            initial={{ opacity: 0, y: 50, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, y: -50, rotateX: 90 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            style={{
                                fontSize: 'clamp(2.5rem, 15vw, 18rem)',
                                fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
                                letterSpacing: '-0.04em',
                            }}
                        >
                            {words[currentWord]}
                        </motion.h1>
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Info Cards */}
            <motion.div
                className="w-full px-8 pb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 text-center md:text-left">
                    {/* Location */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold tracking-wide uppercase">Kurnool, Andhra Pradesh</p>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">India</p>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-sm font-semibold tracking-wide uppercase">Available Worldwide</p>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Remote</p>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-white text-sm font-semibold tracking-wide uppercase">AI/Agentic Workflow</p>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Artist</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

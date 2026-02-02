import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';

export function HeroSection() {
    const [currentWord, setCurrentWord] = React.useState(0);
    const words = ["THALARI", "KOUSHIK"];
    const sectionRef = useRef(null);
    const nameRef = useRef(null);
    const infoCardsRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // GSAP animations on mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate info cards with stagger
            if (infoCardsRef.current) {
                const cards = infoCardsRef.current.querySelectorAll('.info-card');
                gsap.fromTo(
                    cards,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        delay: 0.8,
                    }
                );
            }

            // Parallax effect on scroll for the name
            if (nameRef.current) {
                gsap.to(nameRef.current, {
                    y: 100,
                    opacity: 0.3,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black">

            {/* Main Name - Rotating Text */}
            <div ref={nameRef} className="flex-1 flex items-center justify-center w-full px-4 relative z-10">
                {/* Screen-reader accessible H1 for SEO */}
                <h1 className="sr-only">Thalari Koushik - Aspiring Product Manager & AI Specialist from Kurnool, Andhra Pradesh, India</h1>

                <div className="relative" style={{ minHeight: '200px' }}>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentWord}
                            role="presentation"
                            aria-hidden="true"
                            className="block text-white font-black tracking-tighter leading-none text-center select-none uppercase"
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
                                textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            {words[currentWord]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Info Cards */}
            <div
                ref={infoCardsRef}
                className="w-full px-8 pb-12 relative z-10"
            >
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 text-center md:text-left">
                    {/* Location - with Maps hover */}
                    <a
                        href="https://maps.google.com/?q=Kurnool,Andhra+Pradesh,India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-card group flex flex-col items-center md:items-start gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                    >
                        <div className="relative w-6 h-6">
                            {/* Default location icon */}
                            <div className="absolute inset-0 rounded-full bg-green-500 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-0">
                                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {/* Google Maps icon on hover */}
                            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
                                    <circle cx="12" cy="9" r="2.5" fill="#fff" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold tracking-wide uppercase group-hover:text-green-400 transition-colors">Kurnool, Andhra Pradesh</p>
                            <p className="text-gray-500 text-xs uppercase tracking-wider group-hover:text-gray-400 transition-colors">India • Click to view on Maps</p>
                        </div>
                    </a>

                    {/* Availability */}
                    <div className="info-card flex flex-col items-center gap-2">
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
                    <div className="info-card flex flex-col items-center md:items-end gap-2">
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
            </div>
        </section>
    );
}

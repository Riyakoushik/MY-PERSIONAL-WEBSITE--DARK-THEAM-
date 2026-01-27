"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHoveringProject, setIsHoveringProject] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const projectLink = target.closest('[data-cursor="project-link"]');
            if (projectLink) {
                setIsHoveringProject(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const projectLink = target.closest('[data-cursor="project-link"]');
            if (projectLink) {
                setIsHoveringProject(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <AnimatePresence>
            {isHoveringProject && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="fixed z-[9999] pointer-events-none hidden md:block"
                    style={{
                        left: mousePosition.x + 20,
                        top: mousePosition.y + 20,
                    }}
                >
                    <div className="bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-xl">
                        Links will be updated soon
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

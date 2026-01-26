"use client";

import { useEffect, useState } from "react";

export const FlickeringFooter = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const socialLinks = [
        { name: "GitHub", url: "https://github.com" },
        { name: "LinkedIn", url: "https://linkedin.com" },
        { name: "Twitter", url: "https://twitter.com" },
        { name: "Email", url: "mailto:hello@example.com" },
    ];

    return (
        <footer id="footer" className="w-full bg-black overflow-hidden">
            {/* Main Footer Content */}
            <div className="relative bg-white text-black">
                {/* Top Section with Info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 sm:px-10 pt-8 pb-4 gap-4">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider">Thalari Koushik</p>
                        <p className="text-xs opacity-70">AI/Agentic Workflow Artist</p>
                    </div>
                    <div className="text-left sm:text-right">
                        <p className="text-xs uppercase tracking-wider opacity-70">Contact</p>
                        <p className="text-sm font-bold">koushiktk@example.com</p>
                    </div>
                </div>

                {/* Social Links Row */}
                <div className="flex flex-wrap justify-between items-center px-6 sm:px-10 py-4 border-t border-black/10">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:opacity-70 transition-opacity py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Large Name Typography */}
                <div className="relative overflow-hidden">
                    <h2
                        className="font-black uppercase tracking-tighter leading-none text-black/90 select-none"
                        style={{
                            fontSize: isMobile ? 'clamp(3rem, 15vw, 6rem)' : 'clamp(8rem, 18vw, 20rem)',
                            lineHeight: '0.85',
                            letterSpacing: '-0.04em',
                        }}
                    >
                        KOUSHIK
                    </h2>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 py-4 border-t border-black/10 gap-2">
                    <p className="text-xs opacity-70">
                        All rights reserved. {new Date().getFullYear()}
                    </p>
                    <p className="text-xs opacity-70">
                        Built with ❤️ by Koushik
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FlickeringFooter;

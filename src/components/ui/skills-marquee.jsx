"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap-config";

const SkillsMarquee = () => {
    const containerRef = useRef(null);
    const marqueeRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const skills = [
        "PRODUCT MANAGEMENT",
        "AGILE & SCRUM",
        "GO-TO-MARKET STRATEGY",
        "USER RESEARCH",
        "A/B TESTING",
        "ANALYTICS",
        "AI-AGENTS",
        "DESIGN THINKING",
        "LEAN STARTUP & MVP",
        "OKRs",
        "STAKEHOLDER MANAGEMENT",
        "JOBS-TO-BE-DONE",
        "USABILITY TESTING",
        "SQL",
        "NOTION",
        "SPRINT PLANNING",
        "ROADMAP PLANNING",
        "FUNNEL ANALYSIS",
    ];

    const repeatedSkills = [...skills, ...skills, ...skills, ...skills];

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        // Calculate the width of one set of skills
        const skillSetWidth = marquee.scrollWidth / 4;

        // Create GSAP infinite scroll animation
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(marquee, {
            x: -skillSetWidth,
            duration: 25,
            ease: "none",
        });

        // Speed control on hover
        const handleMouseEnter = () => {
            gsap.to(tl, { timeScale: 0.3, duration: 0.5 });
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            gsap.to(tl, { timeScale: 1, duration: 0.5 });
            setIsHovered(false);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            tl.kill();
            if (container) {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-6 bg-black overflow-hidden border-y border-zinc-800 cursor-default"
        >
            <div className="relative overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap will-change-transform"
                >
                    {repeatedSkills.map((skill, index) => (
                        <span
                            key={index}
                            className={`inline-flex items-center text-2xl md:text-4xl font-black text-white mx-6 tracking-tight transition-colors duration-300 ${isHovered ? 'text-amber-400' : ''
                                }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            {skill}
                            <span className={`mx-6 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-orange-500'}`}>•</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsMarquee;

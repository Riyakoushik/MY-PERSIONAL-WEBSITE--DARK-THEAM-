"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
    delay?: number;
    duration?: number;
    stagger?: number;
    scrub?: boolean;
}

const animations = {
    fadeUp: {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0 },
    },
    fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
    slideLeft: {
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
    },
    slideRight: {
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
    },
    scale: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
    },
};

export function ScrollReveal({
    children,
    className = "",
    animation = "fadeUp",
    delay = 0,
    duration = 0.8,
    stagger = 0,
    scrub = false,
}: ScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const el = containerRef.current;
            if (!el) return;

            const anim = animations[animation];
            const targets = stagger > 0 ? el.children : el;

            gsap.fromTo(targets, anim.from, {
                ...anim.to,
                duration,
                delay,
                stagger: stagger > 0 ? stagger : undefined,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    end: "bottom 15%",
                    scrub: scrub ? 1 : false,
                    toggleActions: "play none none reverse",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [animation, delay, duration, stagger, scrub]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}

export default ScrollReveal;

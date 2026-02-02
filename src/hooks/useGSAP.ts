"use client";

import { useEffect, useRef, RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

interface UseMagneticOptions {
    strength?: number;
    ease?: number;
}

/**
 * Hook to create magnetic hover effect on an element
 */
export function useMagnetic<T extends HTMLElement>(
    options: UseMagneticOptions = {}
): RefObject<T | null> {
    const { strength = 0.3, ease = 0.1 } = options;
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let bounds: DOMRect;

        const handleMouseMove = (e: MouseEvent) => {
            bounds = el.getBoundingClientRect();
            const x = (e.clientX - bounds.left - bounds.width / 2) * strength;
            const y = (e.clientY - bounds.top - bounds.height / 2) * strength;

            gsap.to(el, {
                x,
                y,
                duration: ease,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "elastic.out(1, 0.3)",
            });
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength, ease]);

    return ref;
}

/**
 * Hook to trigger text split animation on an element
 */
export function useTextReveal<T extends HTMLElement>(): RefObject<T | null> {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Split text into characters
        const text = el.textContent || "";
        el.innerHTML = text
            .split("")
            .map((char) =>
                char === " "
                    ? `<span class="inline-block">&nbsp;</span>`
                    : `<span class="inline-block opacity-0 translate-y-[50px]">${char}</span>`
            )
            .join("");

        const chars = el.querySelectorAll("span");

        gsap.to(chars, {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.2,
        });
    }, []);

    return ref;
}

/**
 * Hook for parallax effect on scroll
 */
export function useParallax<T extends HTMLElement>(
    speed: number = 0.5
): RefObject<T | null> {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.to(el, {
                y: () => window.innerHeight * speed * 0.5,
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, [speed]);

    return ref;
}

export { gsap, ScrollTrigger };

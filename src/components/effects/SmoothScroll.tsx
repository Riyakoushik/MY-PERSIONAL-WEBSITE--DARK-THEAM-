"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "@/lib/gsap-config";

interface SmoothScrollProps {
    children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis smooth scroll
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
        });

        // Integrate Lenis with GSAP ticker for smooth animations
        const update = (time: number) => {
            lenisRef.current?.raf(time * 1000);
        };

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenisRef.current?.destroy();
        };
    }, []);

    return <>{children}</>;
}

export default SmoothScroll;

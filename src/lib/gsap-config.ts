// GSAP Configuration and Plugin Registration
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Configure GSAP defaults for consistent animations
gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
});

// ScrollTrigger defaults
ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
    start: "top 80%",
    end: "bottom 20%",
});

export { gsap, ScrollTrigger };

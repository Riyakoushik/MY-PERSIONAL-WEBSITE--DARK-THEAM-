"use client";

import { useEffect, useRef } from "react";

export function StarBackground({
    particleCount = 200,
    speed = 0.5,
    opacity = 1,
    minSize = 2,
    maxSize = 5,
    colors = ["#f59e0b", "#fbbf24", "#d97706", "#b45309", "#fcd34d", "#ffffff"]
}) {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = [];
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * (maxSize - minSize) + minSize,
                    speedX: (Math.random() - 0.5) * speed,
                    speedY: (Math.random() - 0.5) * speed,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    alpha: Math.random() * 0.5 + 0.3,
                    pulse: Math.random() * Math.PI * 2,
                    pulseSpeed: Math.random() * 0.02 + 0.01
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Pulsing effect
                particle.pulse += particle.pulseSpeed;
                const pulseAlpha = particle.alpha * (0.5 + Math.sin(particle.pulse) * 0.5);

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = pulseAlpha * opacity;
                ctx.fill();
                ctx.globalAlpha = 1;

                // Draw glow effect for larger particles
                if (particle.size > 2) {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
                    const gradient = ctx.createRadialGradient(
                        particle.x, particle.y, 0,
                        particle.x, particle.y, particle.size * 2
                    );
                    gradient.addColorStop(0, particle.color);
                    gradient.addColorStop(1, "transparent");
                    ctx.fillStyle = gradient;
                    ctx.globalAlpha = pulseAlpha * 0.3 * opacity;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        initParticles();
        animate();

        // Handle resize
        const handleResize = () => {
            resizeCanvas();
            initParticles();
        };

        window.addEventListener("resize", handleResize);

        // Re-calculate height on scroll (for dynamic content)
        let resizeTimeout;
        const handleScroll = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newHeight = document.documentElement.scrollHeight;
                if (canvas.height !== newHeight) {
                    canvas.height = newHeight;
                }
            }, 100);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(resizeTimeout);
        };
    }, [particleCount, speed, opacity, minSize, maxSize, colors]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex: 0,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}
        />
    );
}

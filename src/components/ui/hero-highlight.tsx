"use client";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
    children,
    className = "",
    containerClassName = "",
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const dotPattern = (color: string) => ({
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: '16px 16px',
    });

    return (
        <div
            className={`relative min-h-screen flex items-center bg-black justify-center w-full group ${containerClassName}`}
            onMouseMove={handleMouseMove}
        >
            {/* Dark dot pattern background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={dotPattern('rgb(64 64 64)')} // neutral-700
            />

            {/* Mouse-following highlight effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    ...dotPattern('rgb(245 158 11)'), // amber-500
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

            <div className={`relative z-20 ${className}`}>{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={`relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 ${className}`}
        >
            {children}
        </motion.span>
    );
};

export default HeroHighlight;

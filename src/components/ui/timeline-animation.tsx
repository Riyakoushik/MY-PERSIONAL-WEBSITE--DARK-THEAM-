"use client";

import { motion, useInView, Variants } from "framer-motion";
import React, { RefObject, useRef } from "react";

interface TimelineContentProps {
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    animationNum: number;
    timelineRef: RefObject<HTMLDivElement>;
    customVariants?: Variants;
    className?: string;
}

export function TimelineContent({
    children,
    as: Component = "div",
    animationNum,
    timelineRef,
    customVariants,
    className = "",
}: TimelineContentProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

    const defaultVariants: Variants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: 30,
            opacity: 0,
        },
    };

    const variants = customVariants || defaultVariants;

    const MotionComponent = motion(Component as any);

    return (
        <MotionComponent
            ref={ref}
            custom={animationNum}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </MotionComponent>
    );
}

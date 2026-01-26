"use client";

import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";

// Simple cn utility function
const cn = (...classes) => classes.filter(Boolean).join(" ");

export function ContainerTextFlip({
    words = ["better", "modern", "beautiful", "awesome"],
    interval = 3000,
    className = "",
    textClassName = "",
    animationDuration = 700,
}) {
    const id = useId();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [width, setWidth] = useState(100);
    const textRef = React.useRef(null);

    const updateWidthForWord = () => {
        if (textRef.current) {
            // Add some padding to the text width (30px on each side)
            const textWidth = textRef.current.scrollWidth + 30;
            setWidth(textWidth);
        }
    };

    useEffect(() => {
        // Update width whenever the word changes
        updateWidthForWord();
    }, [currentWordIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [words, interval]);

    return (
        <motion.span
            layout
            layoutId={`words-here-${id}`}
            animate={{ width }}
            transition={{ duration: animationDuration / 2000 }}
            className={cn(
                "relative inline-block rounded-lg px-4 py-2 text-center font-bold",
                "bg-gradient-to-b from-amber-400 to-orange-500",
                "shadow-lg",
                className,
            )}
            key={words[currentWordIndex]}
        >
            <motion.div
                transition={{
                    duration: animationDuration / 1000,
                    ease: "easeInOut",
                }}
                className={cn("inline-block", textClassName)}
                ref={textRef}
                layoutId={`word-div-${words[currentWordIndex]}-${id}`}
            >
                <motion.div className="inline-block">
                    {words[currentWordIndex].split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity: 0,
                                filter: "blur(10px)",
                            }}
                            animate={{
                                opacity: 1,
                                filter: "blur(0px)",
                            }}
                            transition={{
                                delay: index * 0.02,
                            }}
                            className="text-white"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.span>
    );
}

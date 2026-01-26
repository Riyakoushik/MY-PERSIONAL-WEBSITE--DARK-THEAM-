"use client";

import { TimelineContent } from "./timeline-animation";
import { useRef } from "react";

export default function AboutSection2() {
    const heroRef = useRef<HTMLDivElement>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.3,
                duration: 0.7,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: 40,
            opacity: 0,
        },
    };

    const textVariants = {
        visible: (i: number) => ({
            filter: "blur(0px)",
            opacity: 1,
            transition: {
                delay: i * 0.25,
                duration: 0.7,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            opacity: 0,
        },
    };

    return (
        <div className="flex-1" ref={heroRef}>
            <TimelineContent
                as="h1"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-4xl text-2xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] font-semibold text-white mb-8"
            >
                I'm{" "}
                <TimelineContent
                    as="span"
                    animationNum={1}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                    className="text-amber-400 border-2 border-amber-500 inline-block xl:h-[1.2em] border-dotted px-2 rounded-md"
                >
                    rethinking
                </TimelineContent>{" "}
                how AI can solve real problems. My goal is to continually push boundaries and{" "}
                <TimelineContent
                    as="span"
                    animationNum={2}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                    className="text-cyan-400 border-2 border-cyan-500 inline-block xl:h-[1.2em] border-dotted px-2 rounded-md"
                >
                    challenge
                </TimelineContent>{" "}
                how things could{" "}
                <TimelineContent
                    as="span"
                    animationNum={3}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                    className="text-emerald-400 border-2 border-emerald-500 inline-block xl:h-[1.2em] border-dotted px-2 rounded-md"
                >
                    work for you.
                </TimelineContent>
            </TimelineContent>
        </div>
    );
}

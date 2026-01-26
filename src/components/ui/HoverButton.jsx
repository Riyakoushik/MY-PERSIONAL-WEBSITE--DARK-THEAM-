"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

const HoverButton = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        const buttonRef = React.useRef(null);
        const [isListening, setIsListening] = React.useState(false);
        const [circles, setCircles] = React.useState([]);
        const lastAddedRef = React.useRef(0);

        const createCircle = React.useCallback((x, y) => {
            const buttonWidth = buttonRef.current?.offsetWidth || 0;
            const xPos = x / buttonWidth;
            const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${xPos * 100
                }%)`;

            setCircles((prev) => [
                ...prev,
                { id: Date.now(), x, y, color, fadeState: null },
            ]);
        }, []);

        const handlePointerMove = React.useCallback(
            (event) => {
                if (!isListening) return;

                const currentTime = Date.now();
                if (currentTime - lastAddedRef.current > 100) {
                    lastAddedRef.current = currentTime;
                    const rect = event.currentTarget.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    createCircle(x, y);
                }
            },
            [isListening, createCircle]
        );

        const handlePointerEnter = React.useCallback(() => {
            setIsListening(true);
        }, []);

        const handlePointerLeave = React.useCallback(() => {
            setIsListening(false);
        }, []);

        React.useEffect(() => {
            circles.forEach((circle) => {
                if (!circle.fadeState) {
                    setTimeout(() => {
                        setCircles((prev) =>
                            prev.map((c) =>
                                c.id === circle.id ? { ...c, fadeState: "in" } : c
                            )
                        );
                    }, 0);

                    setTimeout(() => {
                        setCircles((prev) =>
                            prev.map((c) =>
                                c.id === circle.id ? { ...c, fadeState: "out" } : c
                            )
                        );
                    }, 1000);

                    setTimeout(() => {
                        setCircles((prev) => prev.filter((c) => c.id !== circle.id));
                    }, 2200);
                }
            });
        }, [circles]);

        return (
            <button
                ref={buttonRef}
                className={cn(
                    "relative isolate px-6 py-3 rounded-xl",
                    "text-white font-semibold text-sm",
                    "backdrop-blur-lg bg-white/10",
                    "cursor-pointer overflow-hidden",
                    "border border-white/20",
                    "transition-all duration-300",
                    "hover:bg-white/20 hover:scale-105",
                    "active:scale-95",
                    "before:content-[''] before:absolute before:inset-0",
                    "before:rounded-[inherit] before:pointer-events-none",
                    "before:z-[1]",
                    "before:shadow-[inset_0_0_0_1px_rgba(168,85,247,0.2),inset_0_0_16px_0_rgba(168,85,247,0.1),inset_0_-3px_12px_0_rgba(168,85,247,0.15)]",
                    "before:transition-transform before:duration-300",
                    "active:before:scale-[0.975]",
                    className
                )}
                onPointerMove={handlePointerMove}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                {...props}
                style={{
                    "--circle-start": "#a855f7",
                    "--circle-end": "#ec4899",
                    ...props.style,
                }}
            >
                {circles.map(({ id, x, y, color, fadeState }) => (
                    <div
                        key={id}
                        className={cn(
                            "absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full",
                            "blur-xl pointer-events-none z-[-1] transition-opacity duration-300",
                            fadeState === "in" && "opacity-80",
                            fadeState === "out" && "opacity-0 duration-[1.2s]",
                            !fadeState && "opacity-0"
                        )}
                        style={{
                            left: x,
                            top: y,
                            background: color,
                        }}
                    />
                ))}
                <span className="relative z-10">{children}</span>
            </button>
        );
    }
);

HoverButton.displayName = "HoverButton";

// Solid variant for primary actions
const HoverButtonSolid = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        const buttonRef = React.useRef(null);
        const [isListening, setIsListening] = React.useState(false);
        const [circles, setCircles] = React.useState([]);
        const lastAddedRef = React.useRef(0);

        const createCircle = React.useCallback((x, y) => {
            const buttonWidth = buttonRef.current?.offsetWidth || 0;
            const xPos = x / buttonWidth;
            const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${xPos * 100
                }%)`;

            setCircles((prev) => [
                ...prev,
                { id: Date.now(), x, y, color, fadeState: null },
            ]);
        }, []);

        const handlePointerMove = React.useCallback(
            (event) => {
                if (!isListening) return;

                const currentTime = Date.now();
                if (currentTime - lastAddedRef.current > 100) {
                    lastAddedRef.current = currentTime;
                    const rect = event.currentTarget.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    createCircle(x, y);
                }
            },
            [isListening, createCircle]
        );

        const handlePointerEnter = React.useCallback(() => {
            setIsListening(true);
        }, []);

        const handlePointerLeave = React.useCallback(() => {
            setIsListening(false);
        }, []);

        React.useEffect(() => {
            circles.forEach((circle) => {
                if (!circle.fadeState) {
                    setTimeout(() => {
                        setCircles((prev) =>
                            prev.map((c) =>
                                c.id === circle.id ? { ...c, fadeState: "in" } : c
                            )
                        );
                    }, 0);

                    setTimeout(() => {
                        setCircles((prev) =>
                            prev.map((c) =>
                                c.id === circle.id ? { ...c, fadeState: "out" } : c
                            )
                        );
                    }, 1000);

                    setTimeout(() => {
                        setCircles((prev) => prev.filter((c) => c.id !== circle.id));
                    }, 2200);
                }
            });
        }, [circles]);

        return (
            <button
                ref={buttonRef}
                className={cn(
                    "relative isolate px-6 py-3 rounded-xl",
                    "text-black font-semibold text-sm",
                    "bg-white",
                    "cursor-pointer overflow-hidden",
                    "transition-all duration-300",
                    "hover:bg-gray-100 hover:scale-105",
                    "active:scale-95",
                    className
                )}
                onPointerMove={handlePointerMove}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                {...props}
                style={{
                    "--circle-start": "#a855f7",
                    "--circle-end": "#ec4899",
                    ...props.style,
                }}
            >
                {circles.map(({ id, x, y, color, fadeState }) => (
                    <div
                        key={id}
                        className={cn(
                            "absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full",
                            "blur-xl pointer-events-none z-[-1] transition-opacity duration-300",
                            fadeState === "in" && "opacity-50",
                            fadeState === "out" && "opacity-0 duration-[1.2s]",
                            !fadeState && "opacity-0"
                        )}
                        style={{
                            left: x,
                            top: y,
                            background: color,
                        }}
                    />
                ))}
                <span className="relative z-10">{children}</span>
            </button>
        );
    }
);

HoverButtonSolid.displayName = "HoverButtonSolid";

export { HoverButton, HoverButtonSolid };

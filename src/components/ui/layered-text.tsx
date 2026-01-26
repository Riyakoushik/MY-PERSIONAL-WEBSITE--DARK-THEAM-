"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import type React from "react"

interface LayeredTextProps {
    lines?: Array<{ top: string; bottom: string }>
    className?: string
}

export function LayeredText({
    lines = [
        { top: "\u00A0", bottom: "CURIOUS" },
        { top: "CURIOUS", bottom: "BUILDER" },
        { top: "BUILDER", bottom: "DREAMER" },
        { top: "DREAMER", bottom: "CREATOR" },
        { top: "CREATOR", bottom: "INNOVATOR" },
        { top: "INNOVATOR", bottom: "PASSIONATE" },
        { top: "PASSIONATE", bottom: "\u00A0" },
    ],
    className = "",
}: LayeredTextProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const timelineRef = useRef<gsap.core.Timeline>()
    const [isMobile, setIsMobile] = useState(false)

    // Responsive values
    const lineHeight = isMobile ? 35 : 60
    const fontSize = isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(48px, 6vw, 72px)"
    const baseOffset = isMobile ? 15 : 35

    const calculateTranslateX = (index: number) => {
        const centerIndex = Math.floor(lines.length / 2)
        return (index - centerIndex) * baseOffset
    }

    useEffect(() => {
        // Handle responsive detection
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const paragraphs = container.querySelectorAll("p")

        // Kill existing timeline
        timelineRef.current?.kill()

        timelineRef.current = gsap.timeline({ paused: true })

        timelineRef.current.to(paragraphs, {
            y: isMobile ? -35 : -60,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.08,
        })

        const handleMouseEnter = () => {
            timelineRef.current?.play()
        }

        const handleMouseLeave = () => {
            timelineRef.current?.reverse()
        }

        // Touch support for mobile
        const handleTouchStart = () => {
            timelineRef.current?.play()
        }

        const handleTouchEnd = () => {
            setTimeout(() => {
                timelineRef.current?.reverse()
            }, 1500)
        }

        container.addEventListener("mouseenter", handleMouseEnter)
        container.addEventListener("mouseleave", handleMouseLeave)
        container.addEventListener("touchstart", handleTouchStart, { passive: true })
        container.addEventListener("touchend", handleTouchEnd, { passive: true })

        return () => {
            container.removeEventListener("mouseenter", handleMouseEnter)
            container.removeEventListener("mouseleave", handleMouseLeave)
            container.removeEventListener("touchstart", handleTouchStart)
            container.removeEventListener("touchend", handleTouchEnd)
            timelineRef.current?.kill()
        }
    }, [lines, isMobile])

    return (
        <div
            ref={containerRef}
            className={`mx-auto py-8 md:py-12 font-sans font-black tracking-[-1px] md:tracking-[-2px] uppercase text-white antialiased cursor-pointer select-none ${className}`}
            style={{ fontSize } as React.CSSProperties}
        >
            <ul className="list-none p-0 m-0 flex flex-col items-center">
                {lines.map((line, index) => {
                    const translateX = calculateTranslateX(index)
                    return (
                        <li
                            key={index}
                            className="overflow-hidden relative"
                            style={
                                {
                                    height: `${lineHeight}px`,
                                    transform: `translateX(${translateX}px) skew(${index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg"}) scaleY(${index % 2 === 0 ? "0.66667" : "1.33333"})`,
                                } as React.CSSProperties
                            }
                        >
                            <p
                                className="px-2 md:px-4 align-top whitespace-nowrap m-0"
                                style={
                                    {
                                        height: `${lineHeight}px`,
                                        lineHeight: `${lineHeight - 5}px`,
                                    } as React.CSSProperties
                                }
                            >
                                {line.top}
                            </p>
                            <p
                                className="px-2 md:px-4 align-top whitespace-nowrap m-0"
                                style={
                                    {
                                        height: `${lineHeight}px`,
                                        lineHeight: `${lineHeight - 5}px`,
                                    } as React.CSSProperties
                                }
                            >
                                {line.bottom}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

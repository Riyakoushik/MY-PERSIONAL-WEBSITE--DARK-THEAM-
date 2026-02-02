"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { PROJECT_LINKS } from "@/config/site-config"
import { gsap, ScrollTrigger } from "@/lib/gsap-config"

interface ProjectCard {
    title: string
    description: string
    link?: string
    type?: "project" | "case-study"
}

const projectContents: ProjectCard[] = [
    {
        title: "J.A.R.V.I.S - Personal AI Assistant",
        description:
            "Built a personal AI assistant inspired by JARVIS from Iron Man. Features voice control, natural language understanding, task automation, and seamless integration with daily workflows.",
        link: PROJECT_LINKS.jarvis,
        type: "project",
    },
    {
        title: "Image to Prompt Generator",
        description:
            "An intelligent tool that analyzes images and generates detailed, accurate prompts for AI image generation. Perfect for reverse-engineering visual styles and compositions.",
        link: PROJECT_LINKS.imageToPrompt,
        type: "project",
    },
    {
        title: "AI Research & Automation",
        description:
            "Comprehensive AI-powered research automation system that gathers, analyzes, and synthesizes information from multiple sources. Streamlines the research process with intelligent summarization and insight extraction capabilities.",
        link: PROJECT_LINKS.aiResearch,
        type: "project",
    },
    {
        title: "Product Case Study",
        description:
            "In-depth analysis of product design decisions, user experience patterns, and market positioning strategies.",
        link: PROJECT_LINKS.productCaseStudy,
        type: "case-study",
    },
    {
        title: "UX Case Study",
        description:
            "Detailed exploration of user research, design thinking process, and measurable outcomes.",
        link: PROJECT_LINKS.uxCaseStudy,
        type: "case-study",
    },
]

const PlusCard: React.FC<{
    className?: string
    title: string
    description: string
    link?: string
    type?: "project" | "case-study"
}> = ({ className = "", title, description, link = "#", type = "project" }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    const handleClick = (e: React.MouseEvent) => {
        if (link === "#") {
            e.preventDefault();
        }
    };

    // GSAP hover tilt effect
    useEffect(() => {
        const card = cardRef.current
        if (!card) return

        const handleMouseMove = (e: MouseEvent) => {
            const bounds = card.getBoundingClientRect()
            const x = (e.clientX - bounds.left) / bounds.width - 0.5
            const y = (e.clientY - bounds.top) / bounds.height - 0.5

            gsap.to(card, {
                rotateY: x * 10,
                rotateX: -y * 10,
                transformPerspective: 1000,
                duration: 0.3,
                ease: "power2.out",
            })
        }

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateY: 0,
                rotateX: 0,
                duration: 0.5,
                ease: "power2.out",
            })
        }

        card.addEventListener("mousemove", handleMouseMove)
        card.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            card.removeEventListener("mousemove", handleMouseMove)
            card.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <div
            ref={cardRef}
            className={cn(
                "project-card relative border border-dashed border-neutral-700 rounded-lg p-6 bg-neutral-950 min-h-[200px]",
                "flex flex-col justify-between transition-all duration-300",
                "hover:border-amber-500/70 hover:shadow-lg hover:shadow-amber-500/10",
                "hover:bg-neutral-900/50",
                className
            )}
            style={{ transformStyle: "preserve-3d" }}
        >
            <a
                href={link}
                onClick={handleClick}
                data-cursor="project-link"
                className="block h-full cursor-pointer"
            >
                <CornerPlusIcons />
                {/* Content */}
                <div className="relative z-10 space-y-3">
                    {/* Type Badge */}
                    <span className={cn(
                        "text-xs uppercase tracking-wider px-2 py-1 rounded-full inline-block mb-2",
                        type === "case-study"
                            ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                            : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    )}>
                        {type === "case-study" ? "Case Study" : "Project"}
                    </span>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
                </div>
            </a>
        </div>
    )
}

const CornerPlusIcons = () => (
    <>
        <PlusIcon className="absolute -top-3 -left-3" />
        <PlusIcon className="absolute -top-3 -right-3" />
        <PlusIcon className="absolute -bottom-3 -left-3" />
        <PlusIcon className="absolute -bottom-3 -right-3" />
    </>
)

const PlusIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className={`text-neutral-500 size-6 ${className}`}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
)

export default function ProjectsBentoCards() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            if (headerRef.current) {
                gsap.fromTo(
                    headerRef.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: "top 85%",
                        },
                    }
                )
            }

            // Cards stagger animation
            if (gridRef.current) {
                const cards = gridRef.current.querySelectorAll('.project-card')
                gsap.fromTo(
                    cards,
                    {
                        opacity: 0,
                        y: 80,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 80%",
                        },
                    }
                )
            }

            // Footer text animation
            if (footerRef.current) {
                gsap.fromTo(
                    footerRef.current,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 85%",
                        },
                    }
                )
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="work" className="bg-transparent py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header with animation */}
                <div ref={headerRef} className="text-center mb-12">
                    <span className="text-xs uppercase tracking-widest text-neutral-500 mb-4 block">
            //PROJECTS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured Work
                    </h2>
                    <p className="text-neutral-400 max-w-xl mx-auto">
                        A selection of projects showcasing AI automation, autonomous agents, and intelligent systems.
                    </p>
                </div>

                {/* Responsive Bento Grid with scroll-reveal */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-6"
                >
                    <PlusCard {...projectContents[0]} className="lg:col-span-3 lg:row-span-2" />
                    <PlusCard {...projectContents[1]} className="lg:col-span-3 lg:row-span-2" />
                    <PlusCard {...projectContents[2]} className="lg:col-span-4 lg:row-span-1" />
                    <PlusCard {...projectContents[3]} className="lg:col-span-2 lg:row-span-1" />
                    <PlusCard {...projectContents[4]} className="lg:col-span-3 lg:row-span-1" />
                </div>

                {/* Section Footer with animation */}
                <div ref={footerRef} className="max-w-3xl ml-auto text-right px-4 mt-16">
                    <h3
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}
                    >
                        <span className="text-white">Where </span>
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">imagination</span>
                        <br />
                        <span className="text-white">meets </span>
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">intelligence.</span>
                    </h3>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        From concept to creation — crafting AI solutions that don't just solve problems,
                        they redefine what's possible. Every line of code is a step towards a smarter tomorrow.
                    </p>
                </div>
            </div>
        </section>
    )
}

export { PlusCard, ProjectsBentoCards }

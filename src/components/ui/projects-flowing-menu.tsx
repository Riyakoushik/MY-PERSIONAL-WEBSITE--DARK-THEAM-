"use client"

import { useRef, useEffect } from "react"
import FlowingMenu from "./flowing-menu"
import { PROJECT_LINKS } from "@/config/site-config"
import { gsap } from "@/lib/gsap-config"

const projectItems = [
    {
        link: PROJECT_LINKS.jarvis,
        text: "J.A.R.V.I.S - AI Assistant",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
        link: PROJECT_LINKS.imageToPrompt,
        text: "Image to Prompt Generator",
        image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop"
    },
    {
        link: PROJECT_LINKS.aiResearch,
        text: "AI Research & Automation",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop"
    },
    {
        link: PROJECT_LINKS.productCaseStudy,
        text: "Product Case Study",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
        link: PROJECT_LINKS.uxCaseStudy,
        text: "UX Case Study",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop"
    },
]

export default function ProjectsFlowingMenu() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)
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

            // Menu animation
            if (menuRef.current) {
                gsap.fromTo(
                    menuRef.current,
                    { opacity: 0, y: 80, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: menuRef.current,
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
                {/* Section Header */}
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

                {/* Flowing Menu */}
                <div
                    ref={menuRef}
                    className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-neutral-800"
                >
                    <FlowingMenu
                        items={projectItems}
                        speed={15}
                        textColor="#ffffff"
                        bgColor="#0a0a0a"
                        marqueeBgColor="#f59e0b"
                        marqueeTextColor="#000000"
                        borderColor="#262626"
                    />
                </div>

                {/* Section Footer */}
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

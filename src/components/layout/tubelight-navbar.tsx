"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, FileText, Mail, LucideIcon } from "lucide-react"
import { NAV_LINKS } from "@/config/site-config"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items?: NavItem[]
    className?: string
}

// Default nav items for portfolio - uses centralized config
const defaultNavItems: NavItem[] = [
    { name: 'Home', url: NAV_LINKS.home, icon: Home },
    { name: 'About', url: NAV_LINKS.about, icon: User },
    { name: 'Projects', url: NAV_LINKS.projects, icon: Briefcase },
    { name: 'Resume', url: NAV_LINKS.resume, icon: FileText },
    { name: 'Contact', url: NAV_LINKS.contact, icon: Mail }
]

export function NavBar({ items = defaultNavItems, className = "" }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active tab based on scroll position
            const sections = items.map(item => {
                const id = item.url.replace('#', '')
                const element = id ? document.getElementById(id) : null
                return { name: item.name, element, url: item.url }
            })

            // Check if we're at the bottom of the page (for Contact/Footer)
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100

            if (isAtBottom) {
                // Find the Contact/Footer item and set it as active
                const contactItem = items.find(item => item.url === '#footer')
                if (contactItem) {
                    setActiveTab(contactItem.name)
                    return
                }
            }

            // Find which section is currently in view
            const scrollPosition = window.scrollY + window.innerHeight / 3

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section.url === '#') {
                    // Home is active when at top
                    if (window.scrollY < 100) {
                        setActiveTab(section.name)
                        break
                    }
                } else if (section.element) {
                    const offsetTop = section.element.offsetTop
                    if (scrollPosition >= offsetTop) {
                        setActiveTab(section.name)
                        break
                    }
                }
            }
        }

        handleResize()
        handleScroll()
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [items])

    return (
        <div
            className={`fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'sm:scale-95' : ''} ${className}`}
        >
            <nav
                className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2 bg-black/80 sm:bg-black/40 border border-white/10 sm:border-amber-500/20 backdrop-blur-xl py-1.5 sm:py-2 px-2 sm:px-3 rounded-full shadow-lg"
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Logo - smaller on mobile */}
                <a
                    href="#"
                    className="flex items-center px-1.5 sm:px-3 py-1 mr-0.5 sm:mr-2 sm:border-r sm:border-amber-500/20"
                >
                    <img
                        src="/avatar.png"
                        alt="TK Logo"
                        className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-cover"
                    />
                    <span
                        className="hidden sm:inline text-sm font-bold text-white ml-2"
                        style={{ fontFamily: "'Nouveau Nostalgia', sans-serif" }}
                    >
                        TK
                    </span>
                </a>
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name
                    const isExternal = item.url.startsWith('http')

                    return (
                        <a
                            key={item.name}
                            href={item.url}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            onClick={() => !isExternal && setActiveTab(item.name)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`
                                relative cursor-pointer text-xs sm:text-sm font-semibold 
                                px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 
                                rounded-full transition-all duration-300
                                min-w-[36px] min-h-[36px] sm:min-w-0 sm:min-h-0
                                flex items-center justify-center
                                ${isActive
                                    ? 'text-amber-400'
                                    : 'text-gray-400 hover:text-amber-300 active:text-amber-400'
                                }
                            `}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={isMobile ? 16 : 18} strokeWidth={2} />
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-amber-500/10 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    {/* Tubelight glow effect - smaller on mobile */}
                                    <div className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-amber-500 rounded-t-full">
                                        <div className="absolute w-8 sm:w-12 h-4 sm:h-6 bg-amber-500/30 rounded-full blur-md -top-1 sm:-top-2 -left-1 sm:-left-2" />
                                        <div className="absolute w-6 sm:w-8 h-4 sm:h-6 bg-amber-500/20 rounded-full blur-md -top-0.5 sm:-top-1" />
                                        <div className="absolute w-3 sm:w-4 h-3 sm:h-4 bg-amber-500/30 rounded-full blur-sm top-0 left-1.5 sm:left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </a>
                    )
                })}
            </nav>
        </div>
    )
}

export default NavBar

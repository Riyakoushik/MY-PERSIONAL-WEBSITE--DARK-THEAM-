"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, FileText, Mail, LucideIcon } from "lucide-react"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items?: NavItem[]
    className?: string
}

// Default nav items for portfolio
const defaultNavItems: NavItem[] = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#work', icon: Briefcase },
    { name: 'Resume', url: '#resume', icon: FileText },
    { name: 'Contact', url: '#footer', icon: Mail }
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
        }

        handleResize()
        handleScroll()
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div
            className={`fixed bottom-4 sm:bottom-6 sm:bottom-auto sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'sm:scale-95' : ''} ${className}`}
        >
            <nav
                className="flex items-center gap-0.5 sm:gap-1 md:gap-2 bg-black/60 sm:bg-black/40 border border-amber-500/20 backdrop-blur-xl py-1.5 sm:py-2 px-1.5 sm:px-2 rounded-full shadow-2xl shadow-amber-500/10"
                role="navigation"
                aria-label="Main navigation"
            >
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <a
                            key={item.name}
                            href={item.url}
                            onClick={() => setActiveTab(item.name)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`
                                relative cursor-pointer text-xs sm:text-sm font-semibold 
                                px-2.5 sm:px-4 md:px-6 py-1.5 sm:py-2 
                                rounded-full transition-all duration-300
                                min-w-[40px] sm:min-w-0
                                flex items-center justify-center
                                ${isActive
                                    ? 'text-amber-400'
                                    : 'text-gray-400 hover:text-amber-300 active:text-amber-400'
                                }
                            `}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={isMobile ? 16 : 18} strokeWidth={2.5} />
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

import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

/**
 * 3D Adaptive Navigation Pill
 * Customized for logo + contact button
 */
export const PillBase: React.FC = () => {
    const [expanded, setExpanded] = useState(false)
    const [hovering, setHovering] = useState(false)
    const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Spring animations for smooth motion
    const pillWidth = useSpring(140, { stiffness: 220, damping: 25, mass: 1 })

    // Handle hover expansion
    useEffect(() => {
        if (hovering) {
            setExpanded(true)
            pillWidth.set(280) // Wider to fit logo + contact
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current)
            }
        } else {
            hoverTimeoutRef.current = setTimeout(() => {
                setExpanded(false)
                pillWidth.set(140)
            }, 600)
        }

        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current)
            }
        }
    }, [hovering, pillWidth])

    const handleMouseEnter = () => {
        setHovering(true)
    }

    const handleMouseLeave = () => {
        setHovering(false)
    }

    const handleContactClick = () => {
        // Scroll to footer/contact section
        const footer = document.querySelector('footer')
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.nav
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full"
            style={{
                width: pillWidth,
                height: '56px',
                background: `
          linear-gradient(135deg, 
            rgba(30, 30, 35, 0.95) 0%, 
            rgba(25, 25, 30, 0.97) 15%, 
            rgba(20, 20, 25, 0.98) 30%, 
            rgba(18, 18, 22, 0.99) 45%, 
            rgba(15, 15, 20, 1) 60%, 
            rgba(12, 12, 18, 1) 75%, 
            rgba(10, 10, 15, 1) 90%, 
            rgba(8, 8, 12, 1) 100%
          )
        `,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: expanded
                    ? `
            0 2px 4px rgba(0, 0, 0, 0.3),
            0 6px 12px rgba(0, 0, 0, 0.4),
            0 12px 24px rgba(0, 0, 0, 0.5),
            0 24px 48px rgba(0, 0, 0, 0.3),
            inset 0 2px 2px rgba(255, 255, 255, 0.1),
            inset 0 -3px 8px rgba(0, 0, 0, 0.4),
            inset 3px 3px 8px rgba(0, 0, 0, 0.3),
            inset -3px 3px 8px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(139, 92, 246, 0.3)
          `
                    : `
            0 3px 6px rgba(0, 0, 0, 0.4),
            0 8px 16px rgba(0, 0, 0, 0.5),
            0 16px 32px rgba(0, 0, 0, 0.4),
            inset 0 2px 1px rgba(255, 255, 255, 0.08),
            inset 0 -2px 6px rgba(0, 0, 0, 0.5),
            inset 2px 2px 8px rgba(0, 0, 0, 0.4),
            inset -2px 2px 8px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(139, 92, 246, 0.2)
          `,
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease-out',
                border: '1px solid rgba(139, 92, 246, 0.2)',
            }}
        >
            {/* Top edge highlight */}
            <div
                className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
                style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.6) 5%, rgba(139, 92, 246, 0.8) 15%, rgba(139, 92, 246, 0.8) 85%, rgba(139, 92, 246, 0.6) 95%, rgba(139, 92, 246, 0) 100%)',
                    filter: 'blur(0.5px)',
                }}
            />

            {/* Top hemisphere light */}
            <div
                className="absolute inset-x-0 top-0 rounded-full pointer-events-none"
                style={{
                    height: '55%',
                    background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 30%, rgba(139, 92, 246, 0.03) 60%, rgba(139, 92, 246, 0) 100%)',
                }}
            />

            {/* Premium gloss reflection */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    left: expanded ? '18%' : '15%',
                    top: '16%',
                    width: expanded ? '140px' : '60px',
                    height: '14px',
                    background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, rgba(139, 92, 246, 0.05) 70%, rgba(139, 92, 246, 0) 100%)',
                    filter: 'blur(4px)',
                    transform: 'rotate(-12deg)',
                    transition: 'all 0.3s ease',
                }}
            />

            {/* Bottom shadow */}
            <div
                className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
                style={{
                    height: '50%',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 25%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
                }}
            />

            {/* Navigation content */}
            <div
                className="relative z-10 h-full flex items-center justify-center px-6"
                style={{
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", sans-serif',
                }}
            >
                {/* Collapsed state - show only "Contact" */}
                {!expanded && (
                    <motion.button
                        onClick={handleContactClick}
                        className="cursor-pointer bg-transparent border-none outline-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            fontSize: '15.5px',
                            fontWeight: 600,
                            color: '#e0e0e0',
                            letterSpacing: '0.5px',
                            whiteSpace: 'nowrap',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            WebkitFontSmoothing: 'antialiased',
                            textShadow: `
                0 1px 2px rgba(0, 0, 0, 0.5),
                0 0 10px rgba(139, 92, 246, 0.3)
              `,
                        }}
                    >
                        Contact
                    </motion.button>
                )}

                {/* Expanded state - show logo + contact */}
                {expanded && (
                    <div className="flex items-center justify-between w-full gap-4">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex items-center gap-2"
                        >
                            <img
                                src="/avatar.png"
                                alt="Logo"
                                className="w-8 h-8 rounded-full"
                                style={{
                                    border: '2px solid rgba(139, 92, 246, 0.3)',
                                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.2)',
                                }}
                            />
                            <span
                                style={{
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    color: '#e0e0e0',
                                    letterSpacing: '0.3px',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                    WebkitFontSmoothing: 'antialiased',
                                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                TK
                            </span>
                        </motion.div>

                        {/* Contact Button */}
                        <motion.button
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: 0.08 }}
                            onClick={handleContactClick}
                            className="cursor-pointer bg-transparent border-none outline-none px-4 py-2 rounded-full transition-all duration-200"
                            style={{
                                fontSize: '15px',
                                fontWeight: 600,
                                color: '#e0e0e0',
                                letterSpacing: '0.5px',
                                whiteSpace: 'nowrap',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                WebkitFontSmoothing: 'antialiased',
                                textShadow: `
                  0 1px 2px rgba(0, 0, 0, 0.5),
                  0 0 10px rgba(139, 92, 246, 0.3)
                `,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.3)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            Contact
                        </motion.button>
                    </div>
                )}
            </div>
        </motion.nav>
    )
}

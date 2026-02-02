import { useEffect, useRef } from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/config/site-config';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';

export default function ModernFooter() {
    const footerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const brandingRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const socialLinks = [
        { name: 'LINKEDIN', url: SOCIAL_LINKS.linkedin, icon: Linkedin },
        { name: 'INSTAGRAM', url: SOCIAL_LINKS.instagram, icon: Instagram },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            if (headerRef.current) {
                gsap.fromTo(
                    headerRef.current,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            // Social links stagger animation
            if (socialRef.current) {
                const links = socialRef.current.querySelectorAll('a');
                gsap.fromTo(
                    links,
                    { opacity: 0, x: 30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }

            // Large branding text slide-in animation
            if (brandingRef.current) {
                gsap.fromTo(
                    brandingRef.current,
                    { opacity: 0, x: -100 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: brandingRef.current,
                            start: "top 90%",
                        },
                    }
                );
            }

            // Bottom bar fade-in
            if (bottomRef.current) {
                gsap.fromTo(
                    bottomRef.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: 0.3,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: bottomRef.current,
                            start: "top 95%",
                        },
                    }
                );
            }
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} id="footer" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden m-8 rounded-3xl">
            <div className="max-w-7xl mx-auto px-8 sm:px-12 py-16">
                {/* Top Section */}
                <div className="flex flex-col gap-8 mb-20">
                    {/* Header and Connect Button */}
                    <div ref={headerRef} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                            Let's Connect!
                        </h3>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all text-sm sm:text-base hover:scale-105"
                        >
                            Connect on LinkedIn
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline">
                                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Social Links - Now below header for better mobile visibility */}
                    <div ref={socialRef} className="flex flex-wrap justify-start sm:justify-end gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider hover:text-gray-400 transition-colors border border-white/20 px-4 py-2 rounded-full hover:border-white/40 hover:scale-105"
                            >
                                <link.icon className="w-4 h-4" />
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Large Text Branding */}
                <div ref={brandingRef} className="mb-8 overflow-hidden">
                    <span
                        className="block font-black text-white select-none uppercase tracking-tighter leading-none whitespace-nowrap"
                        aria-hidden="true"
                        style={{
                            fontSize: 'clamp(4rem, 15vw, 12rem)',
                            fontFamily: "'Nouveau Nostalgia', cursive",
                            fontWeight: 'normal',
                            letterSpacing: '-0.05em',
                            textShadow: '4px 4px 0px rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        {SITE_CONFIG.name.toUpperCase()}
                    </span>
                </div>

                {/* Bottom Bar */}
                <div ref={bottomRef} className="flex justify-center items-center pt-6 border-t border-white/10 text-sm text-gray-400">
                    <p className="text-center font-mono italic">Building the future, one intelligent workflow at a time ✨</p>
                </div>
            </div>
        </footer>
    );
}

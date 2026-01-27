import { Linkedin, Instagram } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/config/site-config';

export default function ModernFooter() {

    const socialLinks = [
        { name: 'LINKEDIN', url: SOCIAL_LINKS.linkedin, icon: Linkedin },
        { name: 'INSTAGRAM', url: SOCIAL_LINKS.instagram, icon: Instagram },
    ];

    return (
        <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden m-8 rounded-3xl">
            <div className="max-w-7xl mx-auto px-8 sm:px-12 py-16">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-20">
                    {/* Left: Email Signup */}
                    <div className="flex-1">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                            Let's Connect!
                        </h2>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all"
                        >
                            Connect on LinkedIn
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline">
                                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex-1 text-right">
                        <div className="flex flex-wrap justify-end gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-mono tracking-wider hover:text-gray-400 transition-colors border border-white/20 px-3 py-1.5 rounded-full hover:border-white/40"
                                >
                                    [ {link.name} ]
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Large Text Branding */}
                <div className="mb-8 overflow-hidden">
                    <h1
                        className="font-black text-white select-none uppercase tracking-tighter leading-none whitespace-nowrap"
                        style={{
                            fontSize: 'clamp(4rem, 15vw, 12rem)',
                            fontFamily: "'Nouveau Nostalgia', cursive",
                            fontWeight: 'normal',
                            letterSpacing: '-0.05em',
                            textShadow: '4px 4px 0px rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        {SITE_CONFIG.name.toUpperCase()}
                    </h1>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-center items-center pt-6 border-t border-white/10 text-sm text-gray-400">
                    <p className="text-center font-mono italic">Building the future, one intelligent workflow at a time ✨</p>
                </div>
            </div>
        </footer>
    );
}

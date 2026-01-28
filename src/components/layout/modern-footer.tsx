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
                <div className="flex flex-col gap-8 mb-20">
                    {/* Header and Connect Button */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                            Let's Connect!
                        </h2>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all text-sm sm:text-base"
                        >
                            Connect on LinkedIn
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline">
                                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Social Links - Now below header for better mobile visibility */}
                    <div className="flex flex-wrap justify-start sm:justify-end gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider hover:text-gray-400 transition-colors border border-white/20 px-4 py-2 rounded-full hover:border-white/40"
                            >
                                <link.icon className="w-4 h-4" />
                                {link.name}
                            </a>
                        ))}
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

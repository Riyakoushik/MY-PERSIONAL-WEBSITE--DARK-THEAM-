import React from "react";

const SkillsMarquee = () => {
    // Your skills list
    const skills = [
        "PRODUCT MANAGEMENT",
        "AGILE & SCRUM",
        "GO-TO-MARKET STRATEGY",
        "USER RESEARCH",
        "A/B TESTING",
        "ANALYTICS",
        "AI-AGENTS",
        "DESIGN THINKING",
        "LEAN STARTUP & MVP",
        "OKRs",
        "STAKEHOLDER MANAGEMENT",
        "JOBS-TO-BE-DONE",
        "USABILITY TESTING",
        "SQL",
        "NOTION",
        "SPRINT PLANNING",
        "ROADMAP PLANNING",
        "FUNNEL ANALYSIS",
    ];

    // Create repeated content for seamless loop
    const repeatedSkills = [...skills, ...skills, ...skills, ...skills];

    return (
        <section className="w-full py-6 bg-black overflow-hidden border-y border-zinc-800">
            {/* Skills - scrolling left */}
            <div className="relative">
                <div className="skills-marquee flex whitespace-nowrap">
                    {repeatedSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center text-2xl md:text-4xl font-black text-white mx-6 tracking-tight"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            {skill}
                            <span className="mx-6 text-orange-500">•</span>
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .skills-marquee {
                    animation: scroll-left 30s linear infinite;
                }

                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .skills-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default SkillsMarquee;

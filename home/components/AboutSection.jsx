import React from "react";
import { motion } from "framer-motion";
import { Search, Layers, Rocket } from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";

export const AboutSection = () => {
    const phases = [
        {
            id: "01",
            title: "DISCOVER AND ANALYSIS",
            description: "Discover opportunities and refine strategies for decisions.",
            Icon: Search,
        },
        {
            id: "02",
            title: "DESIGN AND IMPLEMENT",
            description: "Design and implement solutions to transform ideas.",
            Icon: Layers,
        },
        {
            id: "03",
            title: "DELIVER AND MONITOR",
            description: "Ensure efficient execution and performance tracking.",
            Icon: Rocket,
        },
    ];

    return (
        <section id="about" className="relative min-h-screen w-full py-24 px-6 sm:px-10 bg-transparent text-white overflow-hidden flex flex-col justify-center">
            {/* Header Row */}
            <div className="max-w-7xl mx-auto flex justify-center items-center text-xs uppercase tracking-widest text-neutral-400 mb-16">
                <span>HOW I CAN APPROACH</span>
            </div>
            {/* Main Content */}
            <div className="max-w-5xl mx-auto text-center mb-20">
                {/* Decorative Dot */}
                <div className="flex justify-center mb-8">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>

                {/* Section Heading - H2 for SEO */}
                <h2 className="sr-only">About Thalari Koushik - Background and Approach</h2>

                {/* Main Heading with Sparkles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <SparklesText
                        text="I'M THALARI KOUSHIK BASED"
                        className="text-[48px] font-black leading-[1.1] not-italic text-white"
                        colors={{ first: "#FFD700", second: "#FFA500" }}
                        sparklesCount={15}
                    />
                    <SparklesText
                        text="ANDHRA PRADESH, INDIA."
                        className="text-[48px] font-black leading-[1.1] not-italic text-neutral-400"
                        colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
                        sparklesCount={12}
                    />
                </motion.div>

                {/* Subtitle with more content for SEO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-neutral-500 text-sm mb-4">
                        Aspiring Product Manager • Building AI-powered experiences
                    </p>
                    <p className="text-neutral-400 text-base leading-relaxed">
                        I specialize in designing and developing intelligent automation solutions that transform complex workflows into seamless experiences.
                        With expertise in AI, agentic systems, and product management, I bridge the gap between cutting-edge technology and user-centric design.
                        My passion lies in creating autonomous agents, building smart tools, and crafting products that solve real-world problems.
                        From concept to execution, I bring ideas to life with precision and creativity.
                    </p>
                </motion.div>
            </div>

            {/* Timeline Numbers */}
            <div className="max-w-3xl mx-auto flex justify-between items-center mb-16 px-4">
                {phases.map((phase, index) => (
                    <div key={phase.id} className="flex items-center">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-neutral-400">{phase.id}</span>
                            <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                        </div>
                        {index < phases.length - 1 && (
                            <div className="w-24 sm:w-32 md:w-48 h-px bg-neutral-700 mx-4"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Feature Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {phases.slice(0, 2).map((phase, index) => (
                    <motion.div
                        key={phase.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Corner Brackets */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-neutral-500/60" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-neutral-500/60" />
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-neutral-500/60" />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-neutral-500/60" />

                        {/* Card Content */}
                        <div className="bg-neutral-950 rounded-lg p-8 h-full min-h-[320px] flex flex-col">
                            {/* Header with Icon + Title */}
                            <div className="flex items-center gap-3 mb-6">
                                <phase.Icon className="w-5 h-5 text-amber-500" />
                                <span className="text-neutral-400 text-sm">{phase.title}</span>
                            </div>

                            {/* Main Heading */}
                            <h3 className="text-2xl font-semibold text-white leading-snug mb-8">
                                {phase.description.split('.')[0]},
                                <br />
                                <span className="text-neutral-400">Instantly transform your ideas.</span>
                            </h3>

                            {/* Bottom Visual Preview - Gradient Blur Effect */}
                            <div className="mt-auto relative">
                                <div
                                    className="h-32 rounded-lg overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(30,30,30,0.8) 50%, rgba(40,40,40,0.4) 100%)'
                                    }}
                                >
                                    {/* Mock UI lines */}
                                    <div className="p-4 space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-neutral-700" />
                                            <div className="h-2 bg-neutral-700 rounded w-24" />
                                            <div className="h-2 bg-neutral-600 rounded w-16 ml-auto" />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-green-600/50" />
                                            <div className="h-2 bg-neutral-700 rounded w-32" />
                                            <div className="h-2 bg-neutral-600 rounded w-12 ml-auto" />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                            <div className="h-2 bg-neutral-700 rounded w-28" />
                                            <div className="h-2 bg-neutral-600 rounded w-14 ml-auto" />
                                        </div>
                                    </div>
                                </div>
                                {/* Gradient Fade */}
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-950 to-transparent" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;

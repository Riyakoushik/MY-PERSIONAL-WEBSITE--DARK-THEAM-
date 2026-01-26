"use client";

import React from "react";
import { motion } from "framer-motion";
import PixelCard from "../../src/components/effects/PixelCard.jsx";

const projects = [
  {
    number: "01",
    title: "Retention Deep Dive",
    category: "Product Case Study",
    description: "Solving churn for a B2B SaaS platform. From problem framing and user research to solution design and success metrics.",
    image: "/images/retention_dashboard.png",
    variant: "amber",
    accentColor: "amber-400",
    borderHover: "hover:border-amber-400",
  },
  {
    number: "02",
    title: "Img2Prompt AI",
    category: "AI/ML Tool",
    description: "A technical tool that reverse-engineers text prompts from images, bridging the gap for creative AI workflows.",
    image: "/images/img2prompt_ai.png",
    variant: "white",
    accentColor: "white",
    borderHover: "hover:border-white",
  },
  {
    number: "03",
    title: "RIYA Assistant",
    category: "Flagship AI Project",
    description: "A comprehensive personal AI assistant capable of managing complex workflows and smart interactions.",
    image: "/images/riya_assistant.png",
    variant: "blue",
    accentColor: "sky-400",
    borderHover: "hover:border-sky-400",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <PixelCard
        variant={project.variant}
        className={`w-full aspect-[3/4] sm:aspect-[3/4] rounded-xl border border-slate-700 ${project.borderHover} transition-all duration-300 group cursor-pointer`}
      >
        {/* Card Content */}
        <div className="absolute inset-0 bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
          {/* Project Image - Full Card Background - Blurred by default */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover blur-sm group-hover:blur-0 transition-all duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {/* Fallback gradient if no image */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 -z-10"></div>
          </div>

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

          {/* Number watermark - responsive sizing */}
          <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-4xl sm:text-5xl md:text-6xl font-black text-white/10 group-hover:text-${project.accentColor}/20 transition-all duration-500`}>
            {project.number}
          </div>

          {/* Card Content - Responsive padding and text */}
          <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-end text-white">
            {/* Category */}
            <span className={`text-[10px] sm:text-xs text-${project.accentColor} font-semibold uppercase tracking-wider mb-1 sm:mb-2 opacity-80 group-hover:opacity-100 transition-opacity`}>
              {project.category}
            </span>

            {/* Title */}
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight mb-1 sm:mb-2">
              {project.title}
            </h3>

            {/* Description - Shows on hover (hidden on mobile by default for cleaner look) */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 line-clamp-3">
              {project.description}
            </p>

            {/* Arrow indicator */}
            <div className="mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 text-${project.accentColor}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </PixelCard>
    </motion.div>
  );
};

export function Layout356() {
  return (
    <section id="work" className="bg-transparent py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-2 sm:mb-3 md:mb-4 text-amber-400 font-medium tracking-wide uppercase text-xs sm:text-sm"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
          >
            Recent Projects
          </motion.h2>
        </div>

        {/* Projects Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

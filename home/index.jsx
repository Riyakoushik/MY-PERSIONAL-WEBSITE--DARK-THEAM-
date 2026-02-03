import React from "react";
import { Helmet } from "react-helmet-async";
import { testimonials } from "./data/testimonials";
import StaggeredMenu from "../src/components/layout/staggered-menu";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import ProjectsFlowingMenu from "../src/components/ui/projects-flowing-menu";
import { TestimonialsSection } from "../src/components/ui/testimonials-with-marquee";
import ModernFooter from "../src/components/layout/modern-footer";
import CustomCursor from "../src/components/effects/custom-cursor";
import SkillsMarquee from "../src/components/ui/skills-marquee";
import AnimeQuoteMarquee from "../src/components/ui/anime-quote-marquee";
import SmoothScroll from "../src/components/effects/SmoothScroll";

// Import GSAP config to ensure plugins are registered
import "../src/lib/gsap-config";




export default function Page() {
  return (
    <SmoothScroll>
      <div className="bg-black min-h-screen">
        <Helmet>
          <title>Thalari Koushik | Aspiring Product Manager & AI Specialist</title>
          <meta name="description" content="Portfolio of Thalari Koushik, an Aspiring Product Manager & AI Specialist specializing in Agentic Workflow and AI automation." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <CustomCursor />

        <StaggeredMenu />
        <HeroSection />
        <SkillsMarquee />
        <AboutSection />
        <AnimeQuoteMarquee />
        <ProjectsFlowingMenu />
        <TestimonialsSection
          title="What People Say"
          description="Feedback from collaborators and clients I've worked with"
          testimonials={testimonials}
        />
        <ModernFooter />
      </div>
    </SmoothScroll>
  );
}

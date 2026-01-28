import React from "react";
import { NavBar } from "../src/components/layout/tubelight-navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import ProjectsBentoCards from "../src/components/ui/projects-bento-cards";
import { TestimonialsSection } from "../src/components/ui/testimonials-with-marquee";
import ModernFooter from "../src/components/layout/modern-footer";
import CustomCursor from "../src/components/effects/custom-cursor";
import SkillsMarquee from "../src/components/ui/skills-marquee";
import AnimeQuoteMarquee from "../src/components/ui/anime-quote-marquee";


const testimonials = [
  {
    author: {
      name: "Priya Sharma",
      handle: "@priyatech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "The AI solutions provided are absolutely incredible. Transformed our entire workflow at our Bangalore startup!",
  },
  {
    author: {
      name: "Michael Johnson",
      handle: "@mikejohnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with Koushik was a game-changer. His AI automation skills are world-class.",
  },
  {
    author: {
      name: "Anjali Patel",
      handle: "@anjaliai",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "The JARVIS assistant project blew my mind. Truly next-level AI implementation!"
  },
  {
    author: {
      name: "James Wilson",
      handle: "@jameswilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Exceptional product thinking combined with deep technical expertise. Highly recommend!"
  },
  {
    author: {
      name: "Rahul Verma",
      handle: "@rahulverma",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "His understanding of AI agents and automation is phenomenal. Delivered beyond expectations!"
  },
  {
    author: {
      name: "Sarah Mitchell",
      handle: "@sarahm",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "The image to prompt generator tool is incredibly accurate. Saves us hours of work daily!"
  },
  {
    author: {
      name: "Vikram Singh",
      handle: "@vikramsingh",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    text: "From concept to execution, the AI research automation was flawless. True professional!"
  },
  {
    author: {
      name: "Emily Davis",
      handle: "@emilyd",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    text: "Koushik's product management skills combined with AI expertise make him truly unique."
  },
  {
    author: {
      name: "Arjun Reddy",
      handle: "@arjunreddy",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    text: "The autonomous agents he built streamlined our entire customer support. Amazing work!"
  },
  {
    author: {
      name: "Jessica Brown",
      handle: "@jessicab",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    text: "Incredible attention to detail and user experience. The AI tools feel so intuitive!"
  }
];

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <CustomCursor />

      <NavBar />
      <HeroSection />
      <SkillsMarquee />
      <AboutSection />
      <AnimeQuoteMarquee />
      <ProjectsBentoCards />
      <TestimonialsSection
        title="What People Say"
        description="Feedback from collaborators and clients I've worked with"
        testimonials={testimonials}
      />
      <ModernFooter />
    </div>
  );
}

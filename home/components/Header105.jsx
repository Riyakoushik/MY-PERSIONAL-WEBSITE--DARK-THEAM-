"use client";

import React from "react";
import PixelCard from "../../src/components/effects/PixelCard.jsx";
import { LayeredText } from "../../src/components/ui/layered-text";

export function Header105() {
  const personalWords = [
    { top: "\u00A0", bottom: "CURIOUS" },
    { top: "CURIOUS", bottom: "BUILDER" },
    { top: "BUILDER", bottom: "DREAMER" },
    { top: "DREAMER", bottom: "CREATOR" },
    { top: "CREATOR", bottom: "INNOVATOR" },
    { top: "INNOVATOR", bottom: "KOUSHIK" },
    { top: "KOUSHIK", bottom: "\u00A0" },
  ];

  return (
    <section id="about" className="relative w-full bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout Container - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-[80vh]">

          {/* LEFT SECTION - Layered Text */}
          <div className="w-full lg:w-[65%] bg-black px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 flex items-center justify-center order-2 lg:order-1">
            <div className="w-full flex flex-col items-center">
              {/* Section Label */}
              <span className="text-gray-400 text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase mb-4 sm:mb-6 md:mb-8">
                About Me
              </span>

              {/* 3D Layered Text Effect */}
              <LayeredText lines={personalWords} />
            </div>
          </div>

          {/* RIGHT SECTION - Profile Card */}
          <div className="w-full lg:w-[35%] bg-black flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 relative order-1 lg:order-2">
            {/* PixelCard Effect Wrapper - Responsive sizing */}
            <PixelCard
              variant="amber"
              className="w-[200px] h-[280px] sm:w-[240px] sm:h-[340px] md:w-[280px] md:h-[400px] lg:w-[3in] lg:h-[5in] rounded-xl border border-slate-700 hover:border-amber-400 transition-all duration-300 group"
            >
              {/* Profile Card Content */}
              <div className="absolute inset-0 bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
                {/* Profile Image */}
                <div className="absolute inset-0">
                  <img
                    src="/profile.jpg"
                    alt="Thalari Koushik"
                    className="w-full h-full object-cover blur-sm group-hover:blur-0 transition-all duration-500"
                  />
                </div>

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* Card Content */}
                <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-end text-white">
                  <div className="space-y-0.5 sm:space-y-1">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight">Thalari Koushik</h3>
                    <p className="text-xs sm:text-sm text-amber-400 font-semibold">AI/Agentic Workflow Artist</p>
                    <p className="text-[10px] sm:text-xs text-gray-300">Kurnool, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { NavBar } from "../src/components/layout/tubelight-navbar";
import { HeroSection } from "./components/HeroSection";
// import { Header105 } from "./components/Header105"; // Temporarily removed - finding better UI
import { Banner12 } from "./components/Banner12";
// import { Layout356 } from "./components/Layout356"; // Temporarily removed - finding better UI
import { Banner12_1 } from "./components/Banner12_1";
import { FlickeringFooter } from "../src/components/layout/flickering-footer";

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <HeroSection />
      {/* About section temporarily removed while finding better UI */}
      <Banner12 />
      {/* Projects section temporarily removed while finding better UI */}
      <Banner12_1 />
      <FlickeringFooter />
    </div>
  );
}

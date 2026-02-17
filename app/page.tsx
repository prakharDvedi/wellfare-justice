"use client";

import { Bebas_Neue, Oswald } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import HeroBackground from "@/components/HeroBackground";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#050505]">
        {/* Fixed Background Layer (Z-0) */}
        <HeroBackground />

        {/* Scrollable Content Layer (Z-10) */}
        <div className="relative z-10 w-full">
          {/* Spacer Section removed to center text immediately */}

          {/* Hero Text Section */}
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className={`${bebasNeue.className} text-center`}>
              <h1 className="text-8xl md:text-[10rem] font-bold text-white leading-none animate-fade-up delay-200">
                Wellfare
              </h1>
              <h1 className="text-8xl md:text-[10rem] font-bold text-zinc-400 leading-none animate-fade-up delay-300">
                Justice
              </h1>
              <p className="mt-8 text-3xl text-zinc-300 max-w-lg mx-auto font-sans tracking-wide animate-fade-up delay-500">
                FOR CHALLENGING PEOPLE
              </p>

              <div className="mt-16 animate-fade-up delay-700">
                <span
                  className={`${oswald.className} inline-block px-8 py-3 border-2 border-white/20 rounded-lg text-white text-xl tracking-widest uppercase bg-white/5 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-all`}
                >
                  12A & 80G Approved
                </span>
              </div>
            </div>
          </section>

          {/* Imported Content Sections */}
          <GallerySection />
          <AboutSection />
          <ContactSection />
        </div>
      </main>
    </SmoothScroll>
  );
}

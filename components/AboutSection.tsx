"use client";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#050505] px-6 py-24"
    >
      <div className="max-w-4xl text-left">
        <h2 className={`${bebasNeue.className} text-6xl text-white mb-8`}>
          Our Mission
        </h2>
        <p className="text-zinc-400 text-lg md:text-2xl font-light leading-relaxed mb-6">
          We advocate for the voiceless and challenge the systems that leave
          them behind. Through dedicated action and unwavering commitment, we
          strive to build a future where justice is not a privilege, but a
          fundamental right for everyone.
        </p>
        <p className="text-zinc-500 text-lg md:text-2xl font-light leading-relaxed">
          Founded on the belief that every individual deserves dignity, Wellfare
          Justice works tirelessly to bridge the gap between policy and people.
          We are more than an organization; we are a movement for change.
        </p>
      </div>
    </section>
  );
}

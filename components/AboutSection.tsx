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
          We are dedicated to empowering underprivileged communities through two
          core initiatives:
          <strong className="text-zinc-300">
            {" "}
            supporting para-athletes
          </strong>{" "}
          in their journey to the Paralympics and providing{" "}
          <strong className="text-zinc-300">
            educational opportunities
          </strong>{" "}
          to children who lack access to quality learning.
        </p>
        <p className="text-zinc-500 text-lg md:text-2xl font-light leading-relaxed">
          Through donation drives and community partnerships, we strive to break
          barriers and create pathways for those who are often left behind.
          Every contribution fuels dreams, builds futures, and champions the
          spirit of resilience.
        </p>
      </div>
    </section>
  );
}

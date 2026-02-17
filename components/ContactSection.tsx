"use client";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-[50vh] flex flex-col items-center justify-center bg-zinc-950 px-6 border-t border-zinc-900 py-24"
    >
      <h3 className={`${bebasNeue.className} text-6xl text-white mb-8`}>
        Join the Movement
      </h3>

      <div className="flex flex-col items-center space-y-4 text-center">
        <p className="text-zinc-400 text-xl font-light">
          Have questions or want to get involved? Reach out to us.
        </p>

        <a
          href="mailto:karuaparna@gmail.com"
          className="text-white text-2xl hover:text-zinc-300 transition-colors border-b border-white pb-1"
        >
          karuaparna@gmail.com
        </a>

        <div className="flex gap-6 mt-8">
          <span className="text-zinc-600 uppercase tracking-widest text-sm">
            Varanasai
          </span>
          <span className="text-zinc-600 uppercase tracking-widest text-sm">
            Lucknow
          </span>
          <span className="text-zinc-600 uppercase tracking-widest text-sm">
            Greater Noida
          </span>
        </div>

        <p className="text-zinc-700 text-sm mt-12 pt-12">
          © {new Date().getFullYear()} Wellfare Justice. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

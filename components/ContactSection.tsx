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
      </div>

      <div className="mt-24 w-full max-w-4xl border-t border-zinc-900 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="text-zinc-500 uppercase tracking-widest text-xs mb-4 font-semibold">
              Legal Registration
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-zinc-600 text-sm">
                <span>Trust Name</span>
                <span className="text-zinc-400">
                  WELFARE JUSTICE FOR CHALLENGING PEOPLE
                </span>
              </li>
              <li className="flex justify-between text-zinc-600 text-sm">
                <span>Registration No.</span>
                <span className="text-zinc-400">4/43/305/318/276</span>
              </li>
              <li className="flex justify-between text-zinc-600 text-sm">
                <span>Registered Under</span>
                <span className="text-zinc-400">Indian Trust Act, 1882</span>
              </li>
              <li className="flex justify-between text-zinc-600 text-sm">
                <span>PAN</span>
                <span className="text-zinc-400">AAATW8052C</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-500 uppercase tracking-widest text-xs mb-4 font-semibold">
              Tax Exemption Status
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-zinc-600 text-sm">
                <span>12A Registration</span>
                <span className="text-zinc-400">Active (AY 2026-29)</span>
              </li>
              <li className="flex justify-between text-zinc-600 text-sm">
                <span>80G Approval</span>
                <span className="text-zinc-400">
                  Eligible for Tax Exemption
                </span>
              </li>
              <li className="flex justify-between text-zinc-600 text-sm">
                <span>12A URN</span>
                <span className="text-zinc-400">AAATW8052CE20251</span>
              </li>
              <li className="flex justify-between text-zinc-600 text-sm">
                <span>80G URN</span>
                <span className="text-zinc-400">AAATW8052CF20261</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-zinc-700 text-xs mt-8 text-center border-t border-zinc-900 pt-8">
          Donations made to Welfare Justice for Challenging People are eligible
          for tax benefits under Section 80G of the Income Tax Act, 1961.
        </p>

        <p className="text-zinc-800 text-xs mt-4 text-center">
          © {new Date().getFullYear()} Wellfare Justice. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

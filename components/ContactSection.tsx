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
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 mt-12">
          <a
            href="https://www.youtube.com/@INDIAPAATHY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <svg
              className="w-8 h-8 text-zinc-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span className="text-zinc-500 text-xs uppercase tracking-wider">
              YouTube
            </span>
          </a>

          <a
            href="https://www.linkedin.com/company/wellfare-justice-for-challenging-people/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <svg
              className="w-8 h-8 text-zinc-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-zinc-500 text-xs uppercase tracking-wider">
              LinkedIn
            </span>
          </a>

          <a
            href="https://www.instagram.com/drsantoshpandey555/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <svg
              className="w-8 h-8 text-zinc-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-zinc-500 text-xs uppercase tracking-wider">
              Instagram
            </span>
          </a>
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

"use client";

import { useState } from "react";
import { Bebas_Neue, Oswald } from "next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export interface PersonData {
  name: string;
  title: string;
  shortBio: string;
  image: string;
  sections: {
    heading: string;
    items: string[];
  }[];
  fullBio?: string;
}

interface PersonCardProps {
  person: PersonData;
}

export default function PersonCard({ person }: PersonCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-500">
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row gap-6 p-8">
        {/* Circular Image */}
        <div className="flex-shrink-0 flex justify-center sm:justify-start">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-zinc-600 relative bg-zinc-700">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover"
              sizes="112px"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {/* Fallback initials */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`${bebasNeue.className} text-3xl text-zinc-400`}>
                {person.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          </div>
        </div>

        {/* Name, Title, Short Bio */}
        <div className="flex-1">
          <h3
            className={`${bebasNeue.className} text-3xl text-white tracking-wide mb-1`}
          >
            {person.name}
          </h3>
          <p
            className={`${oswald.className} text-zinc-400 text-sm font-light mb-4 leading-relaxed`}
          >
            {person.title}
          </p>
          <p className="text-zinc-300 text-base leading-relaxed line-clamp-3">
            {person.shortBio}
          </p>

          {/* Expand Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`${oswald.className} mt-5 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase`}
          >
            <span>{expanded ? "Show Less" : "Read More"}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          expanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pb-8 border-t border-zinc-800 pt-6 space-y-8">
          {/* Full Bio */}
          {person.fullBio && (
            <p className="text-zinc-300 leading-relaxed">{person.fullBio}</p>
          )}

          {/* Sections */}
          {person.sections.map((section, i) => (
            <div key={i}>
              <h4
                className={`${bebasNeue.className} text-xl text-white tracking-wide mb-4`}
              >
                {section.heading}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0" />
                    <span className="text-zinc-400 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

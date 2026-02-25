"use client";

import { Bebas_Neue } from "next/font/google";
import PersonCard, { PersonData } from "./PersonCard";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const people: PersonData[] = [
  {
    name: "Dr. Aparna Dwivedi",
    title:
      "POSH Professional | ICC External Member | Workplace Ethics & Gender Sensitization Specialist | Policy Development and Implementation",
    image: "/galleryImages/image.png",
    shortBio:
      "I am a POSH (Prevention of Sexual Harassment) professional with over 21 years of experience working across corporates, educational institutions, NGOs, and government bodies. I specialize in the implementation and end-to-end compliance of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act (POSH Act, 2013), including Internal Committee strengthening, inquiry process guidance, and policy development and implementation.",
    fullBio:
      "My work focuses on translating legal provisions into practical institutional systems by integrating statutory compliance, psychological sensitivity, and organizational culture building to create safe, respectful, and gender-inclusive workplaces.",
    sections: [
      {
        heading:
          "POSH & Child Protection – Policy, Training & Institutional Roles",
        items: [
          "Member of the expert group that presented recommendations before the Parliamentary Committee during the review of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act).",
          "Contributed to the development of a Training Manual on Sexual Harassment at the Workplace in collaboration with Human Rights Law Network (HRLN), strengthening legal awareness and institutional capacity.",
          "Member, Drafting Committee for the National Standard Operating Procedures (SOPs) for Children in Contact with Railways, Indian Railways (2014).",
          "Led organization-wide strengthening of Child Safeguarding Policy development and implementation within an international NGO, covering 10 partner networks and multiple field operations.",
          "Empanelled Trainer with leading government and institutional bodies, including National Institute of Public Cooperation and Child Development (NIPCCD), National Navodaya Leadership Institute (NNLI), District Child Protection Unit Delhi (DCPU), Special Juvenile Police Unit Delhi (SJPU), and Railway Protection Force (RPF).",
          "Editor of Trafficking and the Law — a knowledge resource on anti-trafficking legal frameworks and practice.",
          "Extensive experience in designing and delivering POSH training and capacity-building programmes for training institutes, corporate organizations, and law-enforcement agencies, including Government Railway Police (GRP).",
          "Extensive hands-on experience serving as Presiding Officer, Internal Committee (IC) Member, and External Member across diverse organizations — including corporates, NGOs, and government bodies — with responsibility for complaint handling, conducting inquiry proceedings, ensuring principles of natural justice, issuing recommendations, and maintaining statutory compliance under the POSH Act.",
        ],
      },
      {
        heading: "Areas of Expertise",
        items: [
          "End-to-end POSH implementation and compliance framework",
          "Constitution and strengthening of Internal Committee (IC)",
          "ICC Presiding Officer and External Member services",
          "Inquiry proceedings guidance and documentation",
          "Drafting POSH policies and SOPs",
          "Annual report and board disclosure compliance",
          "Employee and leadership sensitization workshops",
          "Specialized training for HR and IC members",
          "Support during inspections or complaint proceedings",
        ],
      },
      {
        heading: "Key Strengths",
        items: [
          "Victim-sensitive yet legally balanced approach",
          "Strong documentation and procedural clarity",
          "Practical implementation model (not just theoretical)",
          "Focus on prevention, not only redressal",
          "Culture-building interventions beyond compliance",
        ],
      },
      {
        heading: "Offerings to Organizations",
        items: [
          "End-to-end POSH compliance support",
          "Risk mitigation for management",
          "Strengthening of safe workplace culture",
          "Structured documentation systems",
          "Support in complex or sensitive cases",
        ],
      },
      {
        heading: "Contact / Availability",
        items: [
          "Trainings and workshops",
          "ICC External Member role",
          "Compliance support and advisory",
          "Policy consultation",
        ],
      },
    ],
  },
];

export default function PeopleSection() {
  return (
    <section id="people" className="w-full py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`${bebasNeue.className} text-5xl md:text-7xl text-white tracking-wide mb-4`}
          >
            Our People
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            Meet the dedicated professionals behind our mission.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {people.map((person, i) => (
            <PersonCard key={i} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}

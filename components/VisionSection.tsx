"use client";

import { Bebas_Neue, Oswald } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
});

export default function VisionSection() {
  const workItems = [
    {
      title: "Educational Support for Children",
      description:
        "We provide educational support to children from Dalit and other marginalized communities to ensure access to quality education and equal opportunities for growth and development.",
    },
    {
      title: "Women Help Groups",
      description:
        "We promote and support Women’s Self-Help Groups to empower women socially and economically, enabling sustainable and positive changes in their lives.",
    },
    {
      title: "Support for Physically Challenged",
      description:
        "We extend support to especially abled individuals, including assistance for participation in para-sports activities. We also promote economic sustainability by helping them access employment opportunities.",
    },
    {
      title: "Health for All – Dawa Mukta Bharat",
      description:
        "Under the “Dawa Mukta Bharat” campaign, we organize awareness programs, cleansing therapy camps, and naturopathy camps. These health camps are provided free of cost for specially abled individuals to ensure accessible and holistic healthcare for all.",
    },
  ];

  return (
    <section id="vision" className="w-full py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2
            className={`${bebasNeue.className} text-5xl md:text-7xl text-zinc-100 mb-6 tracking-wide`}
          >
            Welfare Justice for Challenging People
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto">
            Reaching out to the most marginalized and deprived communities
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-zinc-900/50 p-10 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <h3
              className={`${bebasNeue.className} text-4xl text-white mb-6 tracking-wide`}
            >
              Our Vision
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed">
              To build an inclusive and equitable society where marginalized,
              deprived, and especially abled individuals live with dignity,
              equal opportunities, and sustainable livelihoods.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-10 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <h3
              className={`${bebasNeue.className} text-4xl text-white mb-6 tracking-wide`}
            >
              Our Mission
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed">
              To empower disadvantaged communities through education, women’s
              empowerment, health initiatives, and livelihood support, ensuring
              holistic and long-term social transformation.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h3
            className={`${bebasNeue.className} text-4xl md:text-5xl text-white mb-8 tracking-wide`}
          >
            Our Team
          </h3>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Our team consists of dedicated social workers, educators, health
            professionals, and community volunteers who are committed to
            creating meaningful and sustainable change at the grassroots level.
          </p>
        </div>

        {/* Our Work Section */}
        <div>
          <h3
            className={`${bebasNeue.className} text-4xl md:text-5xl text-white mb-12 text-center tracking-wide`}
          >
            Our Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900/30 p-8 rounded-xl border border-zinc-800/50 hover:border-zinc-700 transition-all hover:bg-zinc-900/50"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`${oswald.className} text-4xl text-zinc-500 font-bold opacity-30`}
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <h4
                      className={`${oswald.className} text-2xl text-white mb-3 font-medium`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

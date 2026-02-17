"use client";

import { useEffect, useRef } from "react";

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.6; // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset scroll when reaching the end
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Placeholder gallery items - replace with actual images
  const galleryItems = [
    {
      image: "/galleryImages/img2.webp",
      caption: "Naturopathy Camp",
    },
    {
      image: "/galleryImages/img3.webp",
      caption: "Purple Fest Delhi 2025",
    },
    {
      image: "/galleryImages/img4.webp",
      caption: "Meet With Madam President",
    },
    { image: "/galleryImages/img5.webp", caption: "Expert Advice from Dr XYZ" },
    {
      image: "/galleryImages/Img6.webp",
      caption: "Ayurvedic Healing",
    },
    {
      image: "/galleryImages/Img7.webp",
      caption: "Natural Cleansing",
    },
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <section className="w-full py-24 bg-zinc-950 overflow-hidden">
      <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12 uppercase tracking-wider">
        Our Impact
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[400px] relative group">
            <div className="aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  // Fallback to a gradient if image doesn't exist
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.style.background =
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                }}
              />
            </div>
            <p className="text-zinc-400 text-sm mt-3 text-center px-2">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

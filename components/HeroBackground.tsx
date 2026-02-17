import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate opacity: starts at 0.3, fades to 0
      const startOpacity = 0.3;
      const opacity = Math.max(
        0,
        startOpacity * (1 - scrollY / (windowHeight * 0.8)),
      );

      if (imageRef.current) {
        imageRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden flex items-start justify-center bg-[#050505]"
    >
      <img
        ref={imageRef}
        src="/ngo_1.svg"
        alt="Background"
        className="w-full h-full object-cover opacity-30 transition-opacity duration-75 ease-linear will-change-opacity"
      />
      {/* Overlay gradient for better text readability at the bottom if needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] opacity-20" />
    </div>
  );
}

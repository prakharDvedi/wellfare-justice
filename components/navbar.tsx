import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/wellfare.svg"
              alt="Wellfare Justice Logo"
              className="h-10 w-auto"
            />
            <span
              className={`${bebasNeue.className} text-white text-2xl font-bold`}
            >
              Wellfare Justice
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <a
              href="https://www.linkedin.com/company/wellfare-justice-for-challenging-people/"
              className={`${bebasNeue.className} text-white text-xl tracking-wide hover:text-zinc-300 transition-colors`}
            >
              LinkedIn
            </a>
            <a
              href="#about"
              className={`${bebasNeue.className} text-white text-xl tracking-wide hover:text-zinc-300 transition-colors`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`${bebasNeue.className} text-white text-xl tracking-wide hover:text-zinc-300 transition-colors`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className={`${bebasNeue.className} text-7xl font-bold text-white`}>
        Wellfare Justice for Challenging people
      </div>
    </div>
  );
}

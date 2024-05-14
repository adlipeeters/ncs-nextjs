import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { Newspaper } from "@/components/Newspaper";
import PerfectSolution from "@/components/PerfectSolution";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Hero />
      <Newspaper />
      <PerfectSolution />
    </main>
  );
}

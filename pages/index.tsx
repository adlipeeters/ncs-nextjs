import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { Newspaper } from "@/components/Newspaper";
import PerfectSolution from "@/components/PerfectSolution";
import { Testimonials } from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import FrequentQuestions from "@/components/FrequentQuestions";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Hero />
      <Newspaper />
      <PerfectSolution />
      <Testimonials />
      <Pricing />
      <Features />
      <FrequentQuestions />
      <GetStarted />
      <ContactUs />
      <Footer />
    </main>
  );
}

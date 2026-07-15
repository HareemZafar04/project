import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Collections } from "@/components/Collections";
import { Process } from "@/components/Process";
import { Editorial } from "@/components/Editorial";
import { Bespoke } from "@/components/Bespoke";
import { Journal } from "@/components/Journal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Collections />
        <Process />
        <Editorial />
        <Bespoke />
        <Journal />
      </main>
      <Footer />
    </>
  );
}

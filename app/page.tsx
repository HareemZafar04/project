import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Collections } from "@/components/Collections";
import { Gallery } from "@/components/Gallery";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Editorial } from "@/components/Editorial";
import { Bespoke } from "@/components/Bespoke";
import { Journal } from "@/components/Journal";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Collections />
      <Gallery />
      <Process />
      <Testimonials />
      <Editorial />
      <Bespoke />
      <Journal />
    </>
  );
}

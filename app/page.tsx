import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import SelectedWork from "@/components/SelectedWork";
import SiteNav from "@/components/SiteNav";
import Skills from "@/components/Skills";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <SelectedWork />
        <Experience />
        <HowIWork />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}

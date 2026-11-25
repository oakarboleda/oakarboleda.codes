import Hero from "@/components/Hero";
import SiteNav from "@/components/SiteNav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />

        <section
          id="about"
          className="mx-auto max-w-4xl px-5 py-28 sm:px-8"
          aria-labelledby="about-heading"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-accent">
            ABOUT ME
          </p>
          <h2
            id="about-heading"
            className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Engineering{" "}
            <span className="about-accent italic">better</span> experiences
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            More about Oak coming soon — skills, projects, and the work behind
            the craft.
          </p>
        </section>

        <section id="skills" className="min-h-[40vh]" aria-label="Skills" />
        <section id="projects" className="min-h-[40vh]" aria-label="Projects" />
        <section
          id="experience"
          className="min-h-[40vh]"
          aria-label="Experience"
        />
        <section id="contact" className="min-h-[40vh]" aria-label="Contact" />
        <div id="resume" className="sr-only" aria-hidden />
      </main>
    </>
  );
}

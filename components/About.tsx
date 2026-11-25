import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28"
      aria-labelledby="about-heading"
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-accent">
        ABOUT ME
      </p>
      <div className="mt-4 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:gap-16">
        <div>
          <h2
            id="about-heading"
            className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {about.heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-sm text-foreground/80">{about.education}</p>
        </div>

        <aside className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
          <h3 className="font-serif text-xl font-medium text-foreground">
            Fast Facts
          </h3>
          <dl className="mt-6 space-y-5">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

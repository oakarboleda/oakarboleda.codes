import { selectedWork } from "@/data/portfolio";

export default function SelectedWork() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28"
      aria-labelledby="work-heading"
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-accent">
        CASE STUDIES
      </p>
      <h2
        id="work-heading"
        className="mt-4 max-w-2xl font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        Selected Engineering Work
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Real-world systems highlighting full-stack delivery, design systems,
        mobile platforms, and measurable product impact.
      </p>

      <div className="mt-14 flex flex-col gap-8">
        {selectedWork.map((item) => (
          <article
            key={item.number}
            className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 md:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                {item.eyebrow}
              </p>
              <span className="font-mono text-sm text-accent">{item.number}</span>
            </div>

            <h3 className="mt-4 max-w-3xl font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{item.role}</p>

            <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-foreground/90">
              <span className="mr-2 text-accent" aria-hidden>
                ✓
              </span>
              {item.highlight}
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="text-accent/70" aria-hidden>
                    —
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

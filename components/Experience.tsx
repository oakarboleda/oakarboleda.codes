import { experience, profile } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-surface/30"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent">
          EXPERIENCE
        </p>
        <h2
          id="experience-heading"
          className="mt-4 max-w-2xl font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Experience & Progressive Scope
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Over 10 years of increasing technical ownership, platform delivery,
          and cross-functional leadership.
        </p>

        <ol className="mt-14 space-y-10">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.dates}`}
              className="grid gap-4 border-b border-border pb-10 last:border-b-0 last:pb-0 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10"
            >
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {job.company}
                </h3>
                <p className="mt-1 text-sm text-muted">{job.dates}</p>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">{job.role}</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-2xl border border-border px-6 py-8 sm:px-8">
          <h3 className="font-serif text-2xl font-medium text-foreground">
            Looking for the complete history?
          </h3>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Download the full PDF for comprehensive role details, education, and
            credentials.
          </p>
          <a
            href={profile.resumeHref}
            download
            className="hero-cta-primary mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
          >
            Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

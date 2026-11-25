import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-surface/30"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent">
          EXPERTISE
        </p>
        <h2
          id="skills-heading"
          className="mt-4 max-w-2xl font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Technical Expertise
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          A senior full-stack toolkit honed over 10+ years shipping reliable web
          and mobile applications—grouped by core operational domains.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-border bg-background/40 p-6 sm:p-8"
            >
              <h3 className="font-serif text-xl font-medium text-foreground">
                {group.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{group.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/85"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

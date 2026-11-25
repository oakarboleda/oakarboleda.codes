import { principles } from "@/data/portfolio";

export default function HowIWork() {
  return (
    <section
      id="approach"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28"
      aria-labelledby="approach-heading"
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-accent">
        APPROACH
      </p>
      <h2
        id="approach-heading"
        className="mt-4 max-w-2xl font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        How I Work & Lead
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Senior engineering isn’t just about writing code—it’s about design
        systems that scale, security by default, accessible craft, and teams
        that ship with confidence.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {principles.map((item) => (
          <article
            key={item.number}
            className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8"
          >
            <p className="font-mono text-sm text-accent">{item.number}</p>
            <h3 className="mt-3 font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
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

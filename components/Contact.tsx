import { contact, profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-surface/30"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent">
          CONTACT
        </p>
        <h2
          id="contact-heading"
          className="mt-4 max-w-2xl font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          {contact.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {contact.body}
        </p>
        <p className="mt-3 text-sm text-foreground/80">{contact.cta}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hero-cta-primary inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
          >
            Get in Touch
          </a>
          <a
            href={profile.resumeHref}
            download
            className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-foreground/30 hover:bg-white/[0.03]"
          >
            View Resume (PDF)
          </a>
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Direct Email
            </dt>
            <dd className="mt-2">
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Location
            </dt>
            <dd className="mt-2 text-sm text-foreground">
              {profile.location} (Remote / Hybrid)
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Connect
            </dt>
            <dd className="mt-2 flex flex-wrap gap-4 text-sm">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-accent"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-accent"
              >
                GitHub ↗
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © 2026 {profile.name}. All rights reserved.
          </p>
          <p>Crafted with React, TypeScript & Next.js</p>
        </div>
      </footer>
    </section>
  );
}

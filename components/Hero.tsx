import { profile } from "@/data/portfolio";

const NAME = "Oak.";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-stage relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-28 sm:px-8"
      aria-label="Introduction"
    >
      <div className="hero-swing" aria-hidden>
        <div className="hero-lamp__fixture" />
        <div className="hero-lamp__shade" />
        <div className="hero-lamp__cone" />
      </div>

      <div className="hero-reveal" aria-hidden>
        <div className="hero-swing hero-swing--reveal">
          <div className="hero-reveal__counter">
            <div className="hero-reveal__stack">
              <span className="hero-name hero-name--lit">{NAME}</span>
              <p className="hero-reveal__ghost mt-5 text-lg font-medium tracking-tight sm:text-xl md:text-2xl">
                {profile.title}|
              </p>
              <p className="hero-reveal__ghost mt-5 max-w-lg text-sm leading-relaxed sm:text-base">
                {profile.headline}
              </p>
              <p className="hero-reveal__ghost mt-4 text-xs sm:text-sm">
                Focus / Location / Full-Stack
              </p>
              <div className="hero-reveal__ghost mt-9 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm">
                  View Selected Work
                  <span className="inline-block w-3.5" />
                </span>
                <span className="rounded-full px-5 py-2.5 text-sm">
                  View Resume (PDF)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <h1 className="hero-name hero-name--dim">{NAME}</h1>

        <p className="hero-role mt-5 font-sans text-lg font-medium tracking-tight sm:text-xl md:text-2xl">
          {profile.title}
          <span className="hero-cursor" aria-hidden>
            |
          </span>
        </p>

        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          {profile.headline}
        </p>

        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted sm:text-sm">
          {profile.focus.map((item, index) => (
            <span key={item.label} className="inline-flex items-center gap-3">
              {index > 0 ? (
                <span className="text-border" aria-hidden>
                  /
                </span>
              ) : null}
              <span>
                <span className="text-foreground/70">{item.label}:</span>{" "}
                {item.value}
              </span>
            </span>
          ))}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="hero-cta-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
          >
            View Selected Work
            <ArrowIcon />
          </a>
          <a
            href={profile.resumeHref}
            download
            className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-foreground/30 hover:bg-white/[0.03]"
          >
            View Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="-rotate-45"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

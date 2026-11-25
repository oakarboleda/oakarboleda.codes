const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="shrink-0 font-serif text-lg font-semibold tracking-tight text-foreground"
        >
          Oak
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden items-center gap-2 text-sm text-muted sm:inline-flex">
            <span
              className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--glow)]"
              aria-hidden
            />
            Available
          </span>

          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
            aria-label="Toggle color theme"
            title="Theme toggle coming soon"
          >
            <SunIcon />
          </button>

          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function DownloadIcon() {
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
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

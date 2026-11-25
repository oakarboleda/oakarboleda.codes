import { profile } from "@/data/portfolio";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#approach", label: "Approach" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
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
          {profile.shortName}
        </a>

        <ul className="hidden items-center gap-6 text-sm text-muted lg:flex">
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
            {profile.status}
          </span>

          <a
            href={profile.resumeHref}
            download
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

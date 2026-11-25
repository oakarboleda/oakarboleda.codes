import { stats } from "@/data/portfolio";

export default function StatsBar() {
  return (
    <section
      aria-label="Professional highlights"
      className="border-y border-border bg-surface/80"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col gap-1 px-5 py-6 sm:px-6"
          >
            <p className="font-serif text-lg font-medium tracking-tight text-foreground sm:text-xl">
              {stat.value}
            </p>
            <p className="text-xs leading-snug text-muted sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

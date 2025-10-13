import Section from "@/components/section"

const items = [
  {
    role: "Senior Frontend Engineer",
    org: "Highscale SaaS",
    period: "2023 — Present",
    points: [
      "Led migration to Next.js App Router; cut TTFB by 40%",
      "Drove a11y fixes to WCAG AA across the app",
      "Built design tokens and theming for dark mode",
    ],
  },
  {
    role: "Full-stack Engineer",
    org: "Growth Startup",
    period: "2021 — 2023",
    points: [
      "Implemented SSR caching and SWR for resilient UX",
      "Shipped data-intensive dashboards under 60 FPS",
      "Owned CI/CD and preview environments",
    ],
  },
  {
    role: "Frontend Engineer",
    org: "Studio",
    period: "2019 — 2021",
    points: [
      "Built component library and docs",
      "Introduced visual regression testing",
      "Mentored junior devs on performance",
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Experience</h2>
      <ol className="relative border-s border-border/60">
        {items.map((item, idx) => (
          <li key={idx} className="ms-6 pb-10 last:pb-0">
            <span className="absolute -start-2 mt-1 size-3 rounded-full bg-primary" aria-hidden="true" />
            <div className="rounded-lg border border-border/60 bg-card p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {item.role} · <span className="text-muted-foreground">{item.org}</span>
                </h3>
                <span className="text-xs text-muted-foreground">{item.period}</span>
              </div>
              <ul className="mt-3 list-disc ps-4 text-sm text-muted-foreground">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

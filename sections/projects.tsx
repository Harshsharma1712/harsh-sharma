import Section from "@/components/section"
import TiltCard from "@/components/tilt-card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Realtime Dashboard",
    desc: "Sub-50ms updates via server-sent streams and SWR cache sync.",
    skills: ["Next.js", "SWR", "Edge"],
    img: "/realtime-dashboard-ui.jpg",
    link: "#",
  },
  {
    title: "Design System",
    desc: "A11Y-first component kit with tokens, docs, and VRT.",
    skills: ["Design Tokens", "Testing", "Docs"],
    img: "/design-system-components.png",
    link: "#",
  },
  {
    title: "AI Dev Tools",
    desc: "AI-assisted code insights wired to Vercel AI SDK.",
    skills: ["AI SDK", "TypeScript", "DX"],
    img: "/developer-ai-tools.jpg",
    link: "#",
  },
]

export default function Projects() {
  return (
    <Section id="projects">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
        <Button variant="secondary" size="sm" asChild>
          <a href="#" aria-label="View all projects">
            View all
          </a>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <TiltCard key={p.title} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <Image
                src={p.img || "/placeholder.svg"}
                alt={`${p.title} preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 33vw, 100vw"
                priority={false}
              />
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border/60"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild size="sm">
                <a href={p.link} aria-label={`Open ${p.title}`}>
                  Open
                </a>
              </Button>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  )
}

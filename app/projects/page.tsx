import Section from "@/components/section"
import TiltCard from "@/components/tilt-card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Express-pro-structure",
    desc: "Make an npm package for Express.js developer to provide production ready setup and packages.",
    skills: ["JavaScript", "Node.js", "File management"],
    img: "/express-pro-structure.png",
    link: "https://github.com/Harshsharma1712/express-pro-structure#readme",
  },
  {
    title: "Reels Application",
    desc: "A short video streaming application built for managing video data in database.",
    skills: ["Next.js", "MongoDB", "ImageKit", "next-auth"],
    img: "/reels-app.png",
    link: "https://reels-app-rouge.vercel.app/",
  },
  {
    title: "Task Manager",
    desc: "A ToDo Application built to manage todos.",
    skills: ["Next.js", "Clerk", "Neon Postgres", "Drizzle ORM"],
    img: "/task-manager.png",
    link: "https://github.com/Harshsharma1712/task-manager#readme",
  },
]

export default function Projects() {
  return (
    <Section id="projects">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">All Projects</h2>
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

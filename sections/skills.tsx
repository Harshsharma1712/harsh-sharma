"use client"

import Section from "@/components/section"
import IconBadge from "@/components/icon-badge"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiJest,
  SiGithubactions,
  SiLighthouse,
} from "react-icons/si"
import { Accessibility, RefreshCw } from "lucide-react"

const skills = [
  { label: "Next.js", icon: SiNextdotjs },
  { label: "React", icon: SiReact },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Postgres", icon: SiPostgresql },
  { label: "Supabase", icon: SiSupabase },
  { label: "Prisma", icon: SiPrisma },
  { label: "Testing", icon: SiJest },
  { label: "CI/CD", icon: SiGithubactions },
  { label: "Web Vitals", icon: SiLighthouse },
  { label: "A11Y", icon: Accessibility },
  { label: "SWR", icon: RefreshCw },
]

export default function Skills() {
  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Core Skills</h2>
      <div className="relative overflow-hidden rounded-lg border border-border/60 bg-card">
        <div className="marquee flex gap-8 py-4">
          {Array.from({ length: 2 }).map((_, pass) => (
            <div className="flex gap-6 min-w-full shrink-0" key={pass}>
              {skills.map((s) => (
                <IconBadge key={`${pass}-${s.label}`} icon={s.icon} label={s.label} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee {
          animation: marquee-left 28s linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Section>
  )
}

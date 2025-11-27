"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Section from "@/components/section"
import IconBadge from "@/components/icon-badge"
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiExpress,
  SiFastapi,
  SiPostman,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { FaHtml5 } from "react-icons/fa"
import { SiCss3, SiCplusplus } from "react-icons/si"
import type { IconType } from "react-icons"

type SkillCategory = {
  title: string
  items: { name: string; icon: IconType }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
    ],
  },
]

export default function SkillsGrid() {
  return (
    <Section id="skills">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Technical Skills</h2>

      <div className="flex flex-col gap-6">
        {skillCategories.map((category) => (
          <Card
            key={category.title}
            className="border border-border/60 bg-card hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
            </CardHeader>

            <CardContent>
              {/* Responsive grid for better layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.items.map((skill) => (
                  <IconBadge key={skill.name} icon={skill.icon} label={skill.name} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

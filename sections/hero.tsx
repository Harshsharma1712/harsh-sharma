"use client"

import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import * as React from "react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { HeroTerminal } from "@/components/hero-terminal"


export default function Hero() {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rotX = (py - 0.5) * -8
    const rotY = (px - 0.5) * 8
    setTilt({ x: rotX, y: rotY })
  }

  return (
    <Section className="pt-12 md:pt-16">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <span>
            <ShimmerButton
              className="inline-flex items-center text-xs font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/60">
              Open to new opportunities
            </ShimmerButton>
          </span>
          <h1 className="text-pretty text-4xl md:text-5xl font-semibold leading-tight">
            I craft high-performance, delightful developer experiences.
          </h1>
          <p className="text-muted-foreground text-balance">
            Full-stack developer focused on backend engineering. I enjoy designing efficient backend systems, and exploring new technologies. As a fresher, I’m focused on growing through practical projects, open-source work, and solving engineering challenges.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="#projects" aria-label="View projects">
                See my work
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#contact" aria-label="Contact me">
                Let&apos;s talk
              </a>
            </Button>
          </div>
          <ul className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <SiNextdotjs className="size-7" />
            <BiLogoTypescript className="size-7" />
            <RiTailwindCssFill className="size-7" />
            <FaNodeJs className="size-7" />
            <SiExpress className="size-7" />
          </ul>
        </div>

        {/* Terminal Components */}
        <HeroTerminal />

      </div>
    </Section>
  )
}

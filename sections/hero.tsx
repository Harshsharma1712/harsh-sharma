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
            Full-stack engineer focused on shipping fast, accessible, and reliable web apps. I obsess over DX,
            performance budgets, and clean architecture.
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

        <div
          className="relative aspect-[4/3] rounded-xl border border-border/60"
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{ perspective: "1000px" }}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 200ms ease",
            }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(1200px 400px at 80% -20%, color-mix(in oklab, var(--color-primary), transparent 85%), transparent), radial-gradient(1000px 300px at -10% 110%, color-mix(in oklab, var(--color-chart-1), transparent 80%), transparent)",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-sm font-mono text-muted-foreground">Backend</div>
                  <div className="text-5xl font-semibold tracking-tight">Developer</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-border/70" />
          </div>
        </div>
      </div>
    </Section>
  )
}

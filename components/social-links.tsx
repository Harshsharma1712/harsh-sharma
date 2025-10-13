"use client"
import { Github, Linkedin, Mail } from "lucide-react"

type SocialLinksProps = {
  size?: number
  className?: string
  email?: string
  github?: string
  linkedin?: string
}

export default function SocialLinks({
  size = 18,
  className,
  email = "you@example.com",
  github = "https://github.com/yourusername",
  linkedin = "https://www.linkedin.com/in/yourusername/",
}: SocialLinksProps) {
  const linkClasses =
    "inline-flex items-center justify-center rounded-md border border-border/60 bg-card/50 hover:bg-card transition-colors h-8 w-8 text-muted-foreground hover:text-foreground"

  return (
    <div className={["flex items-center gap-2", className].filter(Boolean).join(" ")}>
      <a href={`mailto:${email}`} aria-label="Email" className={linkClasses}>
        <Mail size={size} aria-hidden="true" />
        <span className="sr-only">Email</span>
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={linkClasses}>
        <Github size={size} aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkClasses}>
        <Linkedin size={size} aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </a>
    </div>
  )
}

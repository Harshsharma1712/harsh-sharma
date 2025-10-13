"use client"

import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";

type SocialLinksProps = {
  size?: number
  className?: string
  email?: string
  github?: string
  linkedin?: string
  xaccount?: string
}

export default function SocialLinks({
  size = 18,
  className,
  email = "harshsharma17122005@gmail.com",
  github = "https://github.com/HarshSharma1712",
  linkedin = "https://www.linkedin.com/in/harshsharma0017/",
  xaccount = "https://x.com/teche_harsh"
}: SocialLinksProps) {
  const linkClasses =
    "inline-flex items-center justify-center rounded-md border border-border/60 bg-card/50 hover:bg-card transition-colors h-8 w-8 text-muted-foreground hover:text-foreground"

  return (
    <div className={["flex items-center gap-2", className].filter(Boolean).join(" ")}>
      <a href={`mailto:${email}`} aria-label="Email" className={linkClasses}>
        <MdOutlineEmail size={size} aria-hidden="true" />
        <span className="sr-only">Email</span>
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={linkClasses}>
        <FaGithub size={size} aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkClasses}>
        <CiLinkedin size={size} aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </a>

      <a href={xaccount} target="_blank" rel="noopener noreferrer" aria-label="xaccount" className={linkClasses}>
        <FaSquareXTwitter size={size} aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </a>
    </div>
  )
}

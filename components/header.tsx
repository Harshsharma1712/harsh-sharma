import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import SocialLinks from "./social-links"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-muted-foreground hover:text-foreground transition-colors"
        >
          {"<dev/>"} Harsh.exe
        </Link>
        <nav className="hidden md:flex items-center gap-3">
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          {/* <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </a> */}
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            skills
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <SocialLinks className="hidden md:flex" />
          <ThemeToggle />
          <Button asChild size="sm" className="font-mono">
            <a href="#contact" aria-label="Contact me">
              Hire me
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

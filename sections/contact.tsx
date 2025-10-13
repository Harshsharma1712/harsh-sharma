import Section from "@/components/section"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <Section id="contact" className="pb-24">
      <div className="rounded-xl border border-border/60 bg-card p-8 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Let&apos;s build something exceptional.</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          I partner with teams to craft fast, accessible, and maintainable products. Open to consulting and select
          full-time roles.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href="mailto:you@example.com" aria-label="Email me">
              Email me
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="Open LinkedIn">
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="Open GitHub">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}

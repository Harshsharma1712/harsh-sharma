import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <Section id="contact" className="pb-24">
      <div className="rounded-xl border border-border/60 bg-card p-8 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Let&apos;s build something exceptional.</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          I partner with teams to craft fast, accessible, and maintainable products.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href="mailto:harshsharma17122005@gmail.com" aria-label="Email me">
              Email me
              <MdOutlineMail />
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href="https://www.linkedin.com/in/harshsharma0017/" target="_blank" rel="noreferrer" aria-label="Open LinkedIn">
              LinkedIn
              <FaLinkedin />
            </a>
          </Button>
          
          <Button asChild variant="secondary">
            <a href="https://x.com/teche_harsh" target="_blank" rel="noreferrer" aria-label="Open GitHub">
              Twitter (X)
              <FaSquareXTwitter />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}

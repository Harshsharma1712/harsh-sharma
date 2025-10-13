import SocialLinks from "@/components/social-links"

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <p className="font-mono">Built with Next.js · Tailwind CSS</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

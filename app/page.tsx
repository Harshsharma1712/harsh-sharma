import Header from "@/components/header"
import Hero from "@/sections/hero"
import Projects from "@/sections/projects"
import Experience from "@/sections/experience"
import Contact from "@/sections/contact"
import Footer from "@/components/footer"
import AnimatedGrid from "@/components/animated-grid"
import SkillsGrid from "@/sections/skill-grid"
import { Particles } from "@/components/ui/particles"


export default function HomePage() {
  return (
    <main className="relative">
      {/* Ambient animated background container */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        {/* Particles behind all content */}
        <Particles className="absolute inset-0 w-full h-full" quantity={100} ease={80} /* etc props */ />
      </div>

      <Header />
      <Hero />
      <Projects />
      <SkillsGrid />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </main>
  )
}

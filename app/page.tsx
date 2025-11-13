import Header from "@/components/header"
import Hero from "@/sections/hero"
import Skills from "@/sections/skills"
import Projects from "@/sections/projects"
import Experience from "@/sections/experience"
import Contact from "@/sections/contact"
import Footer from "@/components/footer"
import AnimatedGrid from "@/components/animated-grid"

export default function HomePage() {
  return (
    <main className="relative">
      {/* Ambient animated background */}
      <AnimatedGrid />

      <Header />
      <Hero />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </main>
  )
}

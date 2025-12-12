import './App.css'
import { HeroSection } from '@/components/ui/sections/hero-section'
import { AboutSection } from '@/components/ui/sections/about-section'
import { SkillsSection } from '@/components/ui/sections/skills-section'
import { ContactSection } from '@/components/ui/sections/contact-section'
import { FeaturedProjectsSection } from '@/components/ui/sections/featured-projects-section'
import { FooterNavbar } from '@/components/ui/footer-navbar'
import { Layout } from '@/components/layout'

function App() {
  return (
    <Layout>
      <section id="hero" className="w-full max-w-full max-h-[calc(100vh-4rem)]">
        <HeroSection scrollDownIndicator={true} />
      </section>
      <section id="about" className="w-full max-w-full maxn-h-[calc(100vh-4rem)] flex">
        <AboutSection />
      </section>
      <section id="skills" className="w-full max-w-full min-h-[calc(100vh-4rem)] flex">
        <SkillsSection />
      </section>
      <section id="featured-projects" className="w-full max-w-full min-h-[calc(100vh-4rem)] flex">
        <FeaturedProjectsSection />
      </section>
      <section id="contact" className="w-full max-w-full min-h-[calc(100vh-4rem)] flex">
        <ContactSection />
      </section>
      <section id="footer" className="w-full max-w-full min-h-2xl flex">
        <FooterNavbar />
      </section>
    </Layout>
  )
}

export default App


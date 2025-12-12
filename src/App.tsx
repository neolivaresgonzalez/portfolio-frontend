import './App.css'
import { HeroSection } from '@/components/ui/hero-section'
import { AboutSection } from '@/components/ui/about-section'
import { SkillsSection } from '@/components/ui/skills-section'
import { ContactSection } from '@/components/ui/contact-section'
import { FeaturedProjectsSection } from '@/components/ui/featured-projects-section'
import { FooterNavbar } from '@/components/ui/footer-navbar'
import { Layout } from '@/components/layout'

function App() {
  return (
    <Layout>
      <section id="hero" className="w-full max-w-full min-h-screen flex">
        <HeroSection />
      </section>
      <section id="about" className="w-full max-w-full min-h-screen flex">
        <AboutSection />
      </section>
      <section id="skills" className="w-full max-w-full min-h-screen flex">
        <SkillsSection />
      </section>
      <section id="featured-projects" className="w-full max-w-full min-h-screen flex">
        <FeaturedProjectsSection />
      </section>
      <section id="contact" className="w-full max-w-full min-h-screen flex">
        <ContactSection />
      </section>
      <section id="footer" className="w-full max-w-full min-h-2xl flex">
        <FooterNavbar />
      </section>
    </Layout>
  )
}

export default App


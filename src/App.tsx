import './App.css'
import { HeaderNavbar } from '@/components/ui/header-navbar'
import { HeroSection } from '@/components/ui/hero-section'
import { AboutSection } from '@/components/ui/about-section'
import { SkillsSection } from '@/components/ui/skills-section'
import { ContactSection } from '@/components/ui/contact-section'
import { FeaturedProjectsSection } from '@/components/ui/featured-projects-section'
import { FooterNavbar } from '@/components/ui/footer-navbar'

function Portfolio() {
  return (
    <div className="flex flex-col gap-10 width-screen align-center justify-center">
      <HeaderNavbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ContactSection />
      <FooterNavbar />
    </div>
  )
}

function App() {
  return (
    <Portfolio />
  )
}

export default App

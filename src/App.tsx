import './App.css'
import { HeaderNavbar } from '@/components/ui/header-navbar'
import { HeroSection } from '@/components/ui/hero'
import { AboutSection } from '@/components/ui/about'
import { SkillsSection } from '@/components/ui/skills'
import { ContactSection } from '@/components/ui/contact'
import { FeaturedProjectsSection } from '@/components/ui/featured-projects'
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

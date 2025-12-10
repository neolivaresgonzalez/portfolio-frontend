import './App.css'
import { HeaderNavbar } from '@/components/header-navbar/header-navbar'
import { HeroSection } from '@/components/hero/hero'
import { AboutSection } from '@/components/about/about'
import { SkillsSection } from '@/components/skills/skills'
import { ContactSection } from '@/components/contact/contact'
import { ProjectsSection } from '@/components/projects/projects'
import { FooterNavbar } from '@/components/footer-navbar/footer-navbar'

function Portfolio() {
  return (
    <div className="flex flex-col gap-10 width-screen align-center justify-center">
      <HeaderNavbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
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

import { HeroSection } from '@/components/ui/sections/hero-section'
import { AboutSection } from '@/components/ui/sections/about-section'
import { SkillsSection } from '@/components/ui/sections/skills-section'
import { ContactSection } from '@/components/ui/sections/contact-section'
import { FeaturedProjectsSection } from '@/components/ui/sections/featured-projects-section'
import { CertificationsSection } from '@/components/ui/sections/certifications-section'
import { FooterNavbar } from '@/components/ui/modules/footer-navbar'

export function HomePage() {
    return (
        <>
            <section id="hero" className="w-full max-w-full">
                <HeroSection scrollDownIndicator={true} />
            </section>
            <section id="about" className="w-full max-w-full flex">
                <AboutSection />
            </section>
            <section id="skills" className="w-full max-w-full flex">
                <SkillsSection />
            </section>
            <section id="featured-projects" className="w-full max-w-full flex">
                <FeaturedProjectsSection />
            </section>
            <section id="certifications" className="w-full max-w-full flex">
                <CertificationsSection />
            </section>
            <section id="contact" className="w-full max-w-full flex">
                <ContactSection />
            </section>
            <section id="footer" className="w-full max-w-full flex">
                <FooterNavbar />
            </section>
        </>
    )
}

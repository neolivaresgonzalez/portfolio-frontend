import { HeroSection } from '@/components/ui/sections/hero-section'
import { AboutSection } from '@/components/ui/sections/about-section'
import { SkillsSection } from '@/components/ui/sections/skills-section'
import { ContactSection } from '@/components/ui/sections/contact-section'
import { FeaturedProjectsSection } from '@/components/ui/sections/featured-projects-section'
import { CertificationsSection } from '@/components/ui/sections/certifications-section'
import { FooterNavbar } from '@/components/ui/modules/footer-navbar'
import { ExperienceSection } from '@/components/ui/sections/experience-section'


interface SectionList {
    id: string
    component: React.ReactNode
}

const sections: SectionList[] = [
    {
        id: "hero",
        component: <HeroSection scrollDownIndicator={true} nextSectionId="about" />
    },
    {
        id: "about",
        component: <AboutSection scrollDownIndicator={true} nextSectionId="skills" />
    },
    {
        id: "skills",
        component: <SkillsSection scrollDownIndicator={true} nextSectionId="experience" />
    },
    {
        id: "experience",
        component: <ExperienceSection scrollDownIndicator={true} nextSectionId="featured-projects" />
    },
    {
        id: "featured-projects",
        component: <FeaturedProjectsSection scrollDownIndicator={true} nextSectionId="certifications" />
    },
    {
        id: "certifications",
        component: <CertificationsSection scrollDownIndicator={true} nextSectionId="contact" />
    },
    {
        id: "contact",
        component: <ContactSection scrollDownIndicator={false} nextSectionId="footer" />
    },
    {
        id: "footer",
        component: <FooterNavbar scrollDownIndicator={false} nextSectionId="" />
    }
]

export function HomePage() {
    return (
        <>
            {sections.map((section) => (
                <section id={section.id} className="w-full max-w-full">
                    {section.component}
                </section>
            ))}
        </>
    )
}

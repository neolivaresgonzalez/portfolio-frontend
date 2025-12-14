import { ExperiencesEducation } from "@/components/ui/modules/experiences-education"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import { SectionTitle } from "@/components/ui/modules/section-title"
import { ProfessionalSummary } from "@/components/ui/modules/professional-summary"


export function AboutSection() {
    return (
        <div id="about-section" className="flex flex-col min-h-[calc(100vh-4rem)]">
            <div id="about-section-title" className="flex justify-center w-full m-4 p-4">
                <SectionTitle title="About me" subtitle="Get to know more" />
            </div>
            <div id="about-section-content" className="flex flex-col justify-center w-full m-4 p-4 gap-4">
                <div id="about-section-content-professional-summary" className="flex h-full flex-row align-center justify-center">
                    <ProfessionalSummary />
                </div>
                <div id="about-section-content-experience-education" className="flex h-full flex-row align-center justify-center">
                    <ExperiencesEducation />
                </div>
            </div>
            <div id="about-section-scroll-indicator" className="flex flex-1 items-center justify-center">
                <SectionScrollDownIndicator enabled={true} nextSectionId="skills" />
            </div>
        </div>
    )
}
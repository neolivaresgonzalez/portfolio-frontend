import { ExperiencesEducation } from "@/components/ui/modules/experiences-education"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import { SectionTitle } from "@/components/ui/modules/section-title"
import { ProfessionalSummary } from "@/components/ui/modules/professional-summary"


export function AboutSection() {
    return (
        <div id="about-section" className="flex flex-col min-h-0 py-8 lg:py-16 w-full max-w-[100vw]n">
            <div id="about-section-title" className="flex justify-center w-full mb-8 px-4">
                <SectionTitle title="About me" subtitle="Get to know more" />
            </div>

            <div id="about-section-content" className="flex flex-1 flex-col justify-center gap-8 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
                <div id="about-section-content-professional-summary" className="flex justify-center w-full">
                    <ProfessionalSummary />
                </div>
                <div id="about-section-content-experience-education" className="flex justify-center w-full min-w-0">
                    <ExperiencesEducation />
                </div>
            </div>

            <div id="about-section-scroll-indicator" className="flex items-center justify-center mt-auto pt-8 pb-8 shrink-0">
                <SectionScrollDownIndicator enabled={true} nextSectionId="skills" />
            </div>
        </div>
    )
}
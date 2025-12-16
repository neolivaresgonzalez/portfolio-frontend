import { ExperiencesEducation } from "@/components/ui/modules/experiences-education"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import { SectionTitle } from "@/components/ui/modules/section-title"
import type { SectionProps } from "@/types/section-props"


export function ExperienceSection(props: SectionProps) {
    return (
        <div id="experience-section" className="flex flex-col w-full gap-4">
            <div id="experience-section-title" className="flex justify-center w-full">
                <SectionTitle title="Experience & Education" subtitle="Review my experience" />
            </div>

            <div id="experience-section-content" className="flex flex-col justify-center gap-4 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
                <div id="experience-section-content-experience-education" className="flex justify-center w-full">
                    <ExperiencesEducation />
                </div>
            </div>

            <div id="experience-section-scroll-indicator" className="flex items-center justify-center mt-auto pt-8 pb-8 shrink-0">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId={props.nextSectionId} />
            </div>
        </div>
    )
}
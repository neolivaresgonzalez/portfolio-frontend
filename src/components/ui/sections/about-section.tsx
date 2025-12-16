import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import { SectionTitle } from "@/components/ui/modules/section-title"
import { ProfessionalSummary } from "@/components/ui/modules/professional-summary"
import type { SectionProps } from "@/types/section-props"


export function AboutSection(props: SectionProps) {
    return (
        <div id="about-section" className="flex flex-col w-full gap-4">
            <div id="about-section-title" className="flex justify-center w-full">
                <SectionTitle title="About me" subtitle="Get to know more" />
            </div>

            <div id="about-section-content" className="flex flex-col justify-center gap-4 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
                <div id="about-section-content-professional-summary" className="flex justify-center w-full">
                    <ProfessionalSummary />
                </div>
            </div>

            <div id="about-section-scroll-indicator" className="flex items-center justify-center mt-auto pt-8 pb-8 shrink-0">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId={props.nextSectionId} />
            </div>
        </div>
    )
}
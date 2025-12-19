import { useEffect, useState } from "react"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import { SectionTitle } from "@/components/ui/modules/section-title"
import { ProfessionalSummary } from "@/components/ui/modules/professional-summary"
import type { SectionProps } from "@/types/section-props"
import { fetchAPI } from "@/lib/strapi"

export function AboutSection(props: SectionProps) {
    const [summary, setSummary] = useState<string>("");

    useEffect(() => {
        const loadHomePage = async () => {
            try {
                const res = await fetchAPI('/home-page');
                if (res.data?.professionalSummary) {
                    setSummary(res.data.professionalSummary);
                }
            } catch (error) {
                console.error("Failed to load home page data", error);
            }
        };
        loadHomePage();
    }, []);

    return (
        <div id="about-section" className="flex flex-col w-full gap-4">
            <div id="about-section-title" className="flex justify-center w-full">
                <SectionTitle title="About me" subtitle="Get to know more" />
            </div>

            <div id="about-section-content" className="flex flex-col justify-center gap-4 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
                <div id="about-section-content-professional-summary" className="flex justify-center w-full">
                    <ProfessionalSummary content={summary} />
                </div>
            </div>

            <div id="about-section-scroll-indicator" className="flex items-center justify-center mt-auto pt-8 pb-8 shrink-0">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId={props.nextSectionId} />
            </div>
        </div>
    )
}
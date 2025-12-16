import { Hero } from "@/components/ui/modules/hero"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import type { SectionProps } from "@/types/section-props"



export function HeroSection(props: SectionProps) {
    return (
        <div id="hero-section" className="flex flex-col w-full">
            {/* Main Content */}
            <div id="hero-section-content" className="flex items-center justify-center w-full px-4 py-12 md:py-0">
                <Hero />
            </div>

            <div id="hero-section-scroll-indicator" className="flex items-center justify-center pb-8">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId={props.nextSectionId} />
            </div>
        </div >
    )
}
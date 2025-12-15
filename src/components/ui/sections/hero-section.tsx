import { Hero } from "@/components/ui/shadcn-ui/hero"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import type { HeroSectionProps } from "@/types/hero-section"

export function HeroSection(props: HeroSectionProps) {
    return (
        <div id="hero-section" className="flex flex-col relative w-full">
            {/* Main Content */}
            <div id="hero-section-content" className="flex flex-1 items-center justify-center w-full px-4 py-12 md:py-0">
                <Hero />
            </div>

            <div id="hero-section-scroll-indicator" className="flex items-center justify-center pb-8">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId="about" />
            </div>
        </div >
    )
}
import { Hero } from "@/components/ui/shadcn-ui/hero"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import type { HeroSectionProps } from "@/types/hero-section"

export function HeroSection(props: HeroSectionProps) {
    return (
        <div id="hero-section" className="flex flex-col min-h-svh md:min-h-[calc(100vh-4rem)] relative w-full overflow-hidden">
            {/* Main Content */}
            <div id="hero-section-content" className="flex flex-1 items-center justify-center w-full px-4 py-12 md:py-0">
                <Hero />
            </div>

            {/* Scroll Indicator - Absolute but controlled */}
            <div id="hero-section-scroll-indicator" className="flex items-center justify-center pb-8 shrink-0 relative z-10">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId="about" />
            </div>
        </div >
    )
}
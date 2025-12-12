import { Hero } from "@/components/ui/hero"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import type { HeroSectionProps } from "@/types/hero-section"

export function HeroSection(props: HeroSectionProps) {
    return (
        <div id="hero-section" className="flex flex-col min-h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)]">
            <div id="hero-section-content" className="flex flex-1 justify-center w-full m-4 p-4">
                <Hero />
            </div>
            {/* <div id="hero-section-scroll-indicator" className="mt-auto justify-center pb-20"> */}
            <div id="hero-section-scroll-indicator" className="flex flex-1 items-center justify-center">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId="about" />
            </div>
        </div >
    )
}
import { useEffect, useState } from "react"
import { Hero } from "@/components/ui/modules/hero"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import type { SectionProps } from "@/types/section-props"
import { fetchAPI } from "@/lib/strapi"

interface HeroData {
    title: string;
    subtitle: string;
    image: {
        url: string;
    } | null;
}

export function HeroSection(props: SectionProps) {
    const [heroData, setHeroData] = useState<HeroData | null>(null);

    useEffect(() => {
        const loadHero = async () => {
            try {
                const res = await fetchAPI('/home-page', {
                    populate: ['hero.image']
                });

                if (res.data?.hero) {
                    setHeroData(res.data.hero);
                }
            } catch (error) {
                console.error("Failed to load hero data", error);
            }
        };
        loadHero();
    }, []);

    return (
        <div id="hero-section" className="flex flex-col w-full">
            {/* Main Content */}
            <div id="hero-section-content" className="flex items-center justify-center w-full px-4 py-12 md:py-0">
                <Hero
                    title={heroData?.title}
                    subtitle={heroData?.subtitle}
                    image={heroData?.image?.url ? `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${heroData.image.url}` : undefined}
                />
            </div>

            <div id="hero-section-scroll-indicator" className="flex items-center justify-center pb-8">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId={props.nextSectionId} />
            </div>
        </div >
    )
}
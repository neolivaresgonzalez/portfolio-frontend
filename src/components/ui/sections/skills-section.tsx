import { useEffect, useState } from "react";
import { SkillsGroup } from "@/components/ui/modules/skills-group";
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator";
import { SectionTitle } from "@/components/ui/modules/section-title";
import { Carousel } from "@/components/ui/modules/carousel";
import type { SectionProps } from "@/types/section-props"
import { fetchAPI } from "@/lib/strapi";

interface Skill {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    type: 'language' | 'framework' | 'library' | 'service' | 'infra' | 'tool' | 'soft-skill' | 'database';
    icon: {
        url: string;
    } | null
}

const TYPE_TITLE_MAP: Record<string, string> = {
    'language': 'Languages',
    'framework': 'Frameworks',
    'library': 'Libraries',
    'service': 'Services',
    'infra': 'Infrastructure',
    'tool': 'Tools',
    'soft-skill': 'Soft Skills',
    'database': 'Databases'
};

const ORDERED_TYPES = ['language', 'framework', 'database', 'tool', 'infra', 'soft-skill'];

export function SkillsSection(props: SectionProps) {
    const [skillsGroups, setSkillsGroups] = useState<{ title: string, skills: string[] }[]>([]);

    useEffect(() => {
        const loadSkills = async () => {
            try {
                const res = await fetchAPI('/skills', {
                    populate: ['icon'],
                    pagination: {
                        limit: 100 // Get all skills
                    }
                });

                if (res.data) {
                    const grouped: Record<string, string[]> = {};

                    res.data.forEach((item: Skill) => {
                        const type = item.type;
                        if (!grouped[type]) {
                            grouped[type] = [];
                        }
                        grouped[type].push(item.name);
                    });

                    // Transform to array with specific order
                    const groups = ORDERED_TYPES
                        .filter(type => grouped[type] && grouped[type].length > 0)
                        .map(type => ({
                            title: TYPE_TITLE_MAP[type] || type,
                            skills: grouped[type]
                        }));

                    setSkillsGroups(groups);
                }
            } catch (error) {
                console.error("Failed to load skills", error);
            }
        };

        loadSkills();
    }, []);

    if (skillsGroups.length === 0) return null;

    return (
        <div id="skills-section" className="flex flex-col min-h-0 py-8 lg:py-16 w-full max-w-[100vw] overflow-x-hidden">
            <div id="skills-section-title" className="flex justify-center w-full mb-8 px-4">
                <SectionTitle title="Skills" subtitle="Here are some of the skills I have" />
            </div>

            <div id="skills-section-content-container" className="flex flex-col justify-center items-center gap-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full min-w-0">
                <Carousel>
                    {skillsGroups.map((group, index) => (
                        <SkillsGroup key={`${group.title}-${index}`} title={group.title} skills={group.skills} />
                    ))}
                </Carousel>
            </div>

            <div id="skills-section-scroll-indicator" className="flex items-center justify-center mt-auto pt-8 pb-8 shrink-0">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId={props.nextSectionId} />
            </div>
        </div >
    )
}
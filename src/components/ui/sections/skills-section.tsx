import { SkillsGroup } from "@/components/ui/modules/skills-group";
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator";
import { SectionTitle } from "@/components/ui/modules/section-title";
import { Carousel } from "@/components/ui/modules/carousel";

export function SkillsSection() {
    const skillsGroups = [
        { title: "Languages", fake: 5 },
        { title: "Frameworks", fake: 7 },
        { title: "Tools", fake: 12 },
        { title: "Databases", fake: 4 },
        { title: "Cloud Platforms", fake: 3 },
        { title: "DevOps", fake: 10 },
    ];

    return (
        <div id="skills-section" className="flex flex-col min-h-[calc(100vh-4rem)]">
            <div id="skills-section-title" className="flex justify-center w-full m-4 p-4">
                <SectionTitle title="Skills & Experience" subtitle="Here are some of the skills I have" />
            </div>

            <div id="skills-section-content-container" className="flex flex-1 flex-col gap-10">
                <Carousel>
                    {skillsGroups.map((group, index) => (
                        <SkillsGroup key={`${group.title}-${index}`} title={group.title} fake={group.fake} />
                    ))}
                </Carousel>
            </div>

            <div id="skills-section-scroll-indicator" className="flex flex-1 items-center justify-center">
                <SectionScrollDownIndicator enabled={true} nextSectionId="featured-projects" />
            </div>
        </div >
    )
}
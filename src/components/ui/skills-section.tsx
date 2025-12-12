import { SkillsGroup } from "@/components/ui/skills-group";
import { ArrowDownIcon } from "@/components/ui/arrow-down";

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
        <div id="skills-section" className="flex flex-1 flex-col h-full m-0 p-0 min-h-screen gap-10">
            {/* 
                Section title
            */}
            <div id="about-section-title" className="flex flex-col">
                <div className="flex flex-col align-center justify-center">
                    <p className="flex text-2xl align-center justify-center">Here are some of the skills I have</p>
                    <p className="flex text-5xl font-bold align-center justify-center">Skills & Experience</p>
                </div>
            </div>

            {/* Carousel Container with Peek Effect */}
            <div id="skills-section-content-container" className="flex flex-col gap-10">
                <div
                    id="skills-section-content"
                    className="flex overflow-x-auto overflow-y-hidden gap-6 snap-x snap-mandatory scrollbar-hide max-w-full"

                >
                    {skillsGroups.map((group, index) => (
                        <SkillsGroup key={`${group.title}-${index}`} title={group.title} fake={group.fake} />
                    ))}
                </div>
            </div>

            <div id="skills-section-scroll-indicator" className="flex flex-row items-center justify-center">
                <ArrowDownIcon />
            </div>
        </div >
    )
}
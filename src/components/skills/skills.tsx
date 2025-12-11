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
        <div id="skills-section" className="flex flex-col h-full m-0 p-0 min-h-screen justify-between py-10">
            {/* 
                Section title
            */}
            <div id="skills-section-title" className="flex flex-col items-center justify-center gap-2">
                <p className="text-2xl text-center">Here are some of the skills I have</p>
                <p className="text-5xl font-bold text-center">Skills</p>
            </div>

            {/* Carousel Container with Peek Effect */}
            <div id="skills-section-content-container" className="relative w-full flex items-center justify-center">
                <div
                    id="skills-section-content"
                    className=" flex overflow-x-auto overflow-y-hidden gap-6 scroll-smooth snap-x snap-mandatory scrollbar-hide px-[15%] scroll-bar-width-none ms-overflow-style-none"

                >
                    {skillsGroups.map((group, index) => (
                        <SkillsGroup key={`${group.title}-${index}`} title={group.title} fake={group.fake} />
                    ))}
                </div>
            </div>

            <div id="skills-section-scroll-indicator" className="flex flex-row items-center justify-center">
                <ArrowDownIcon />
            </div>
        </div>
    )
}
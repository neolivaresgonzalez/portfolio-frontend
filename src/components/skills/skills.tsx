import { SkillsGroup } from "@/components/ui/skills-group";
import { ArrowDownIcon } from "@/components/ui/arrow-down";

export function SkillsSection() {
    return (
        <div id="skills-section" className="flex flex-col h-full m-0 p-0 min-h-screen justify-between py-10">
            {/* 
                Section title
            */}
            <div id="skills-section-title" className="flex flex-1 flex-col align-center justify-center">
                <p className="flex flex-1 text-2xl align-center justify-center">Here are some of the skills I have</p>
                <p className="flex flex-1 text-5xl font-bold align-center justify-center">Skills</p>
            </div>

            <div id="skills-section-content" className="flex flex-wrap flex-row h-full m-0 p-0 max-h-screen align-center justify-between gap-2">
                <SkillsGroup title="Languages" fake={5} />
                <SkillsGroup title="Frameworks" fake={7} />
                <SkillsGroup title="Tools" fake={3} />
                <SkillsGroup title="Platforms" fake={2} />
            </div>

            <div id="skills-section-scroll-indicator" className="flex  flex-row items-center justify-center">
                <ArrowDownIcon />
            </div>
        </div>
    )
}
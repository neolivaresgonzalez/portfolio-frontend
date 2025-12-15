import { SkillsGroup } from "@/components/ui/modules/skills-group";
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator";
import { SectionTitle } from "@/components/ui/modules/section-title";
import { Carousel } from "@/components/ui/modules/carousel";

export function SkillsSection() {
    const skillsGroups = [
        { title: "Languages", skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python", "SQL"] },
        { title: "Frameworks", skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"] },
        { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker"] },
        { title: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
        { title: "Cloud Platforms", skills: ["AWS", "Vercel", "DigitalOcean"] },
        { title: "DevOps", skills: ["CI/CD", "GitHub Actions", "Caddy", "Linux"] },
    ];

    return (
        <div id="skills-section" className="flex flex-col min-h-0 py-8 lg:py-16 w-full max-w-[100vw] overflow-x-hidden">
            <div id="skills-section-title" className="flex justify-center w-full mb-8 px-4">
                <SectionTitle title="Skills & Experience" subtitle="Here are some of the skills I have" />
            </div>

            <div id="skills-section-content-container" className="flex flex-1 flex-col justify-center items-center gap-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full min-w-0">
                <Carousel>
                    {skillsGroups.map((group, index) => (
                        <SkillsGroup key={`${group.title}-${index}`} title={group.title} skills={group.skills} />
                    ))}
                </Carousel>
            </div>

            <div id="skills-section-scroll-indicator" className="flex items-center justify-center mt-auto pt-8 pb-8 shrink-0">
                <SectionScrollDownIndicator enabled={true} nextSectionId="featured-projects" />
            </div>
        </div >
    )
}
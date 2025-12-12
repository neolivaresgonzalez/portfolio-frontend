import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import { ProjectItem } from "@/components/ui/project-item"
import { SectionTitle } from "@/components/ui/section-title";
import { Carousel } from "@/components/ui/carousel";

export function FeaturedProjectsSection() {
    const projects = [
        { title: "Fake project 1" },
        { title: "Fake project 2" },
        { title: "Fake project 3" },
        { title: "Fake project 4" },
        { title: "Fake project 5" },
    ];
    return (
        <div id="featured-projects-section" className="flex flex-1 flex-col gap-5">
            <div id="featured-projects-section-title" className="flex justify-center w-full m-4 p-4">
                <SectionTitle title="Featured projects" subtitle="Browse my featured projects" />
            </div>
            <div id="featured-projects-section-content-container" className="flex flex-1 flex-col gap-5">
                <Carousel>
                    {projects.map((project, index) => (
                        <ProjectItem key={`${project.title}-${index}`} title={project.title} />
                    ))}
                </Carousel>
            </div>

            <div id="featured-projects-section-scroll-indicator" className="flex flex-1 items-center justify-center">
                <SectionScrollDownIndicator enabled={true} nextSectionId="contact" />
            </div>
        </div>
    )
}
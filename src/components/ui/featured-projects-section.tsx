import { ArrowDownIcon } from "@/components/ui/icons/arrow-down"
import { ProjectItem } from "@/components/ui/project-item"

export function FeaturedProjectsSection() {
    const projects = [
        { title: "Fake project 1" },
        { title: "Fake project 2" },
        { title: "Fake project 3" },
        { title: "Fake project 4" },
        { title: "Fake project 5" },
    ];
    return (
        <div id="featured-projects-section" className="flex flex-1 flex-col h-full m-0 p-0 min-h-screen gap-10">
            {/* 
                Section title
            */}
            <div id="featured-projects-section-title" className="flex flex-col">
                <p className="text-2xl text-center">Browse my featured projects</p>
                <p className="text-5xl font-bold text-center">Projects</p>
            </div>

            {/* Carousel Container with Peek Effect */}
            <div id="featured-projects-section-content-container" className="flex flex-col gap-10">
                <div
                    id="featured-projects-section-content"
                    className="flex overflow-x-auto overflow-y-hidden gap-6 snap-x snap-mandatory scrollbar-hide max-w-full"

                >
                    {projects.map((project, index) => (
                        <ProjectItem key={`${project.title}-${index}`} title={project.title} />
                    ))}
                </div>
            </div>

            <div id="featured-projects-section-scroll-indicator" className="flex flex-row items-center justify-center">
                <ArrowDownIcon />
            </div>
        </div>
    )
}
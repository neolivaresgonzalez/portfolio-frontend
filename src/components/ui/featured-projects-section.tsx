import { ArrowDownIcon } from "@/components/ui/arrow-down"
import { ProjectItem } from "@/components/ui/project-item"

export function FeaturedProjectsSection() {
    const projects = [
        { title: "Fake project 1" },
        { title: "Fake project 2" },
        { title: "Fake project 3" },
        { title: "Fake project 4" },
        { title: "Fake project 5" },
        { title: "Fake project 6" },
    ];
    return (
        <div id="featured-projects-section" className="flex flex-col h-full m-0 p-0 min-h-screen justify-between py-10">
            {/* 
                Section title
            */}
            <div id="featured-projects-section-title" className="flex flex-col items-center justify-center gap-2">
                <p className="text-2xl text-center">Browse my featured projects</p>
                <p className="text-5xl font-bold text-center">Projects</p>
            </div>

            {/* Carousel Container with Peek Effect */}
            <div id="featured-projects-section-content-container" className="relative w-full flex items-center justify-center">
                <div
                    id="featured-projects-section-content"
                    className=" flex overflow-x-auto overflow-y-hidden gap-6 scroll-smooth snap-x snap-mandatory scrollbar-hide px-[15%] scroll-bar-width-none ms-overflow-style-none"

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
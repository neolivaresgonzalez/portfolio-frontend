import { useEffect, useState } from "react"

import { fetchAPI } from "@/lib/strapi"
import { ProjectItem } from "@/components/ui/modules/project-item"
import type { Project } from "@/components/ui/modules/project-item"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import { SectionTitle } from "@/components/ui/modules/section-title";
import type { SectionProps } from "@/types/section-props"

export function FeaturedProjectsSection(props: SectionProps) {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const loadFeatured = async () => {
            try {
                const res = await fetchAPI('/projects', {
                    locale: 'en',
                    filters: {
                        isFeatured: {
                            $eq: true
                        }
                    },
                    pagination: {
                        pageSize: 3
                    },
                    populate: ['coverImage', 'Stack', 'links'],
                    sort: ['order:asc', 'featuredSince:desc']
                });
                if (res.data) {
                    setProjects(res.data);
                }
            } catch (error) {
                console.error("Failed to load featured projects", error);
            }
        };
        loadFeatured();
    }, []);

    return (
        <div id="featured-projects-section" className="flex flex-col min-h-0 py-8 lg:py-16 w-full max-w-[100vw]">
            <div id="featured-projects-section-title" className="flex justify-center w-full mb-8 px-4">
                <SectionTitle title="Featured projects" subtitle="Browse my featured projects" />
            </div>
            <div id="featured-projects-section-content-container" className="flex flex-1 flex-col gap-5 min-h-0">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {projects.map((project) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            className="w-full h-full"
                        />
                    ))}
                </div>
            </div>

            <div id="featured-projects-section-scroll-indicator" className="flex items-center justify-center py-8 mt-auto shrink-0">
                <SectionScrollDownIndicator enabled={true} nextSectionId={props.nextSectionId} />
            </div>
        </div>
    )
}
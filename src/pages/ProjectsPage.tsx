import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { fetchAPI } from "@/lib/strapi"
import { ProjectItem } from "@/components/ui/modules/project-item"
import type { Project } from "@/components/ui/modules/project-item"
import { Input } from "@/components/ui/shadcn-ui/input"
import { Button } from "@/components/ui/shadcn-ui/button"
import { SectionTitle } from "@/components/ui/modules/section-title"
import { SpecialIcon } from "@/lib/icons"

export function ProjectsPage() {
    const { t, i18n } = useTranslation();
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [skills, setSkills] = useState<{ id: number; name: string; slug: string }[]>([]);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                // Fetch skills for filter
                const skillsRes = await fetchAPI('/skills', {
                    fields: ['name', 'slug'],
                    sort: ['name:asc'],
                    pagination: {
                        limit: 100
                    }
                });
                if (skillsRes.data) {
                    setSkills(skillsRes.data);
                }

                // Fetch projects
                const filters: any = {};
                if (searchQuery) {
                    filters.title = {
                        $containsi: searchQuery
                    };
                }
                if (selectedSkill) {
                    filters.Stack = {
                        slug: {
                            $eq: selectedSkill
                        }
                    };
                }

                const projectsRes = await fetchAPI('/projects', {
                    locale: i18n.language,
                    populate: ['coverImage', 'Stack', 'links'],
                    filters: filters,
                    sort: ['order:asc', 'featuredSince:desc']
                });

                if (projectsRes.data) {
                    setProjects(projectsRes.data);
                }
            } catch (error) {
                console.error("Failed to load projects", error);
            } finally {
                setIsLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            loadData();
        }, 300); // Debounce search

        return () => clearTimeout(timeoutId);
    }, [searchQuery, selectedSkill, i18n.language]);

    return (
        <div className="container mx-auto py-8 px-4 min-h-[calc(100vh-4rem)] flex flex-col gap-8">
            <SectionTitle
                title={t('projects')}
                subtitle="Explore my latest work, open source contributions, and experiments."
            />

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <Input
                    placeholder="Search projects by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm"
                />

                <div className="flex flex-wrap gap-2">
                    <Button
                        variant={selectedSkill === null ? "default" : "ghost"}
                        onClick={() => setSelectedSkill(null)}
                        size="sm"
                    >
                        All
                    </Button>
                    {skills.map((skill) => (
                        <Button
                            key={skill.id}
                            variant={selectedSkill === skill.slug ? "default" : "ghost"}
                            onClick={() => setSelectedSkill(skill.slug)}
                            size="sm"
                        >
                            <SpecialIcon name={skill.name} className="size-6" />
                            {skill.name}
                        </Button>
                    ))}
                </div>
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            ) : projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-muted-foreground">
                    No projects found matching your criteria.
                </div>
            )}
        </div>
    )
}

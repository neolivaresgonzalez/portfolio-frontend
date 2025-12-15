import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { fetchAPI } from "@/lib/strapi"
import { ProjectItem } from "@/components/ui/modules/project-item"
import type { Project } from "@/components/ui/modules/project-item"
import { Input } from "@/components/ui/shadcn-ui/input"
import { Button } from "@/components/ui/shadcn-ui/button"
import { SectionTitle } from "@/components/ui/modules/section-title"

export function ProjectsPage() {
    const { t, i18n } = useTranslation();
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [tags, setTags] = useState<{ id: number; name: string; slug: string }[]>([]);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                // Fetch tags for filter
                const tagsRes = await fetchAPI('/tags', {
                    populate: '*',
                    sort: ['name:asc']
                });
                if (tagsRes.data) {
                    setTags(tagsRes.data);
                }

                // Fetch projects
                const filters: any = {};
                if (searchQuery) {
                    filters.title = {
                        $containsi: searchQuery
                    };
                }
                if (selectedTag) {
                    filters.Stack = {
                        slug: {
                            $eq: selectedTag
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
    }, [searchQuery, selectedTag, i18n.language]);

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
                        variant={selectedTag === null ? "default" : "outline"}
                        onClick={() => setSelectedTag(null)}
                        size="sm"
                    >
                        All
                    </Button>
                    {tags.map((tag) => (
                        <Button
                            key={tag.id}
                            variant={selectedTag === tag.slug ? "default" : "outline"}
                            onClick={() => setSelectedTag(tag.slug)}
                            size="sm"
                        >
                            {tag.name}
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

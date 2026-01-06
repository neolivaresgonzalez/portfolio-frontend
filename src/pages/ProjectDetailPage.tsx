import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchAPI, getStrapiMedia } from "@/lib/strapi"
import type { Project } from "@/components/ui/modules/project-item"
import { Badge } from '@/components/ui/shadcn-ui/badge'
import ReactMarkdown from 'react-markdown'
import { Button } from "@/components/ui/shadcn-ui/button"
import { ExternalLink, ChevronLeft } from "lucide-react"
import { SpecialIcon } from "@/lib/icons"

export function ProjectDetailPage() {
    const { slug } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProject = async () => {
            if (!slug) return;
            setIsLoading(true);
            try {
                const res = await fetchAPI('/projects', {
                    filters: {
                        slug: {
                            $eq: slug
                        }
                    },
                    populate: ['coverImage', 'Stack', 'links']
                });

                if (res.data && res.data.length > 0) {
                    setProject(res.data[0]);
                }
            } catch (error) {
                console.error("Failed to load project details", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProject();
    }, [slug]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <Link to="/projects">
                    <Button variant="link" className="mt-4">Back to Projects</Button>
                </Link>
            </div>
        )
    }

    const heroUrl = getStrapiMedia(project.coverImage?.url || null);

    return (
        <div className="container mx-auto py-8 px-4 flex flex-col gap-8 min-h-[calc(100vh-4rem)]">
            <Link to="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ChevronLeft size={16} />
                Back to Projects
            </Link>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                {heroUrl ? (
                    <img src={heroUrl} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">No Image</div>
                )}
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-6">
                    <div>
                        <h1 className="text-4xl font-bold">{project.title}</h1>
                        {project.role && <p className="text-xl text-muted-foreground mt-2">{project.role}</p>}
                        <div className="flex flex-wrap gap-2 mt-4">
                            <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>{project.status}</Badge>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.Stack?.map(tech => (
                                <Badge key={tech.slug} variant="secondary" className="flex items-center gap-2">
                                    <SpecialIcon name={tech.name} className="size-6" />
                                    <p className="text-sm">{tech.name}</p>
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">About</h2>
                        <p className="text-justify whitespace-pre-wrap leading-relaxed text-muted-foreground">
                            {project.shortSummary}
                        </p>
                    </div>

                    {project.highlights && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Highlights</h2>
                            <div className="prose dark:prose-invert text-justify">
                                <ReactMarkdown>
                                    {project.highlights}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-full md:w-80 space-y-6">
                    <div className="p-6 border rounded-xl space-y-4">
                        <h3 className="font-semibold text-lg">Project Links</h3>
                        <div className="flex flex-col gap-3">
                            {project.links?.map((link) => {
                                const isRepo = link.kind === 'repo';
                                return (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button variant={isRepo ? "outline" : "default"} className="w-full justify-start gap-2">
                                            {isRepo ? (
                                                <SpecialIcon name={link.label} className="size-6" />
                                            ) : (
                                                <ExternalLink size={16} />
                                            )}
                                            {link.label}
                                        </Button>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

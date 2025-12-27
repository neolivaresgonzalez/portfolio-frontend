import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/shadcn-ui/card";
import { Button } from "@/components/ui/shadcn-ui/button";
import { Badge } from "@/components/ui/shadcn-ui/badge";
import { Link } from "react-router-dom";
import { getStrapiMedia } from "@/lib/strapi";
import { SpecialIcon } from "@/lib/icons";

export interface Project {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    shortSummary?: string;
    role?: string;
    highlights?: string;
    Stack?: {
        name: string;
        slug: string;
    }[];
    links?: {
        url: string;
        label: string;
        kind?: 'demo' | 'repo' | 'case-study' | 'other';
    }[];
    isFeatured?: boolean;
    featuredSince?: string;
    status?: 'active' | 'completed' | 'archived';
    order?: number;
    coverImage?: {
        url: string;
        alternativeText?: string;
    };
}

interface ProjectItemProps {
    project: Project;
    className?: string;
}

export function ProjectItem({ project, className }: ProjectItemProps) {
    const imageUrl = getStrapiMedia(project.coverImage?.url ?? null);

    return (
        <Card className={`snap-center shrink-0 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-muted/40 overflow-hidden group ${className || 'w-full max-w-md'}`}>
            <CardHeader className="p-0">
                {imageUrl ? (
                    <div className="w-full aspect-16/10 overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={project.coverImage?.alternativeText || project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ) : (
                    <div className="w-full aspect-16/10 bg-muted/20 flex items-center justify-center text-muted-foreground/40 border-b border-border/20">
                        <span className="text-sm font-medium">No Preview</span>
                    </div>
                )}
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-6 flex-1">
                <div className="space-y-2">
                    <CardTitle className="text-xl line-clamp-1">{project.title}</CardTitle>
                    {project.shortSummary && (
                        <CardDescription className="line-clamp-3">
                            {project.shortSummary}
                        </CardDescription>
                    )}
                </div>

                {project.Stack && project.Stack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {project.Stack.slice(0, 3).map((tag) => (
                            <Badge key={tag.slug} variant="secondary" className="flex items-center gap-2">
                                <SpecialIcon name={tag.name} className="size-6" />
                                <p className="text-xs md:text-sm">{tag.name}</p>

                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto flex gap-2">
                <Link to={`/projects/${project.slug}`} className="w-full">
                    <Button variant="default" className="w-full">See Details</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
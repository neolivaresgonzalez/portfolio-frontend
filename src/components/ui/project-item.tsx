import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardAction
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import projectThumbnail from "@/assets/profile.jpeg";

interface ProjectItemProps {
    title: string;
    fake?: number;
}

export function ProjectItem(props: ProjectItemProps) {
    return (
        <Card className="snap-center w-[40vw] shrink-0">
            <CardHeader className="flex">
                <img src={projectThumbnail} alt="Project Image" className="flex flex-1 keep-aspect-ratio w-[40vw] h-[40vh] object-cover rounded-xl" />
            </CardHeader>
            <CardContent className="flex flex-row flex-wrap gap-2">
                <CardTitle className="text-2xl text-center w-full">
                    <p>{props.title}</p>
                </CardTitle>
            </CardContent>
            <CardAction className="flex flex-row flex-wrap gap-2 w-full justify-center">
                <Button variant="outline">See more</Button>
                <Button variant="outline">GitHub</Button>
                <Button variant="outline">Live Demo</Button>
            </CardAction>
        </Card>
    )
}
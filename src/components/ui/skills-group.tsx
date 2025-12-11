import { SkillItem } from "@/components/ui/skill-item";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface SkillsGroupProps {
    title: string;
    fake?: number; // Number of fake skills to display (temporary)
}

export function SkillsGroup(props: SkillsGroupProps) {
    return (
        <Card className="snap-center w-[70vw] shrink-0">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row flex-wrap gap-2">
                {Array.from({ length: props.fake || 0 }).map((_, index) => (
                    <SkillItem key={index} />
                ))}
            </CardContent>
        </Card>
    )
}
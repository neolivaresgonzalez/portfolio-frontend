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
        <Card className="flex flex-col align-center justify-center">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap flex-row flex-shrink-1 align-center justify-center gap-1">
                {Array.from({ length: props.fake || 0 }).map((_, index) => (
                    <SkillItem key={index} />
                ))}
            </CardContent>
        </Card>
    )
}
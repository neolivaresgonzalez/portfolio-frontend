import { SkillItem } from "@/components/ui/modules/skill-item";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/shadcn-ui/card";

interface SkillsGroupProps {
    title: string;
    fake?: number; // Number of fake skills to display (temporary)
}

export function SkillsGroup(props: SkillsGroupProps) {
    return (
        <Card id="skills-group" className="snap-center w-full max-w-4xl max-h- shrink-0">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row flex-wrap gap-2">
                {Array.from({ length: props.fake || 0 }).map((_, index) => (
                    <SkillItem key={index} title="Skill name" />
                ))}
            </CardContent>
        </Card>
    )
}
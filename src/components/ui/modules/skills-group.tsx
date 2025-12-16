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
    skills?: string[];
}

export function SkillsGroup(props: SkillsGroupProps) {
    return (
        <Card id="skills-group" className="snap-center w-[75vw] max-w-sm shrink-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-muted/40 group h-full">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold tracking-tight">{props.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row flex-wrap gap-2 pt-0">
                {props.skills && props.skills.length > 0 ? (
                    props.skills.map((skill, index) => (
                        <SkillItem key={index} title={skill} />
                    ))
                ) : (
                    Array.from({ length: props.fake || 0 }).map((_, index) => (
                        <SkillItem key={index} title="Skill Name" />
                    ))
                )}
            </CardContent>
        </Card>
    )
}
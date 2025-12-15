import { Badge } from "@/components/ui/shadcn-ui/badge"
import { SkillIcon } from "@/lib/icons"
import type { SkillItemProps } from "@/types/skill-item"

export function SkillItem(props: SkillItemProps) {
    const title = props.title || "Skill";
    return (
        <Badge variant="secondary" className="text-sm py-1 px-3 gap-2 hover:bg-secondary/80 transition-colors cursor-default">
            <SkillIcon name={title} className="w-4 h-4" />
            <span>{title}</span>
        </Badge>
    )
}
import {
    Item,
    ItemMedia,
    ItemTitle,
    ItemDescription,
    ItemFooter,
} from "@/components/ui/shadcn-ui/item"
import { BadgeCheck } from "lucide-react"
import type { SkillItemProps } from "@/types/skill-item"

export function SkillItem(props: SkillItemProps) {
    return (
        <Item variant="default" className="shrink-0">
            <ItemMedia>
                <BadgeCheck />
            </ItemMedia>
            <ItemTitle className="text-sm shrink-0">
                {props.title || "Skill name"}
            </ItemTitle>
            <ItemFooter>
                <ItemDescription className="text-xs shrink-0">
                    {props.level && props.level}
                </ItemDescription>
            </ItemFooter>
        </Item>
    )
}
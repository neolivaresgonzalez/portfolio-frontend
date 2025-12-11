import {
    Item,
    ItemMedia,
    ItemTitle,
    ItemDescription,
    ItemFooter,
} from "@/components/ui/item"
import { BadgeCheck } from "lucide-react"

export function SkillItem() {
    return (
        <Item variant="default" className="shrink-0">
            <ItemMedia>
                <BadgeCheck />
            </ItemMedia>
            <ItemTitle className="text-sm shrink-0">
                Skill name
            </ItemTitle>
            <ItemFooter>
                <ItemDescription className="text-xs shrink-0">
                    Level
                </ItemDescription>
            </ItemFooter>
        </Item>
    )
}
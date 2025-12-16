import {
    Item,
    ItemContent
} from "@/components/ui/shadcn-ui/item";

import { SpecialIcon } from "@/lib/icons";
import type { ContactChannelProps } from "@/types/contact-channel-card";

export function ContactChannel(props: ContactChannelProps) {
    return (
        <a
            href={props.url}
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Item>
                <ItemContent className="flex flex-row items-center justify-center">
                    <div className="flex items-center justify-center">
                        <SpecialIcon name={props.kind} className="size-7" />
                    </div>
                    <div>
                        {
                            props.text ? (
                                <p className="text-xs sm:text-sm md:text-md lg:text-lg">{props.value}</p>
                            ) : null
                        }
                    </div>
                </ItemContent>
            </Item>
        </a>
    )
}
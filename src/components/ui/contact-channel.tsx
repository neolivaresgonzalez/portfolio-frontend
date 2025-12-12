import {
    Item,
    ItemContent
} from "@/components/ui/item";
import { Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons/linkedin";
import { GithubIcon } from "@/components/ui/icons/github";

interface ContactChannelProps {
    type: "email" | "phone" | "linkedin" | "github";
    value: string;
}

export function ContactChannel(props: ContactChannelProps) {
    return (
        <Item>
            <ItemContent className="flex flex-row gap-2 justify-center">
                <div className="flex">
                    {
                        props.type === "email" ? (
                            <Mail />
                        ) : props.type === "phone" ? (
                            <Phone />
                        ) : props.type === "linkedin" ? (
                            <LinkedinIcon />
                        ) : props.type === "github" ? (
                            <GithubIcon />
                        ) : null
                    }
                </div>
                <p className="text-lg">{props.value}</p>
            </ItemContent>
        </Item>
    )
}
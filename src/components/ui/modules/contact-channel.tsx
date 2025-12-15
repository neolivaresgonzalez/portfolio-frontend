import {
    Item,
    ItemContent
} from "@/components/ui/shadcn-ui/item";
import { Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons/linkedin";
import { GithubIcon } from "@/components/ui/icons/github";
import type { ContactChannelProps } from "@/types/contact-channel-card";

export function ContactChannel(props: ContactChannelProps) {
    return (
        <a
            href={props.url}
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Item className="items-center justify-center">
                <ItemContent>
                    <div>
                        {
                            props.kind === "email" ? (
                                <Mail />
                            ) : props.kind === "phone" ? (
                                <Phone />
                            ) : props.kind === "linkedin" ? (
                                <LinkedinIcon />
                            ) : props.kind === "github" ? (
                                <GithubIcon />
                            ) : null
                        }
                    </div>
                    <div>
                        {
                            props.text ? (
                                <p className="text-sm md:text-md lg:text-lg">{props.value}</p>
                            ) : null
                        }
                    </div>
                </ItemContent>
            </Item>
        </a>
    )
}
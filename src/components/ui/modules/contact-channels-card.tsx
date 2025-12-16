import {
    Card,
    CardContent
} from "@/components/ui/shadcn-ui/card";
import { ContactChannel } from "./contact-channel";
import type { ContactChannelsProps } from "@/types/contact-channel-card";



export function ContactChannels(props: ContactChannelsProps) {
    return (
        <Card className="w-full">
            <CardContent>
                {
                    props.channels.map((channel, index) => (
                        <ContactChannel
                            key={index}
                            kind={channel.kind}
                            value={channel.value}
                            url={channel.url}
                            text={channel.text}
                        />
                    ))
                }
            </CardContent>
        </Card>
    )
}
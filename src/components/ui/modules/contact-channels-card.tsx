import {
    Card,
    CardContent
} from "@/components/ui/shadcn-ui/card";
import { ContactChannel } from "./contact-channel";
import type { ContactChannelsProps } from "@/types/contact-channel-card";



export function ContactChannels(props: ContactChannelsProps) {
    return (
        <Card className="w-full pl-10 pr-10">
            <CardContent className="flex flex-row flex-wrap gap-5 justify-center">
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
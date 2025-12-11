import {
    Card,
    CardContent
} from "@/components/ui/card";
import { ContactChannel } from "./contact-channel";

export function ContactChannels() {
    return (
        <Card className="w-full pl-10 pr-10">
            <CardContent className="flex flex-row flex-wrap gap-5 justify-center">
                <ContactChannel type="email" value="email@email.com" />
                <ContactChannel type="phone" value="(123) 456-7890" />
                <ContactChannel type="linkedin" value="linkedin.com/in/username" />
                <ContactChannel type="github" value="github.com/username" />
            </CardContent>
        </Card>
    )
}
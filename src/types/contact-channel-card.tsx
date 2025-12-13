export interface ContactChannelsProps {
    channels: ContactChannelProps[];
}

export interface ContactChannelProps {
    kind: "email" | "phone" | "linkedin" | "github";
    value: string;
    url?: string;
    text?: boolean;
}
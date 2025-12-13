import { ContactChannels } from "@/components/ui/contact-channels-card"
import { ContactForm } from "@/components/ui/forms/contact-form"
import type { ContactChannelProps } from "@/types/contact-channel-card"
import { SectionTitle } from "../section-title"

const CONTACT_CHANNELS: ContactChannelProps[] = [
    {
        kind: "email",
        value: "nolivares.work@gmail.com",
        url: "mailto:nolivares.work@gmail.com",
        text: true
    },
    {
        kind: "phone",
        value: "+1 (123) 456-7890",
        url: "tel:+11234567890",
        text: true
    },
    {
        kind: "linkedin",
        value: "linkedin.com/in/ne-olivaresgonzalez",
        url: "https://linkedin.com/in/ne-olivaresgonzalez",
        text: true
    },
    {
        kind: "github",
        value: "github.com/neolivaresgonzalez",
        url: "https://github.com/neolivaresgonzalez",
        text: true
    }
]

export function ContactSection() {
    return (
        <div id="contact-section" className="flex flex-col">
            <div id="contact-section-title" className="flex justify-center w-full m-4 p-4">
                <SectionTitle title="Contact me" subtitle="Get in touch" />
            </div>
            <div id="contact-section-content" className="flex flex-col justify-center w-full m-4 p-4 gap-4">
                <div id="contact-section-content-contact-channels" className="flex h-full flex-row align-center justify-center">
                    <ContactChannels channels={CONTACT_CHANNELS} />
                </div>
                <div id="contact-section-content-contact-form" className="flex h-full flex-row align-center justify-center">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
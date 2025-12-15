import { ContactChannels } from "@/components/ui/modules/contact-channels-card"
import { ContactForm } from "@/components/ui/forms/contact-form"
import type { ContactChannelProps } from "@/types/contact-channel-card"
import { SectionTitle } from "../modules/section-title"

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
        <div id="contact-section" className="flex flex-col min-h-0 py-8 lg:py-16 w-full max-w-[100vw]">
            <div id="contact-section-title" className="flex justify-center w-full mb-8 px-4">
                <SectionTitle title="Contact me" subtitle="Get in touch" />
            </div>

            <div id="contact-section-content" className="flex flex-1 flex-col justify-center items-center gap-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full min-w-0">
                <div id="contact-section-content-contact-channels" className="flex flex-col items-center justify-center w-full max-w-4xl">
                    <ContactChannels channels={CONTACT_CHANNELS} />
                </div>
                <div id="contact-section-content-contact-form" className="flex flex-col items-center justify-center w-full max-w-xl">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
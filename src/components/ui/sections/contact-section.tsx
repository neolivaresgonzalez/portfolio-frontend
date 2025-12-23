import { ContactChannels } from "@/components/ui/modules/contact-channels-card"
import { ContactForm } from "@/components/ui/forms/contact-form"
import type { ContactChannelProps } from "@/types/contact-channel-card"
import { SectionTitle } from "../modules/section-title"
import type { SectionProps } from "@/types/section-props"
import { SectionScrollDownIndicator } from "../icons/section-scroll-down-indicator"

export const CONTACT_CHANNELS: ContactChannelProps[] = [
    {
        kind: "email",
        value: "nolivares.work@gmail.com",
        url: "mailto:nolivares.work@gmail.com",
        text: true
    },
    {
        kind: "phone",
        value: "+1 (647) 303-6908",
        url: "https://wa.link/r0hlgk",
        text: true
    },
    {
        kind: "linkedin",
        value: "LinkedIn Profile",
        url: "https://linkedin.com/in/ne-olivaresgonzalez",
        text: true
    },
    {
        kind: "github",
        value: "GitHub Profile",
        url: "https://github.com/neolivaresgonzalez",
        text: true
    }
]

export function ContactSection(props: SectionProps) {
    return (
        <div id="contact-section" className="flex flex-col min-h-0 py-8 lg:py-16 w-full max-w-[100vw]">
            <div id="contact-section-title" className="flex justify-center w-full mb-8 px-4">
                <SectionTitle title="Contact me" subtitle="Get in touch" />
            </div>

            <div id="contact-section-content" className="flex flex-1 flex-col justify-center items-center gap-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full min-w-0">
                <div id="contact-section-content-contact-channels" className="flex flex-col items-center justify-center w-full">
                    <ContactChannels channels={CONTACT_CHANNELS} />
                </div>
                <div id="contact-section-content-contact-form" className="flex flex-col items-center justify-center w-full">
                    <ContactForm />
                </div>
            </div>

            <div id="contact-section-scroll-indicator" className="flex items-center justify-center mt-auto pt-8 pb-8 shrink-0">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId={props.nextSectionId} />
            </div>
        </div>
    )
}
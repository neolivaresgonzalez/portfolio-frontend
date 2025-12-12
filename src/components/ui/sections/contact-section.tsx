import { ContactChannels } from "@/components/ui/contact-channels-card"
import { ContactForm } from "@/components/ui/forms/contact-form"
import { SectionTitle } from "../section-title"

export function ContactSection() {
    return (
        <div id="contact-section" className="flex flex-col">
            <div id="contact-section-title" className="flex justify-center w-full m-4 p-4">
                <SectionTitle title="Contact me" subtitle="Get in touch" />
            </div>
            <div id="contact-section-content" className="flex flex-col justify-center w-full m-4 p-4 gap-4">
                <div id="contact-section-content-contact-channels" className="flex h-full flex-row align-center justify-center">
                    <ContactChannels />
                </div>
                <div id="contact-section-content-contact-form" className="flex h-full flex-row align-center justify-center">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
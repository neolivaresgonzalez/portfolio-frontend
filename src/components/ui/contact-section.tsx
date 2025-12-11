import { ContactChannels } from "@/components/ui/contact-channels-card"
import { ContactForm } from "@/components/ui/contact-form"

export function ContactSection() {
    return (
        <div id="contact-section" className="flex flex-1 flex-col h-full m-0 p-0 min-h-screen gap-10">
            {/* 
                Section title
            */}
            <div id="contact-section-title" className="flex flex-1 flex-col">
                <div className="flex flex-1 flex-col align-center justify-center">
                    <p className="flex text-2xl align-center justify-center">Get in touch</p>
                    <p className="flex text-5xl font-bold align-center justify-center">Contact me</p>
                </div>
            </div>
            {/* 
                Section content
            */}
            <div id="contact-section-content" className="flex flex-1 flex-col gap-10">
                {/* 
                    Section content Contact channels
                */}
                <div id="contact-section-content-contact-channels" className="flex flex-1 flex-col align-center justify-center">
                    <ContactChannels />
                </div>
                {/* 
                    Section content Contact form
                */}
                <div id="contact-section-content-contact-form" className="flex flex-row align-center justify-center">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
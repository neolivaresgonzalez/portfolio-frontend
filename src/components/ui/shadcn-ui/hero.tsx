import profilePicture from "@/assets/profile.jpeg"
import { Button } from "@/components/ui/shadcn-ui/button"
import type { ContactChannelProps } from "@/types/contact-channel-card"
import { ContactChannel } from "@/components/ui/modules/contact-channel"
import { DownloadResumeModule } from "@/components/ui/modules/download-resume"

const CONTACT_CHANNELS: ContactChannelProps[] = [
    {
        kind: "linkedin",
        value: "linkedin.com/in/ne-olivaresgonzalez",
        url: "https://linkedin.com/in/ne-olivaresgonzalez",
        text: false
    },
    {
        kind: "github",
        value: "github.com/neolivaresgonzalez",
        url: "https://github.com/neolivaresgonzalez",
        text: false
    },
    {
        kind: "email",
        value: "nicolasolivares@gmail.com",
        url: "mailto:nicolasolivares@gmail.com",
        text: false,
    },
    {
        kind: "phone",
        value: "+1 (123) 456-7890",
        url: "tel:+11234567890",
        text: false,
    },
]

export function Hero() {

    return (
        <div className="flex flex-row flex-wrap">
            <div id="hero-section-content-profile-picture" className="flex items-center justify-center">
                <img src={profilePicture} className="flex-1 max-w-2xs h-auto aspect-square object-cover rounded-full m-4" alt="Profile Picture" />
            </div>
            <div id="hero-section-main-info" className="flex flex-1 flex-col items-center justify-center gap-5">
                <div id="hero-section-main-info-text" className="flex flex-1 flex-col items-center justify-center gap-2">
                    <p className="text-xl text-center">Hello I'm</p>
                    <h1 className="text-3xl font-bold text-center">Nicolás Olivares</h1>
                    <p className="text-lg font-bold text-center">Software Engineer</p>
                </div>
                <div id="hero-section-main-info-buttons" className="flex flex-1 flex-row items-center justify-center gap-4">
                    <DownloadResumeModule side="left" />
                    <Button variant="default" onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop || 0, behavior: "smooth" })} className="">Contact Me</Button>
                </div>
                <div id="hero-section-main-info-socials" className="flex flex-1 flex-row items-center justify-center gap-4">
                    {
                        CONTACT_CHANNELS.map((channel, index) => (
                            <ContactChannel
                                key={index}
                                kind={channel.kind}
                                value={channel.value}
                                url={channel.url}
                                text={channel.text}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
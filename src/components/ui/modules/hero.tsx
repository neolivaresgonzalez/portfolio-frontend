import profilePicture from "@/assets/profile.jpeg"
import { Button } from "@/components/ui/shadcn-ui/button"
import type { ContactChannelProps } from "@/types/contact-channel-card"
import { ContactChannel } from "@/components/ui/modules/contact-channel"
import { DownloadResumeModule } from "@/components/ui/modules/download-resume"
import { SpecialIcon } from "@/lib/icons"

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
        <div className="flex flex-col sm:flex-row w-full max-w-full justify-evenly items-center gap-4 p-4">
            <div id="hero-section-content-profile-picture" className="flex items-center justify-center sm:w-1/2 gap-2">
                <img src={profilePicture} className="w-full max-w-3xs h-auto aspect-square rounded-full" alt="handsome guy with Toronto skyline in the background" />
            </div>
            <div id="hero-section-main-info" className="flex w-full sm:w-1/2 flex-col items-center justify-center gap-5">
                <div id="hero-section-main-info-text" className="flex w-full flex-col items-center justify-center gap-2">
                    <div className="flex flex-col items-center justify-center size-16 md:size-28">
                        <SpecialIcon name="logo" className="p-2" />
                    </div>
                    <p className="text-xl text-center">Welcome to my portfolio</p>
                    <p className="text-3xl font-bold text-center">Nicolás Olivares</p>
                    <p className="text-3lg font-semibold text-center">Software Engineer | Technical Leader | Project Manager</p>
                </div>
                <div id="hero-section-main-info-buttons" className="flex w-full flex-col sm:flex-row items-center justify-center gap-4">
                    <DownloadResumeModule side="left" />
                    <Button variant="default" onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop || 0, behavior: "smooth" })} className="">Contact Me</Button>
                </div>
                <div id="hero-section-main-info-socials" className="flex w-full flex-row flex-wrap items-center justify-center gap-1">
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
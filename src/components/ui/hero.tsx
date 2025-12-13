import profilePicture from "@/assets/profile.jpeg"
import { Button } from "@/components/ui/button"
import { LinkedinIcon } from "@/components/ui/icons/linkedin"
import { GithubIcon } from "@/components/ui/icons/github"

export function Hero() {
    return (
        <div className="flex flex-row flex-wrap">
            <div id="hero-section-content-profile-picture" className="flex items-center justify-center">
                <img src={profilePicture} className="w-full max-w-xs h-auto aspect-square object-cover rounded-full m-4" alt="Profile Picture" />
            </div>
            <div id="hero-section-main-info" className="flex flex-col items-center justify-center gap-5">
                <div id="hero-section-main-info-text" className="flex flex-col items-center justify-center gap-2">
                    <p className="text-xl text-center">Hello I'm</p>
                    <p className="text-5xl font-bold text-center">Nicolás Olivares</p>
                    <p className="text-2xl font-bold text-center">Software Engineer</p>
                </div>
                <div id="hero-section-main-info-buttons" className="flex flex-row items-center justify-center gap-4">
                    <Button variant="default">Download Resume</Button>
                    <Button variant="default">Contact Me</Button>
                </div>
                <div id="hero-section-main-info-socials" className="flex flex-row items-center justify-center gap-4">
                    <LinkedinIcon className="w-8 h-8" />
                    <GithubIcon className="w-8 h-8" />
                </div>
            </div>
        </div>
    )
}
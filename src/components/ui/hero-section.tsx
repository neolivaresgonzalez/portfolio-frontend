import profilePicture from "@/assets/profile.jpeg"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "@/components/ui/arrow-down"
import { LinkedinIcon } from "@/components/ui/linkedin"
import { GithubIcon } from "@/components/ui/github"

export function HeroSection() {
    return (
        <div id="hero-section" className="flex flex-col h-full m-0 p-0 min-h-screen justify-between py-10">

            <div id="hero-section-content" className="flex flex-row items-center justify-center gap-12">

                <div id="hero-section-content-profile-picture" className="flex items-center justify-center">
                    <img src={profilePicture} className="h-96 w-96 object-cover rounded-full" alt="Profile Picture" />
                </div>

                <div id="hero-section-main-info" className="flex flex-col items-center justify-center gap-6">
                    <div id="hero-section-main-info-text" className="flex flex-col items-center justify-center gap-2">
                        <p className="text-xl text-center">Hello I'm</p>
                        <p className="text-6xl font-bold text-center">Nicolás Olivares</p>
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

            <div id="hero-scroll-indicator" className="flex flex-1 flex-row items-center justify-center">
                <ArrowDownIcon />
            </div>

        </div >
    )
}
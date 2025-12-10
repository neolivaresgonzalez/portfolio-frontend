import profilePicture from "@/assets/profile.jpeg"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "@/components/ui/arrow-down"
import { LinkedinIcon } from "@/components/ui/linkedin"
import { GithubIcon } from "@/components/ui/github"

export function HeroSection() {
    return (
        <div id="hero-section" className="flex flex-1 flex-col h-full m-0 p-0 min-h-screen gap-10">

            <div id="hero-section-content" className="flex flex-1 flex-row align-center justify-center flex-grow-1 gap-10">

                <div id="hero-section-content-profile-picture" className="flex flex-1 align-center justify-center">
                    <img src={profilePicture} className="h-100 keep-aspect-ratio rounded-full" alt="Profile Picture" />
                </div>

                <div id="hero-section-main-info" className="flex flex-1 flex-col align-center justify-center gap-5">
                    <div id="hero-section-main-info-text" className="flex flex-1 flex-col align-center justify-center gap-2">
                        <p className="flex flex-1 text-2xl text-center align-center justify-center width-auto flex-grow-1">Hello I'm</p>
                        <p className="flex flex-1 text-5xl font-bold text-center align-center justify-center width-auto flex-grow-1">Nicolás Olivares</p>
                        <p className="flex flex-1 text-2xl font-bold text-center align-center justify-center width-auto flex-grow-1">Software Engineer</p>

                    </div>
                    <div id="hero-section-main-info-buttons" className="flex flex-1 flex-row align-center justify-center width-auto flex-grow-1">
                        <Button variant="secondary" className="align-center justify-center">Download Resume</Button>
                        <Button variant="outline" className="align-center justify-center">Contact Me</Button>
                    </div>
                    <div id="hero-section-main-info-socials" className="flex flex-1 flex-row align-center justify-center">
                        <LinkedinIcon className="flex flex-1 align-center justify-center width-auto flex-grow-1" />
                        <GithubIcon className="flex flex-1 align-center justify-center width-auto flex-grow-1" />
                    </div>
                </div>
            </div>

            <div id="hero-scroll-indicator" className="flex flex-1 flex-row align-center justify-center">
                <ArrowDownIcon />
            </div>

        </div >
    )
}
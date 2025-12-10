
import { ArrowDownIcon } from "@/components/ui/arrow-down"

export function AboutSection() {
    return (
        <div className="flex flex-1 flex-col align-center justify-center">
            {/* 
                Section title
            */}
            <div id="about-section-title" className="flex flex-1 flex-col align-center justify-center">
                <p className="flex flex-1 text-2xl align-center justify-center">Get to know more</p>
                <p className="flex flex-1 text-5xl font-bold align-center justify-center">About me</p>
            </div>
            {/* 
                Section content
            */}
            <div id="about-section-content" className="flex flex-1 flex-col align-center justify-center">
                <p>Hi, I'm Nicolás Olivares, a software engineer with a passion for creating innovative and user-friendly applications. With a strong foundation in programming and a commitment to continuous learning, I strive to deliver high-quality solutions that meet the needs of both users and businesses.</p>
            </div>
            {/* 
               Scroll indicator section
            */}
            <div id="about-section-scroll-indicator" className="flex flex-1 flex-col align-center justify-center">
                <div id="about-section-scroll-indicator-arrow" className="flex flex-1">
                    <ArrowDownIcon />
                </div>
            </div>
        </div>
    )
}
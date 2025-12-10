
import { ArrowDownIcon } from "@/components/ui/arrow-down"
import { EducationItem } from "@/components/ui/education-item"
import { ExperienceItem } from "@/components/ui/experience-item"


export function AboutSection() {
    return (
        <div className="flex flex-1 flex-col h-full m-0 p-0 min-h-screen gap-10">
            {/* 
                Section title
            */}
            <div id="about-section-title" className="flex flex-1 flex-col">
                <div className="flex flex-1 flex-col align-center justify-center">
                    <p className="flex text-2xl align-center justify-center">Get to know more</p>
                    <p className="flex text-5xl font-bold align-center justify-center">About me</p>
                </div>
            </div>
            {/* 
                Section content
            */}
            <div id="about-section-content" className="flex flex-1 flex-col gap-10">
                {/* Section content experience & education */}
                <div id="about-section-content-experience-education" className="flex flex-1 flex-col align-center justify-center">
                    <div className="flex flex-1 flex-row align-center justify-center gap-5 flex-wrap">
                        <EducationItem />
                        <ExperienceItem />
                        <ExperienceItem />
                    </div>
                </div>

                {/* 
                    Section content Professional Summary
                */}
                <div id="about-section-content-professional-summary" className="flex flex-1 flex-col align-center justify-center">
                    <p className="text-lg align-center justify-center">
                        Hi, I'm Nicolás Olivares, a software engineer with a passion for creating innovative and user-friendly applications. With a strong foundation in programming and a commitment to continuous learning, I strive to deliver high-quality solutions that meet the needs of both users and businesses.
                        Hi, I'm Nicolás Olivares, a software engineer with a passion for creating innovative and user-friendly applications. With a strong foundation in programming and a commitment to continuous learning, I strive to deliver high-quality solutions that meet the needs of both users and businesses.
                    </p>
                </div>
            </div>
            {/* 
               Scroll indicator section
            */}
            <div id="about-scroll-indicator" className="flex flex-1 flex-row align-center justify-center">
                <div className="flex flex-1 flex-row align-center justify-center">
                    <ArrowDownIcon />
                </div>
            </div>
        </div>
    )
}
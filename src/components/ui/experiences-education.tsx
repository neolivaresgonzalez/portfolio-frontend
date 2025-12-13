import { ExperienceItem } from "@/components/ui/experience-item";
import type { ExperienceItemProps } from "@/types/experience-item";
import { Carousel } from "@/components/ui/carousel";

const experiences: ExperienceItemProps[] = [
    {
        kind: "Employment",
        title: "Project Engineer",
        subtitle: "Software Engineer",
        at: "Kimn-IT",
        location: "Santiago, Chile",
        website: "https://www.kimn-it.cl",
        startDate: "2020",
        endDate: "2022"
    },
    {
        kind: "Employment",
        title: "IT Project Manager",
        subtitle: "Technical leadership",
        at: "PUC - Pontifical Catholic University",
        location: "Santiago, Chile",
        website: "https://www.uc.cl",
        startDate: "2022",
        endDate: "2025"
    },
    {
        kind: "Education",
        title: "Bachelors of Science in Engineering",
        subtitle: "Fields: Software Engineering & Data Science",
        at: "USACH - University of Santiago",
        location: "Santiago, Chile",
        website: "https://www.usach.cl",
        startDate: "2013",
        endDate: "2021"
    }
]


export function ExperiencesEducation() {
    return (
        <div id="experiences-education-container" className="flex flex-col gap-5">
            <Carousel>
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} {...experience} />
                ))}
            </Carousel>
        </div>
    )
}
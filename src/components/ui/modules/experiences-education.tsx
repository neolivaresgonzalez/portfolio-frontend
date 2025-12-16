import { ExperienceItem } from "@/components/ui/modules/experience-item";
import type { ExperienceItemProps } from "@/components/ui/modules/experience-item";
import { Card, CardContent, CardTitle } from "@/components/ui/shadcn-ui/card";

const experiences: ExperienceItemProps[] = [
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
        <Card id="experiences-education-container" className="flex flex-col flex-wrap w-full items-center justify-center overflow-hidden gap-4">
            {/* <CardTitle>
                <h2 id="experiences-education-title" className="text-base md:text-lg font-bold text-center">
                    Employment & Education
                </h2>
            </CardTitle> */}
            <CardContent className="flex flex-col flex-wrap w-full items-center justify-center overflow-hidden gap-4">
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} {...experience} />
                ))}
            </CardContent>
        </Card>
    )
}
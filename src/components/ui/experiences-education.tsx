import { EducationItem } from "@/components/ui/education-item";
import { ExperienceItem } from "@/components/ui/experience-item";

export function ExperiencesEducation() {
    return (
        <div className="flex flex-col md:flex-row align-center justify-center gap-5 flex-wrap">
            <ExperienceItem />
            <ExperienceItem />
            <EducationItem />
        </div>
    )
}
import { GraduationCapIcon, BriefcaseIcon } from "lucide-react"
import { SpecialIcon } from "@/lib/icons"

export interface ExperienceItemProps {
    kind: "Employment" | "Education"
    title: string
    subtitle: string
    at: string
    location?: string
    website?: string
    startDate: string
    endDate?: string
    gpa?: string
    description?: string[]
    achievements?: string[]
}

export function ExperienceItem(props: ExperienceItemProps) {
    return (
        <div className="w-full flex flex-row max-w-sm md:max-w-4xl justify-left items-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-4">
                {props.kind === "Employment" ? <BriefcaseIcon size="32" className="shrink-0" /> : null}
                {props.kind === "Education" ? <GraduationCapIcon size="32" className="shrink-0" /> : null}
                <p className="text-base md:text-lg font-bold text-center hidden md:block">
                    {props.kind}
                </p>
            </div>
            <div className="flex flex-col w-full md:flex-row items-center justify-center gap-2 m-2 p-2">
                <div className="h-full w-full flex items-center justify-center">
                    <a href={props.website} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <SpecialIcon name={props.at} className="w-auto size-20 md:size-30 justify-center items-center flex bg-background/80 backdrop-blur-sm shadow-md hover:bg-background border border-border pointer-events-auto hover:scale-110 transition-all duration-200" />
                    </a>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 m-2 p-2">
                    <p className="text-sm md:text-md font-bold text-foreground">{props.title}</p>
                    <p className="text-sm md:text-md font-medium">{props.subtitle}</p>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 m-2 p-2">
                    {props.location && <p className="text-sm md:text-md text-right leading-relaxed whitespace-normal break-words text-muted-foreground">{props.location}</p>}
                    {props.startDate && <p className="text-sm md:text-md text-right leading-relaxed whitespace-normal break-words text-muted-foreground">{props.startDate} - {props.endDate}</p>}
                </div>

                {props.gpa || props.description || props.achievements && (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 m-2 p-2">
                        {props.gpa && <p className="text-sm text-justify md:text-center leading-relaxed whitespace-normal break-words">GPA: {props.gpa}</p>}
                        {props.description && <p className="text-sm text-justify md:text-center leading-relaxed whitespace-normal break-words">{props.description}</p>}
                        {props.achievements && <p className="text-sm text-justify md:text-center leading-relaxed whitespace-normal break-words">{props.achievements}</p>}
                    </div>
                )}
            </div>
        </div>
    )
}
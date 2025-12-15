import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/shadcn-ui/card"

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
            <div className="flex flex-col flex-1 md:flex-row items-center justify-between gap-1 m-3 p-3 text-left">
                <div className="h-full flex items-center justify-center">
                    <a href={props.website} target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                        <SpecialIcon name={props.at} className="w-auto size-30 justify-center items-center flex" />
                    </a>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                    <p className="text-base font-semibold text-foreground">{props.title}</p>
                    <p className="text-sm font-medium">{props.subtitle}</p>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                    {props.location && <p className="text-xs text-muted-foreground">{props.location}</p>}
                    {props.startDate && <p className="text-xs text-muted-foreground">{props.startDate} - {props.endDate}</p>}
                    {props.website && <p className="text-xs"></p>}
                </div>

                {props.gpa || props.description || props.achievements && (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                        {props.gpa && <p className="text-xs">GPA: {props.gpa}</p>}
                        {props.description && <p className="text-sm text-justify md:text-center leading-relaxed whitespace-normal break-words">{props.description}</p>}
                        {props.achievements && <p className="text-sm text-justify md:text-center leading-relaxed whitespace-normal break-words">{props.achievements}</p>}
                    </div>
                )}
            </div>
        </div>
    )
}
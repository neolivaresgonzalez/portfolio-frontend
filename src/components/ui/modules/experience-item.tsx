import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/shadcn-ui/card"

import { GraduationCapIcon, BriefcaseIcon } from "lucide-react"

import type { ExperienceItemProps } from "@/types/experience-item"

export function ExperienceItem(props: ExperienceItemProps) {
    return (
        <Card className="snap-center w-[75vw] max-w-md md:max-w-4xl overflow-hidden shrink-0">
            <CardContent className="p-4 md:p-6">
                <CardTitle>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-4">
                        {props.kind === "Employment" ? <BriefcaseIcon size="32" className="shrink-0" /> : null}
                        {props.kind === "Education" ? <GraduationCapIcon size="32" className="shrink-0" /> : null}
                        <p className="text-base md:text-lg font-bold text-center">
                            {props.kind}
                        </p>
                    </div>
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                    <div className="flex flex-col items-center justify-center text-center gap-1">
                        <p className="text-base font-semibold text-foreground">{props.title}</p>
                        <p className="text-sm font-medium">{props.subtitle}</p>
                        <p className="text-xs text-muted-foreground">{props.at}</p>
                        {props.location && <p className="text-xs text-muted-foreground">{props.location}</p>}
                        {props.startDate && <p className="text-xs text-muted-foreground">{props.startDate} - {props.endDate}</p>}
                        {props.website && <p className="text-xs"><a href={props.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{props.website}</a></p>}

                        <div className="mt-2 space-y-2">
                            {props.gpa && <p className="text-xs">GPA: {props.gpa}</p>}
                            {props.description && <p className="text-sm text-justify md:text-center leading-relaxed whitespace-normal break-words">{props.description}</p>}
                            {props.achievements && <p className="text-sm text-justify md:text-center leading-relaxed whitespace-normal break-words">{props.achievements}</p>}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}
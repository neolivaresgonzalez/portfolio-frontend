import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/shadcn-ui/card"

import { GraduationCapIcon, BriefcaseIcon } from "lucide-react"

import type { ExperienceItemProps } from "@/types/experience-item"

export function ExperienceItem(props: ExperienceItemProps) {
    return (
        <Card className="snap-center max-w-4xl overflow-x-hidden shrink-0">
            <CardContent>
                <CardTitle>
                    <div className="flex flex-row align-center justify-center">
                        {props.kind === "Employment" ? <BriefcaseIcon size="40" className="flex flex-1" /> : null}
                        {props.kind === "Education" ? <GraduationCapIcon size="40" className="flex flex-1" /> : null}
                    </div>
                    <div className="flex flex-row align-center justify-center">
                        <p className="text-lg font-bold">
                            {props.kind}
                        </p>
                    </div>
                </CardTitle>
                <CardDescription>
                    <div className="flex flex-col align-center justify-center">
                        <div className="flex flex-1 flex-col align-center justify-center text-justify">
                            <p className="text-md">{props.subtitle}</p>
                            <p className="text-sm">{props.at}</p>
                            {props.location && <p className="text-sm">{props.location}</p>}
                            {props.startDate && <p className="text-sm">{props.startDate} - {props.endDate}</p>}
                            {props.website && <p className="text-sm"><a href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a></p>}
                            {props.gpa && <p className="text-sm">GPA: {props.gpa}</p>}
                            {props.description && <p className="text-sm">{props.description}</p>}
                            {props.achievements && <p className="text-sm">{props.achievements}</p>}
                        </div>
                    </div>
                </CardDescription>
            </CardContent>
        </Card >
    )
}
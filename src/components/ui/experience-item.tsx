import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

import { AwardIcon } from "lucide-react"

export function ExperienceItem() {
    return (
        <Card>
            <CardContent>
                <CardTitle>
                    <div className="flex flex-1 flex-col align-center justify-center gap-2">
                        <div className="flex flex-1 flex-row align-center justify-center">
                            <AwardIcon size="40" className="flex flex-1" />
                        </div>
                        <p className="text-md font-bold">Experience</p>
                    </div>
                </CardTitle>
                <CardDescription>
                    <div className="flex flex-1 flex-row align-center justify-center">
                        <div className="flex flex-1 flex-col align-center justify-center">
                            <p className="text-sm">Software Engineer</p>
                            <p className="text-sm">Company</p>
                            <p className="text-sm">01/2020 - 06/2022</p>
                        </div>

                    </div>
                </CardDescription>
            </CardContent>
        </Card>
    )
}
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

import { GraduationCapIcon } from "lucide-react"

export function EducationItem() {
    return (
        <Card>
            <CardContent>
                <CardTitle>
                    <div className="flex flex-1 flex-col align-center justify-center gap-2">
                        <div className="flex flex-1 flex-row align-center justify-center">
                            <GraduationCapIcon size="40" className="flex flex-1" />
                        </div>
                        <p className="text-lg font-bold">Education</p>
                    </div>
                </CardTitle>
                <CardDescription>
                    <div className="flex flex-1 flex-col align-center justify-center">
                        <div className="flex flex-1 flex-col align-center justify-center">
                            <p className="text-sm">Bachelor of Engineering Sciences in Software Engineering</p>
                            <p className="text-sm">University of Santiago of Chile</p>
                            <p className="text-sm">03/2013 - 12/2021</p>
                            <p className="text-sm">GPA: 6.4 out of 7.0</p>
                        </div>

                    </div>
                </CardDescription>
            </CardContent>
        </Card>
    )
}
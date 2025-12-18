import { useState } from "react"
import { Button } from "@/components/ui/shadcn-ui/button"
import {
    ResponsiveModal,
    ResponsiveModalContent,
    ResponsiveModalHeader,
    ResponsiveModalTrigger,
} from "@/components/ui/modules/responsive-modal"
import { DownloadResumeForm } from "@/components/ui/forms/download-resume-form"

interface DownloadResumeModuleProps {
    side: "left" | "right" | "bottom" | "top"
}


export function DownloadResumeModule(props: DownloadResumeModuleProps) {
    const [open, setOpen] = useState(false)

    return (
        <ResponsiveModal open={open} onOpenChange={setOpen}>
            <ResponsiveModalTrigger asChild>
                <Button>Download Resume</Button>
            </ResponsiveModalTrigger>
            <ResponsiveModalContent side={props.side}>
                <ResponsiveModalHeader>
                    <DownloadResumeForm onSuccess={() => setOpen(false)} />
                </ResponsiveModalHeader>
            </ResponsiveModalContent>
        </ResponsiveModal>
    )
}
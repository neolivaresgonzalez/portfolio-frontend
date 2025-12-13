import { Button } from "@/components/ui/button"
import type { DownloadResumeModuleProps } from "@/types/download-resume"
import {
    ResponsiveModal,
    ResponsiveModalClose,
    ResponsiveModalContent,
    ResponsiveModalDescription,
    ResponsiveModalFooter,
    ResponsiveModalHeader,
    ResponsiveModalTitle,
    ResponsiveModalTrigger
} from "@/components/ui/responsive-modal"
import { DownloadResumeForm } from "@/components/ui/forms/download-resume-form"

export function DownloadResumeModule(props: DownloadResumeModuleProps) {
    return (
        <ResponsiveModal>
            <ResponsiveModalTrigger asChild>
                <Button>Download Resume</Button>
            </ResponsiveModalTrigger>
            <ResponsiveModalContent side={props.side}>
                <ResponsiveModalHeader>
                    <DownloadResumeForm />
                </ResponsiveModalHeader>
            </ResponsiveModalContent>
        </ResponsiveModal>
    )
}
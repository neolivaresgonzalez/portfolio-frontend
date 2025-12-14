import { SectionTitle } from "@/components/ui/modules/section-title";
import { Certifications } from "@/components/ui/modules/certifications";
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator";

export function CertificationsSection() {
    return (
        <div id="certifications-section" className="flex flex-col">
            <div id="certifications-section-title" className="flex justify-center w-full m-4 p-4">
                <SectionTitle title="Certifications" subtitle="You can check my" />
            </div>
            <div id="certifications-section-content" className="flex flex-col justify-center w-full m-4 p-4 gap-4">
                <div id="certifications-section-content-certifications" className="flex flex-col gap-5">
                    <Certifications />
                </div>
            </div>
            <div id="certifications-section-scroll-indicator" className="flex flex-1 items-center justify-center">
                <SectionScrollDownIndicator enabled={true} nextSectionId="contact" />
            </div>
        </div>
    )
}
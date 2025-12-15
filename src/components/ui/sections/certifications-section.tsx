import { SectionTitle } from "@/components/ui/modules/section-title";
import { Certifications } from "@/components/ui/modules/certifications";
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator";


export function CertificationsSection() {
    return (
        <div id="certifications-section" className="flex flex-col min-h-0 py-8 lg:py-16 w-full max-w-[100vw] overflow-x-hidden">
            <div id="certifications-section-title" className="flex justify-center w-full mb-8 px-4">
                <SectionTitle title="Certifications" subtitle="You can check my" />
            </div>
            <div id="certifications-section-content" className="flex flex-1 flex-col justify-center gap-10 container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
                <Certifications />
            </div>
            <div id="certifications-section-scroll-indicator" className="flex flex-1 items-center justify-center">
                <SectionScrollDownIndicator enabled={true} nextSectionId="contact" />
            </div>
        </div>
    )
}
import type { SectionTitleProps } from "@/types/section-title"

export function SectionTitle(props: SectionTitleProps) {
    return (
        <div id="section-title" className="flex flex-col items-center justify-center w-full min-w-0">
            <div className="flex flex-col items-center justify-center text-center">
                <p className="w-full text-lg md:text-2xl break-words whitespace-normal px-4">{props.subtitle}</p>
                <p className="w-full text-2xl md:text-5xl font-bold break-words whitespace-normal px-4">{props.title}</p>
            </div>
        </div>
    )
}
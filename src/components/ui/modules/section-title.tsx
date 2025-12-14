import type { SectionTitleProps } from "@/types/section-title"

export function SectionTitle(props: SectionTitleProps) {
    return (
        <div>
            <div id="section-title" className="flex flex-col">
                <div className="flex flex-col align-center justify-center">
                    <p className="flex text-2xl align-center justify-center">{props.subtitle}</p>
                    <p className="flex text-5xl font-bold align-center justify-center">{props.title}</p>
                </div>
            </div>
        </div>
    )
}
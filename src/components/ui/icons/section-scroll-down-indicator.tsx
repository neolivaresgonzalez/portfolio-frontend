import { useRef } from "react"
import { ArrowDownIcon, type ArrowDownIconHandle } from "@/components/ui/icons/arrow-down"
import type { SectionScrollDownIndicatorProps } from "@/types/section-scroll-down-indicator"


export const SectionScrollDownIndicator = (props: SectionScrollDownIndicatorProps) => {
    const iconRef = useRef<ArrowDownIconHandle>(null)

    if (!props.enabled) return null

    return (
        <div
            onClick={() => window.scrollTo({ top: document.getElementById(props.nextSectionId)?.offsetTop || 0, behavior: "smooth" })}
            onMouseEnter={() => iconRef.current?.startAnimation()}
            onMouseLeave={() => iconRef.current?.stopAnimation()}
            className="flex flex-row w-full h-16 items-center cursor-pointer hover:opacity-80 transition-opacity"
        >
            <div className="flex flex-1 flex-col items-center">
                <ArrowDownIcon ref={iconRef} size={28} />
            </div>
        </div>
    )
}
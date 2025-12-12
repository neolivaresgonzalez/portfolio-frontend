

export function Carousel({ children }: { children: React.ReactNode }) {
    return (
        <div
            id="skills-section-content"
            className="flex overflow-x-auto overflow-y-hidden gap-6 snap-x snap-mandatory scrollbar-hide max-w-full"

        >
            {children}
        </div>
    )
}
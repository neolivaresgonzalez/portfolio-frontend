import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/shadcn-ui/button";

export function Carousel({ children }: { children: React.ReactNode }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for rounding tolerance
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScroll);
            // Initial check
            checkScroll();
            // Check on resize
            window.addEventListener("resize", checkScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", checkScroll);
            }
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; // Scroll 80% of view
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative group w-full">
            {/* Left Button */}
            {canScrollLeft && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex pointer-events-none">
                    <Button
                        variant="secondary"
                        size="icon"
                        className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background border border-border pointer-events-auto"
                        onClick={() => scroll("left")}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>
                </div>
            )}

            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                id="skills-section-content"
                className="flex items-center justify-center overflow-x-auto overflow-y-hidden gap-6 snap-x snap-mandatory scrollbar-hide max-w-full pb-4 px-4 scroll-smooth"
            >
                {children}
            </div>

            {/* Right Button */}
            {canScrollRight && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex pointer-events-none">
                    <Button
                        variant="secondary"
                        size="icon"
                        className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background border border-border pointer-events-auto"
                        onClick={() => scroll("right")}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>
                </div>
            )}
        </div>
    )
}
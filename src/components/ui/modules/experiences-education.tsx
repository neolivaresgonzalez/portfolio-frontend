import { useEffect, useState } from "react";
import { ExperienceItem } from "@/components/ui/modules/experience-item";
import type { ExperienceItemProps } from "@/components/ui/modules/experience-item";
import { Card, CardContent } from "@/components/ui/shadcn-ui/card";
import { Separator } from "../shadcn-ui/separator";
import { fetchAPI } from "@/lib/strapi";

interface ExperienceData {
    id: number;
    documentId: string;
    type: "Employment" | "Education";
    title: string;
    subtitle?: string;
    organization: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    website?: string;
    description?: string;
    order: number;
}

export function ExperiencesEducation() {
    const [experiences, setExperiences] = useState<ExperienceItemProps[]>([]);

    useEffect(() => {
        const loadExperiences = async () => {
            try {
                const res = await fetchAPI('/experiences', {
                    sort: ['order:asc', 'startDate:desc'],
                    pagination: {
                        limit: 100
                    }
                });

                if (res.data) {
                    const mappedExperiences: ExperienceItemProps[] = res.data.map((item: ExperienceData) => ({
                        kind: item.type,
                        title: item.title,
                        subtitle: item.subtitle || item.organization, // Use organization as subtitle if subtitle is missing
                        at: item.organization,
                        location: item.location || "",
                        website: item.website || "",
                        startDate: item.startDate || "",
                        endDate: item.endDate || "Present",
                        description: item.description
                    }));
                    setExperiences(mappedExperiences);
                }
            } catch (error) {
                console.error("Failed to load experiences", error);
            }
        };

        loadExperiences();
    }, []);

    if (experiences.length === 0) return null;

    return (
        <Card id="experiences-education-container" className="flex flex-col flex-wrap w-full items-center justify-center overflow-hidden gap-4">
            <CardContent className="flex flex-col flex-wrap w-full items-center justify-center overflow-hidden gap-4">
                {experiences.map((experience, index) => (
                    <div key={index} className="w-full flex flex-col gap-4">
                        <ExperienceItem {...experience} />
                        {index < experiences.length - 1 && <Separator orientation="horizontal" className="w-full" />}
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
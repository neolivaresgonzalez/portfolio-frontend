export interface ExperienceItemProps {
    kind: "Employment" | "Education"
    title: string
    subtitle: string
    at?: string
    location?: string
    website?: string
    startDate: string
    endDate?: string
    gpa?: string
    description?: string[]
    achievements?: string[]
}
import ReactMarkdown from 'react-markdown';

interface ProfessionalSummaryProps {
    content?: string;
}

export function ProfessionalSummary({ content }: ProfessionalSummaryProps) {
    if (!content) return null;

    return (
        <div className="flex flex-col items-center justify-center w-full px-4">
            <div className="text-sm md:text-md lg:text-lg text-justify leading-relaxed prose dark:prose-invert max-w-none">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    )
}
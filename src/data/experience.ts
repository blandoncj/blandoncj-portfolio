export interface ExperienceItem {
    company: string;
    position: string
    period: string;
    duration: string;
    description: string;
    technologies: string[];
}

export const experience: ExperienceItem[] = [
    {
        company: 'Crystal S.A.S',
        position: 'Python Developer',
        period: 'Feb 2025 - Aug 2025',
        duration: '6 months',
        description:
            "Designed, developed, and maintained Python-based automation tools, providing technical support and ensuring reliable system performance.",
        technologies: ["Python", "MySQL"]
    },
];

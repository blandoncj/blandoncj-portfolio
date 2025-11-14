export interface EducationItem {
    institution: string;
    degree: string;
    type: string;
    period: string;
    status: string;
    description: string;
    highlights: string[];
    gradient: string;
}

export const education: EducationItem[] = [
    {
        institution: "Institución Universitaria EAM",
        degree: "Ingeniería de Software",
        type: "Professional",
        period: "2022 - 2026",
        status: "In Progress",
        description:
            "Comprehensive training in software development, system architecture, design patterns, and agile methodologies with focus on scalable and maintainable solutions.",
        highlights: [
            "Spring Boot",
            "FastAPI",
            "Docker",
            "Clean Architecture",
            "Design Patterns",
        ],
        gradient: "from-purple-500/20 to-blue-500/20",
    },
    {
        institution: "Institución Universitaria EAM",
        degree: "Tecnología en Desarrollo de Software",
        type: "Technologist",
        period: "2022 - 2025",
        status: "Graduated · Nov, 2025",
        description:
            "Specialized in backend development and database management. Solid foundation in object-oriented programming, relational databases, and version control systems.",
        highlights: ["Java", "Python", "MySQL", "Git", "GitHub"],
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
]
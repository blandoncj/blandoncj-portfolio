import { calculateDuration, formatPeriod } from "../helpers/date.helper";

export interface ExperienceItem {
    company: string;
    position: string;
    startDate: Date;
    endDate: Date | null;
    period: string;
    duration: string;
    description: string;
    technologies: string[];
}

export const experience: ExperienceItem[] = [
    {
        company: 'Konex Innovation S.A.S',
        position: 'Full Stack Semi Senior Developer',
        startDate: new Date(2025, 10),
        endDate: null,
        description:
            "Developing and maintaining web applications using modern frameworks and technologies, collaborating with cross-functional teams to deliver high-quality software solutions.",
        technologies: ["Spring Boot", "Angular", "PostgreSQL"],
        get period(): string {
            return formatPeriod(this.startDate, this.endDate);
        },
        get duration(): string {
            return calculateDuration(this.startDate, this.endDate);
        }
    },
    {
        company: 'Crystal S.A.S',
        position: 'Python Developer',
        startDate: new Date(2025, 1),
        endDate: new Date(2025, 7),
        description:
            "Designed, developed, and maintained Python-based automation tools, providing technical support and ensuring reliable system performance.",
        technologies: ["Python", "MySQL"],
        get period(): string {
            return formatPeriod(this.startDate, this.endDate);
        },
        get duration(): string {
            return calculateDuration(this.startDate, this.endDate);
        }
    },
];

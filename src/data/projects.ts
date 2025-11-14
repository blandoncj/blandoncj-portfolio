export interface ProjectItem {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    imagePath?: string;
    demo?: string;
}

export const projects: ProjectItem[] = [
    {
        title: "Lottery Sales App",
        description: "Full-stack lottery ticket sales management system built with Spring Boot (Clean Architecture) and Angular. Features customer management, draw creation, automated ticket generation, and sales tracking with real-time updates.",
        technologies: ["Spring Boot", "Angular", "H2 Database"],
        githubLink: "https://github.com/blandoncj/lottery-sales-app",
    },
    {
        title: "Library Management API",
        description: "Library Management System API built with Spring Boot, featuring JWT authentication, role-based authorization, and complete CRUD operations.",
        technologies: ["Spring Boot", "JWT", "MySQL"],
        githubLink: "https://github.com/blandoncj/library-management-api",
    },
    {
        title: "Contact Flow API",
        description: "FastAPI-based contact management system with JWT/OAuth2 security, MySQL database, and Docker deployment. Implements user authentication and full CRUD functionality.",
        technologies: ["FastAPI", "MySQL", "JWT", "Docker"],
        githubLink: "https://github.com/blandoncj/contact-flow-api",
    }
];
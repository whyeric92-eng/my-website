export type Project = {
    title: string;
    duration: string;
    link?: string;
    liveLink?: string;
    bullets: string[];
    skills: string[];
};

export const projects: Project[] = [
    {
        title: "AI-Companion",
        duration: "Dec 2025 - Present",
        link: "https://github.com/AITPCC",
        bullets: [
            'Developed a cross-platform mobile application using React Native (Expo) to create an interactive AI dialogue system, featuring a historical "Qin Shi Huang" persona.',
            "Designed high-fidelity UI/UX in Figma, creating a modular interface with 5 distinct interaction modes (Historical, Coaching, Emotional Support) to enhance user engagement.",
            "Built a FastAPI backend with JWT-based authentication (bcrypt password hashing, token issuance/validation) and a layered service architecture (routes → services → data access) to support user registration, login, and profile management.",
            "Implemented the data layer with raw SQL first, then migrated it to SQLModel ORM (PostgreSQL) with Alembic-managed migrations — improving type safety and maintainability while retaining hands-on SQL experience.",
            "Built a /chat/completions endpoint integrating Google's Gemini API via the Agent Development Kit (ADK), using a stateless LlmAgent + async Runner to generate persona-constrained AI responses while normalizing and injecting multi-turn conversation history into each prompt.",
            "Containerized the backend with Docker to standardize local development and deployment.",
            "Constrained AI persona behavior via prompt engineering and a stateless agent-session design, isolating conversation state per request while injecting historical context into the LLM prompt.",
        ],
        skills: ["PostgreSQL", "FastAPI", "SQLModel", "Alembic", "React Native", "Figma (Software)", "Docker", "Google Gemini API"],
    },
    {
        title: "Personal Portfolio Website",
        duration: "Jul 2026 - Present",
        link: "https://github.com/whyeric92-eng/my-website",
        liveLink: "https://my-website-iota-lake.vercel.app/",
        bullets: [
            "Built a personal resume/portfolio website from scratch using Next.js (App Router), React, and TypeScript.",
            "Structured content as typed TypeScript data modules (profile, skills, contact, internships, projects), separated from route pages and reusable components to keep the codebase data-driven.",
            "Implemented file-based routing across Home, About, Internship, and Projects pages using next/link navigation.",
            "Styling the site with Tailwind CSS for a responsive, dark-mode-aware layout.",
            "Deployed the site to Vercel with continuous deployment from GitHub.",
        ],
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    },
];

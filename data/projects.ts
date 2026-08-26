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
        title: "Bookmark Manager",
        duration: "Jul 2026 - Aug 2026",
        link: "https://github.com/whyeric92-eng/bookmark-api",
        liveLink: "https://bookmark-api-omega.vercel.app",
        bullets: [
            "Built a FastAPI backend with JWT authentication (pyjwt + bcrypt) and a SQLModel/Alembic-managed PostgreSQL schema, following the same layered architecture pattern as AI Companion.",
            "Designed a many-to-many relational schema (Bookmark ↔ Tag via join table) with per-user uniqueness constraints and ownership-scoped access control.",
            "Wrote a pytest suite covering full CRUD and cross-user ownership checks, using SQLAlchemy's nested-transaction/savepoint pattern (join_transaction_mode=\"create_savepoint\") to roll back every test against a real Postgres instance instead of mocking the database.",
            "Set up a GitHub Actions CI pipeline that spins up a throwaway Postgres service container, runs Alembic migrations, and executes the test suite on every push/PR.",
            "Deployed the full stack across three free-tier providers (Neon for Postgres, Render for the FastAPI backend, Vercel for the React/Vite frontend), handling production-specific issues: idempotent migrations on boot (no shell access on free tier), CORS origin configuration, and SPA rewrite rules for client-side routing.",
        ],
        skills: ["FastAPI", "SQLModel", "Alembic", "PostgreSQL", "pytest", "GitHub Actions", "React", "Vite"],
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

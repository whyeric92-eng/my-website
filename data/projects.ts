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
            "Integrated and managed multiple RESTful APIs, including LLM and voice services, ensuring seamless data transmission between the mobile client and backend providers.",
            "Defined and constrained AI conversation boundaries through Prompt Engineering and system-level logic to ensure responses remain within the specific historical persona and safety guidelines.",
            "Conducted technical research on third-party voice services to select cost-effective solutions for Chinese language processing.",
            "Facilitated cross-functional communication by managing weekly project syncs, tracking 10+ critical action items to ensure on-time delivery of product milestones.",
        ],
        skills: ["PostgreSQL", "FastAPI", "React Native", "Figma (Software)"],
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

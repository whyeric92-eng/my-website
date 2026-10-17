export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C", "C++", "CSS", "HTML", "Java", "JavaScript", "PHP", "Python", "SQL", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Astro", "FastAPI", "Inertia.js", "Laravel", "Next.js", "React", "React Native (Expo)", "SQLModel", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Databases",
    items: ["Alembic", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Docker", "Figma", "GCP (Cloud Run)", "Git", "GitHub", "GitHub Actions", "Microsoft Excel", "PHPUnit/Pest", "pytest", "Vercel"],
  },
];

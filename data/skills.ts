export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C", "C++", "CSS", "HTML", "Java", "JavaScript", "PHP", "Python", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Astro", "FastAPI", "Inertia.js", "Laravel", "React Native", "Vue.js"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Figma", "Git", "GitHub", "Microsoft Excel", "PHPUnit"],
  },
];

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  { category: "前端", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "后端", items: ["FastAPI", "Laravel", "Node.js"] },
  { category: "工具", items: ["Git", "Docker"] },
];

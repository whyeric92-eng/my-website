export type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "项目名称",
    description: "一句话描述这个项目是做什么的",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project",
    highlights: [
      "项目背景和你负责的部分",
      "解决的技术难点或亮点",
      "取得的成果或数据",
    ],
  },
];

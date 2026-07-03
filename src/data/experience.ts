export type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "公司名称",
    role: "职位名称",
    location: "城市",
    startDate: "2024-06",
    endDate: "至今",
    highlights: [
      "在这里详细描述一项工作职责或成果，包含具体数字和影响",
      "第二条要点",
      "第三条要点",
    ],
  },
  {
    company: "上一家公司/实习",
    role: "职位名称",
    location: "城市",
    startDate: "2023-06",
    endDate: "2024-05",
    highlights: ["主要职责或项目描述", "取得的成果"],
  },
];

export type Education = {
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
};

export const education: Education[] = [
  {
    school: "学校名称",
    degree: "学位与专业",
    location: "城市",
    startDate: "2021-09",
    endDate: "2025-06",
    details: ["相关课程、GPA、荣誉或社团经历，可选填"],
  },
];

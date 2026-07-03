export type Profile = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  summary: string;
  links: { label: string; url: string }[];
};

export const profile: Profile = {
  name: "你的名字",
  title: "你的职位/求职方向",
  tagline: "一句话介绍自己，比如你的专业方向和擅长的事情",
  location: "城市, 国家",
  email: "you@example.com",
  summary:
    "在这里写一段更完整的自我介绍，可以包括你的教育背景、技术方向、正在寻找的机会类型等，比简历上的一句话总结更详细。",
  links: [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  ],
};

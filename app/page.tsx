import Image from "next/image";
import Link from "next/link";
import { Briefcase, Code2 } from "lucide-react";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

const categoryStyles: Record<string, string> = {
  Languages: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  "Frameworks & Libraries":
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  Databases: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
  Tools: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
};

export default function Home() {
  // 下面是 skills.map(...) 的等价写法,用 for 和 forEach 分别实现,仅作对比学习,不会被执行

  // for 版本:手动建一个空数组,循环里 push 进去,最后把数组交给 JSX
  // const skillItems = [];
  // for (let i = 0; i < skills.length; i++) {
  //   skillItems.push(<span key={skills[i]}>{skills[i]}</span>);
  // }
  // 之后在 JSX 里用 {skillItems} 渲染

  // forEach 版本:forEach 本身不返回数组,所以必须自己手动 push 到外部数组里
  // const skillItems2: React.ReactNode[] = [];
  // skills.forEach((skill) => {
  //   skillItems2.push(<span key={skill}>{skill}</span>);
  // });
  // 之后在 JSX 里用 {skillItems2} 渲染

  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-10 sm:text-left">
        {profile.avatar ? (
          <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-zinc-200 shadow-lg dark:border-zinc-700">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={128}
              height={128}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        ) : (
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-gradient-to-br from-blue-900 to-indigo-600 text-2xl font-semibold text-white shadow-lg dark:border-zinc-700">
            {initials}
          </div>
        )}

        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold tracking-tight">
            {profile.name}
          </h1>
          <p className="text-sm text-zinc-400 dark:text-zinc-600">
            English name: {profile.englishName}
          </p>
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {profile.title}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-5 pt-2 sm:justify-start">
            <Link
              href="/internship"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#1E40AF] px-5 py-2 text-sm font-medium text-[#1E40AF] transition-colors duration-200 hover:bg-[#EFF6FF]"
            >
              <Briefcase className="h-4 w-4" strokeWidth={1.75} />
              View Internship Experiences
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#1E40AF] px-5 py-2 text-sm font-medium text-[#1E40AF] transition-colors duration-200 hover:bg-[#EFF6FF]"
            >
              <Code2 className="h-4 w-4" strokeWidth={1.75} />
              View Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full space-y-5">
        <div className="flex items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Tech Stack
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
        </div>

        {skills.map((group) => (
          <div
            key={group.category}
            className="flex flex-col items-center gap-2 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <p className="w-40 shrink-0 text-center text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600 sm:text-right">
              {group.category}
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${categoryStyles[group.category] ?? "bg-zinc-100 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-500"}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
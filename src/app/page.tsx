import Link from "next/link";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{profile.location}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">{profile.name}</h1>
      <h2 className="mt-2 text-xl text-zinc-600 dark:text-zinc-400">{profile.title}</h2>
      <p className="mt-6 max-w-xl text-zinc-700 dark:text-zinc-300">{profile.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/resume"
          className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
        >
          查看简历详情
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-black/10 px-5 py-2 text-sm font-medium dark:border-white/10"
        >
          查看项目
        </Link>
      </div>
    </div>
  );
}

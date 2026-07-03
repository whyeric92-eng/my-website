import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">关于我</h1>
      <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">{profile.summary}</p>
      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        联系邮箱：
        <a href={`mailto:${profile.email}`} className="ml-1 underline">
          {profile.email}
        </a>
      </p>
    </div>
  );
}

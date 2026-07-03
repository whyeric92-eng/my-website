import type { Experience } from "@/data/experience";

export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="border-b border-black/10 py-6 last:border-none dark:border-white/10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-lg font-semibold">
          {item.role} · {item.company}
        </h3>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {item.startDate} – {item.endDate}
        </span>
      </div>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.location}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
        {item.highlights.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

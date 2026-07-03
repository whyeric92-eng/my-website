import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBadge from "@/components/SkillBadge";

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">简历</h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">工作经历</h2>
        <div className="mt-4">
          {experience.map((item) => (
            <ExperienceCard key={`${item.company}-${item.startDate}`} item={item} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">教育经历</h2>
        <div className="mt-4">
          {education.map((item) => (
            <article key={item.school} className="border-b border-black/10 py-6 last:border-none dark:border-white/10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">{item.school}</h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {item.startDate} – {item.endDate}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {item.degree} · {item.location}
              </p>
              {item.details.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">技能</h2>
        <div className="mt-4 space-y-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {group.category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

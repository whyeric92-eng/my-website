import type { Project } from "@/data/projects";

export default function ProjectCard({ item }: { item: Project }) {
  return (
    <article className="rounded-lg border border-black/10 p-6 dark:border-white/10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-lg font-semibold">
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {item.name}
            </a>
          ) : (
            item.name
          )}
        </h3>
      </div>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
        {item.highlights.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

import type { ReactNode } from "react";
import { Calendar, ExternalLink } from "lucide-react";

export default function TimelineCard({
  icon,
  title,
  subtitle,
  duration,
  bullets,
  renderBullet = (bullet: string) => bullet,
  tags,
  links,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  duration: string;
  bullets: string[];
  renderBullet?: (bullet: string) => ReactNode;
  tags?: string[];
  links?: { label: string; href: string }[];
}) {
  return (
    <div className="relative">
      <span className="absolute -left-[29px] top-2 h-3 w-3 rounded-full border-2 border-background bg-accent" />
      <div className="rounded-xl border border-zinc-100 p-5 shadow-sm dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="text-accent">{icon}</span>
          <h3 className="font-medium">{title}</h3>
        </div>
        {subtitle && (
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
        )}
        <p className="mt-1 flex items-center gap-1.5 text-sm text-accent">
          <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
          {duration}
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
          {bullets.map((bullet) => (
            <li key={bullet}>{renderBullet(bullet)}</li>
          ))}
        </ul>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-950/40 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

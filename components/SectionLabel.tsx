import type { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <p className="shrink-0 text-base font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
        {children}
      </p>
      <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
    </div>
  );
}

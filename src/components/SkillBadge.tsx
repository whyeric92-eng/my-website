export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-black/10 px-3 py-1 text-sm dark:border-white/10">
      {label}
    </span>
  );
}

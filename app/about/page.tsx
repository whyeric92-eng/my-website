import { FileText, GraduationCap, Users } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import TimelineCard from "@/components/TimelineCard";
import { bio, education, communityExperience, hobbies } from "@/data/about";

const bioKeywords = ["AI Companion", "Tanjong Pagar Community Club"];

const certificateLinks: Record<string, { label: string; href: string }[]> = {
  "Ranked 1st out of 50 scholars in both Overall and Mathematics assessments during the Bridging Programme.":
    [
      { label: "Overall", href: "/certificate-overall.jpg" },
      { label: "Mathematics", href: "/certificate-math.jpg" },
    ],
};

function renderHighlightedBio(text: string, keywords: string[]) {
  const pattern = new RegExp(
    `(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );
  return text.split(pattern).map((part, i) =>
    keywords.includes(part) ? (
      <strong key={i} className="font-semibold text-zinc-800 dark:text-zinc-200">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function renderBioBullet(bullet: string) {
  return (
    <>
      {bullet}
      {certificateLinks[bullet]?.map((cert) => (
        <a
          key={cert.label}
          href={cert.href}
          target="_blank"
          rel="noreferrer"
          className="ml-2 inline-flex items-center gap-1 text-xs text-accent hover:underline"
        >
          <FileText className="h-3 w-3" strokeWidth={1.75} />
          {cert.label}
        </a>
      ))}
    </>
  );
}

export default function About() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <section className="space-y-3">
        <SectionLabel>About</SectionLabel>
        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {renderHighlightedBio(bio, bioKeywords)}
        </p>
      </section>

      <section className="space-y-4">
        <SectionLabel>Education</SectionLabel>
        <div className="relative space-y-6 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
          <TimelineCard
            icon={<GraduationCap className="h-4 w-4" strokeWidth={1.75} />}
            title={education.school}
            subtitle={education.degree}
            duration={education.duration}
            bullets={education.details}
            renderBullet={renderBioBullet}
          />
        </div>
      </section>

      <section className="space-y-4">
        <SectionLabel>Community Leadership</SectionLabel>
        <div className="relative space-y-6 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
          {communityExperience.map((experience) => (
            <TimelineCard
              key={experience.organization}
              icon={<Users className="h-4 w-4" strokeWidth={1.75} />}
              title={experience.organization}
              subtitle={experience.role}
              duration={experience.duration}
              bullets={experience.bullets}
            />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionLabel>Hobbies</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {hobbies.map((hobby) => (
            <span
              key={hobby}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-950/40 dark:text-blue-300"
            >
              {hobby}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

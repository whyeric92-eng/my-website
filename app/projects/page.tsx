import { Code2 } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import TimelineCard from "@/components/TimelineCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <section className="space-y-4">
        <SectionLabel>Projects</SectionLabel>
        <div className="relative space-y-6 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
          {projects.map((project) => (
            <TimelineCard
              key={project.title}
              icon={<Code2 className="h-4 w-4" strokeWidth={1.75} />}
              title={project.title}
              duration={project.duration}
              bullets={project.bullets}
              tags={project.skills}
              links={[
                project.link ? { label: "Repository", href: project.link } : null,
                project.liveLink ? { label: "Live Demo", href: project.liveLink } : null,
              ].filter((link) => link !== null)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

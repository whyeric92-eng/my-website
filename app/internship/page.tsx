import { Briefcase } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import TimelineCard from "@/components/TimelineCard";
import { internships } from "@/data/internship";

export default function Internship() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <section className="space-y-4">
        <SectionLabel>Internship</SectionLabel>
        <div className="relative space-y-6 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
          {internships.map((internship) => (
            <TimelineCard
              key={internship.company}
              icon={<Briefcase className="h-4 w-4" strokeWidth={1.75} />}
              title={internship.role}
              subtitle={`${internship.company} · ${internship.location}`}
              duration={internship.duration}
              bullets={internship.bullets}
              tags={internship.skills}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

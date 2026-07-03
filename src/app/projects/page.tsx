import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">项目</h1>
      <div className="mt-8 space-y-6">
        {projects.map((item) => (
          <ProjectCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

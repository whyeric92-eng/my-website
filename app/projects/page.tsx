import { projects } from "@/data/projects";

export default function Projects() {
    return (
      <div>
        <h1> Projects page </h1>

        {projects.map((project) => (
          <div key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.duration}</p>

            <ul>
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div>
              {project.skills.map((skill) => (
                <span key={skill}> {skill} </span>
              ))}
            </div>

            {project.link && <a href={project.link}> {project.link} </a>}
            {project.liveLink && <a href={project.liveLink}> {project.liveLink} </a>}
          </div>
        ))}
      </div>
    );
  }
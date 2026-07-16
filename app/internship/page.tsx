import { internships } from "@/data/internship";
export default function Internship() {
    return (
      <div>
        <h1> Internship page </h1>

        {internships.map((internship) => (
          <div key={internship.company}>
            <h2>{internship.role}</h2>
            <p>
              {internship.company} - {internship.location}
            </p>
            <p>{internship.duration}</p>

            <ul>
              {internship.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div>
              {internship.skills.map((skill) => (
                <span key={skill}> {skill} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
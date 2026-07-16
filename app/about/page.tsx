import { bio, education, communityExperience, hobbies } from "@/data/about";

export default function About() {
    return (
      <div>
        <h1> About page </h1>

        <p>{bio}</p>

        <h2>Education</h2>
        <div>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          <p>{education.duration}</p>
          <ul>
            {education.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>

        <h2>Community Leadership</h2>
        {communityExperience.map((experience) => (
          <div key={experience.organization}>
            <h3>{experience.organization}</h3>
            <p>{experience.role}</p>
            <p>{experience.duration}</p>
            <ul>
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>Hobbies</h2>
        <div>
          {hobbies.map((hobby) => (
            <span key={hobby}> {hobby} </span>
          ))}
        </div>
      </div>
    );
  }
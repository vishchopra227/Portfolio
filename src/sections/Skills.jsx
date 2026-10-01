import skills from "../data/skills";
import SectionLabel from "../components/SectionLabel";

import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="skills-container">

        <SectionLabel
          eyebrow="What I work with"
          title="Skills & Technologies"
          description="The technologies and tools I use to build, develop and solve problems."
        />

        <div className="skills-grid">
          {skills.map((category) => (
            <div
              className="skill-category"
              key={category.category}
            >
              <h3>{category.category}</h3>

              <div className="skill-items">
                {category.skills.map((skill) => (
                  <div
                    className="skill-item"
                    key={skill.name}
                  >
                    <div className="skill-icon">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                      />
                    </div>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-bottom">
          <p>
            Always learning, always improving, always building.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
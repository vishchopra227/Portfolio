import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";

import experience from "../data/experience";
import SectionLabel from "../components/SectionLabel";

import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="experience-container">
        <SectionLabel
          eyebrow="My journey"
          title="Experience"
          description="The places, roles and experiences that have shaped my development journey."
        />

        {experience.length > 0 ? (
          <div className="experience-timeline">
            {experience.map((job, index) => (
              <article
                className="experience-item"
                key={`${job.company}-${job.role}-${index}`}
              >
                <div className="experience-marker">
                  <span></span>
                </div>

                <div className="experience-card">
                  <div className="experience-card-top">
                    <div>
                      <span className="experience-role">
                        {job.role}
                      </span>

                      <h3>{job.company}</h3>
                    </div>

                    <span className="experience-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="experience-meta">
                    {job.duration && (
                      <span>
                        <CalendarDays size={13} />
                        {job.duration}
                      </span>
                    )}

                    {job.location && (
                      <span>
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    )}
                  </div>

                  {job.description && (
                    <p className="experience-description">
                      {job.description}
                    </p>
                  )}

                  {job.responsibilities?.length > 0 && (
                    <ul className="experience-responsibilities">
                      {job.responsibilities.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {job.technologies?.length > 0 && (
                    <div className="experience-technologies">
                      {job.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="experience-empty">
            <div className="experience-empty-icon">
              <BriefcaseBusiness size={25} />
            </div>

            <div className="experience-empty-content">
              <span className="experience-empty-label">
                EXPERIENCE
              </span>

              <h3>Building my professional journey.</h3>

              <p>
                I'm continuously working on projects, strengthening
                my technical skills and looking for opportunities to
                apply what I learn in real-world environments.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
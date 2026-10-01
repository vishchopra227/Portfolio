import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
} from "lucide-react";

import education from "../data/education";
import SectionLabel from "../components/SectionLabel";

import "./Education.css";

function Education() {
  return (
    <section id="education" className="education section">
      <div className="education-container">
        <SectionLabel
          eyebrow="Academic background"
          title="Education"
          description="My academic journey and the foundation behind my technical skills."
        />

        <div className="education-list">
          {education.map((item, index) => (
            <article
              className="education-card"
              key={`${item.institution}-${item.degree}-${index}`}
            >
              {/* Institution Logo */}
              <div className="education-image-wrapper">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.institution} logo`}
                    className="education-image"
                  />
                ) : (
                  <div className="education-image-placeholder">
                    <GraduationCap size={32} />
                  </div>
                )}
              </div>

              {/* Education Content */}
              <div className="education-card-content">
                {/* Smallest Heading */}
                <span className="education-level">
                  {item.level}
                </span>

                {/* Main Heading */}
                <h3>{item.degree}</h3>

                {/* Institution */}
                <h4>{item.institution}</h4>

                {/* Description */}
                {item.description && (
                  <p className="education-description">
                    {item.description}
                  </p>
                )}

                {/* Meta Information */}
                <div className="education-meta">
                  {item.duration && (
                    <span>
                      <CalendarDays size={14} />
                      {item.duration}
                    </span>
                  )}

                  {item.location && (
                    <span>
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  )}

                  {item.result && (
                    <span className="education-result">
                      <Award size={14} />
                      {item.result}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
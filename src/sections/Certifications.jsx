import {
  Award,
  ExternalLink,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

import certifications from "../data/certifications";
import SectionLabel from "../components/SectionLabel";

import "./Certifications.css";

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications section"
    >
      <div className="certifications-container">
        <SectionLabel
          eyebrow="Continuous learning"
          title="Certifications & Achievements"
          description="Courses, certifications and achievements that reflect my technical learning and problem-solving journey."
        />

        {certifications.length > 0 ? (
          <div className="certifications-list">
            {certifications.map((certificate, index) => (
              <article
                className={`certification-card ${
                  certificate.type === "achievement"
                    ? "achievement-card"
                    : ""
                }`}
                key={`${certificate.title}-${index}`}
              >
                <div className="certification-icon">
                  <Award size={25} />
                </div>

                <div className="certification-content">
                  <div className="certification-top">
                    <div>
                      <span className="certification-label">
                        {certificate.type === "achievement"
                          ? "ACHIEVEMENT"
                          : `CERTIFICATION ${String(index + 1).padStart(
                              2,
                              "0"
                            )}`}
                      </span>

                      <h3>{certificate.title}</h3>

                      <p className="certification-issuer">
                        {certificate.type === "achievement"
                          ? "Coding & Problem Solving"
                          : "Issued by "}
                        {certificate.type !== "achievement" && (
                          <strong>{certificate.issuer}</strong>
                        )}
                      </p>
                    </div>

                    {certificate.type !== "achievement" && (
                      <BadgeCheck
                        className="certification-verified"
                        size={21}
                      />
                    )}
                  </div>

                  <p className="certification-description">
                    {certificate.description}
                  </p>

                  {certificate.date && (
                    <div className="certification-date">
                      <CalendarDays size={13} />
                      <span>{certificate.date}</span>
                    </div>
                  )}

                  {certificate.certificateUrl && (
                    <a
                      href={certificate.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="certificate-button"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={15} />
                    </a>
                  )}

                  {certificate.profileUrl && (
                    <a
                      href={certificate.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="certificate-button achievement-button"
                    >
                      <span>View Profile</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="certifications-empty">
            <div className="certifications-empty-icon">
              <Award size={28} />
            </div>

            <div>
              <span className="certifications-empty-label">
                CERTIFICATIONS
              </span>

              <h3>More certifications coming soon.</h3>

              <p>
                Professional courses and certifications will be
                added here as I continue expanding my technical
                knowledge.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;
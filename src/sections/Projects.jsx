import {
  ExternalLink,
  ArrowUpRight,
  FolderOpen,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import projects from "../data/projects";
import SectionLabel from "../components/SectionLabel";

import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="projects-container">
        <SectionLabel
          eyebrow="Things I've built"
          title="Featured Projects"
          description="A selection of projects where I have applied my technical knowledge to build practical software."
        />

        {projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card ${
                  project.featured ? "project-card-featured" : ""
                }`}
                key={project.title}
              >
                {project.image && (
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      className="project-image"
                    />

                    <div className="project-image-overlay"></div>

                    <span className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {project.featured && (
                      <span className="featured-badge">
                        Featured
                      </span>
                    )}
                  </div>
                )}

                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>

                    <ArrowUpRight
                      className="project-title-arrow"
                      size={18}
                    />
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {project.details && (
                    <p className="project-details">
                      {project.details}
                    </p>
                  )}

                  {project.technologies?.length > 0 && (
                    <div className="project-technologies">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link project-github-link"
                      >
                        <FaGithub size={15} />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link project-demo-link"
                      >
                        <ExternalLink size={15} />
                        <span>Website</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="projects-empty">
            <div className="projects-empty-icon">
              <FolderOpen size={28} />
            </div>

            <div className="projects-empty-content">
              <span className="projects-empty-label">
                PROJECTS
              </span>

              <h3>Projects coming soon.</h3>

              <p>
                I'm building and improving projects that demonstrate
                my development skills, problem-solving ability and
                understanding of modern technologies.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
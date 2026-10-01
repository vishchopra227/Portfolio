import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Target,
} from "lucide-react";

import personalInfo from "../data/personalInfo";
import SectionLabel from "../components/SectionLabel";
import profileImage from "../assets/profile.jpg";

import "./About.css";

function About() {
  const aboutCards = [
    {
      icon: Code2,
      title: "Building",
      description:
        "Creating responsive and practical applications with a focus on clean code and good user experience.",
    },
    {
      icon: BrainCircuit,
      title: "Learning",
      description:
        "Continuously improving my knowledge of software development, algorithms and machine learning.",
    },
    {
      icon: Target,
      title: "Focused On",
      description:
        "Growing as a software engineer and solving meaningful technical problems efficiently.",
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="about-container">
        <SectionLabel
          eyebrow="Who I am"
          title="About Me"
          description="A little more about my journey, interests and the way I approach software development."
        />

        <div className="about-main">
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <div className="about-image-corner about-image-corner-top"></div>
              <div className="about-image-corner about-image-corner-bottom"></div>

              <img
                src={profileImage}
                alt={`${personalInfo.name} profile`}
                className="about-image"
              />
            </div>

            <div className="about-image-caption">
              <span className="caption-line"></span>
              <span>Software Developer</span>
            </div>
          </div>

          <div className="about-content">
            <div className="about-heading">
              <span className="about-small-label">
                HELLO, I'M {personalInfo.name.toUpperCase()}
              </span>

              <h3>
                Engineer focused on{" "}
                <span>building useful software.</span>
              </h3>
            </div>

            <div className="about-text">
              <p>{personalInfo.aboutDescription}</p>

              <p>{personalInfo.currentlyLearning}</p>
            </div>

            <div className="about-highlight">
              <div className="highlight-line"></div>

              <p>{personalInfo.problemsIEnjoy}</p>
            </div>

            <div className="about-details">
              <div className="about-detail">
                <span className="detail-label">Location</span>
                <span className="detail-value">
                  {personalInfo.location}
                </span>
              </div>

              <div className="about-detail">
                <span className="detail-label">Focus</span>
                <span className="detail-value">
                  Full Stack Development
                </span>
              </div>

              <div className="about-detail">
                <span className="detail-label">Interests</span>
                <span className="detail-value">
                  Development & Problem Solving
                </span>
              </div>
            </div>

            <button
              className="about-link"
              onClick={() => {
                const projectsSection =
                  document.getElementById("projects");

                if (projectsSection) {
                  projectsSection.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              <span>Explore my work</span>
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>

        <div className="about-cards">
          {aboutCards.map((card) => {
            const Icon = card.icon;

            return (
              <article className="about-card" key={card.title}>
                <div className="about-card-icon">
                  <Icon size={20} />
                </div>

                <div className="about-card-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
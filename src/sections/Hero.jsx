import {
  ArrowDown,
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";

import personalInfo from "../data/personalInfo";
import SocialLinks from "../components/SocialLinks";

import "./Hero.css";

function Hero() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-introduction">
            <span className="hero-line"></span>

            <span className="hero-introduction-text">
              Hello, I'm
            </span>
          </div>

          <h1 className="hero-title">
            Vishal Chopra
            <span className="hero-title-dot">.</span>
          </h1>

          <h2 className="hero-role">
            Software Developer
          </h2>

          <p className="hero-description">
            {personalInfo.shortDescription}
          </p>

          <div className="hero-location">
            <MapPin size={15} />
            <span>{personalInfo.location}</span>
          </div>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={handleScrollToProjects}
            >
              <span>View My Work</span>
              <ArrowRight size={17} />
            </button>

            <a
              href="https://drive.google.com/file/d/18lSxbgE5yomVFHfW20dBNiI8WLNvG0mR/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
          </div>

          <div className="hero-socials">
            <span className="social-heading">
              Find me on
            </span>

            <SocialLinks compact />
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-code-window">
            <div className="code-window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="window-title">
                developer.js
              </span>
            </div>

            <div className="code-content">
              <div className="code-line">
                <span className="code-number">01</span>
                <span className="code-keyword">const</span>
                <span className="code-variable">_developer</span>
                <span className="code-symbol"> = </span>
                <span className="code-bracket">&#123;</span>
              </div>

              <div className="code-line code-indent">
                <span className="code-number">02</span>
                <span className="code-property">name:</span>
                <span className="code-string">
                  "Vishal"
                </span>
                <span className="code-symbol">,</span>
              </div>

              <div className="code-line code-indent">
                <span className="code-number">03</span>
                <span className="code-property">role:</span>
                <span className="code-string">
                  "Software Developer"
                </span>
                <span className="code-symbol">,</span>
              </div>

              <div className="code-line code-indent">
                <span className="code-number">04</span>
                <span className="code-property">passion:</span>
                <span className="code-string">
                  "Building"
                </span>
                <span className="code-symbol">,</span>
              </div>

              <div className="code-line code-indent">
                <span className="code-number">05</span>
                <span className="code-property">focus:</span>
                <span className="code-string">
                  "Problem Solving"
                </span>
                <span className="code-symbol">,</span>
              </div>

              <div className="code-line">
                <span className="code-number">06</span>
                <span className="code-bracket">&#125;</span>
                <span className="code-symbol">;</span>
              </div>

              <div className="code-line code-empty">
                <span className="code-number">07</span>
              </div>

              <div className="code-line">
                <span className="code-number">08</span>
                <span className="code-keyword">developer</span>
                <span className="code-symbol">.</span>
                <span className="code-function">
                  build
                </span>
                <span className="code-symbol">();</span>
              </div>
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="floating-card-dot"></span>
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>

      <button
        className="hero-scroll-indicator"
        onClick={handleScrollToAbout}
        aria-label="Scroll to About section">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}

export default Hero;
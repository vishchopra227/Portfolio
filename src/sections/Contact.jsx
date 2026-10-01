import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import personalInfo from "../data/personalInfo";
import SectionLabel from "../components/SectionLabel";

import "./Contact.css";

function Contact() {
  const contactEmail = "vkchopra360@email.com";
  const emailAvailable = Boolean(contactEmail);

  const contactSocialLinks = [
    {
      name: "GitHub",
      url: personalInfo.socialLinks.github,
    },
    {
      name: "LinkedIn",
      url: personalInfo.socialLinks.linkedin,
    },
    {
      name: "Twitter",
      url: "https://x.com/vkchopra360",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vkchopra360/",
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="contact-container">
        <SectionLabel
          eyebrow="Get in touch"
          title="Let's Work Together"
          description="Have a project, opportunity or idea you'd like to discuss? I'd love to hear from you."
        />

        <div className="contact-card">
          {/* Main Contact Content */}
          <div className="contact-main">
            <div className="contact-icon">
              <MessageCircle size={25} />
            </div>

            <div className="contact-content">
              <span className="contact-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h3>
                Let's build something
                <span> meaningful.</span>
              </h3>

              <p>
                I'm always interested in discussing new projects,
                development opportunities and ideas. Feel free to
                reach out and start a conversation.
              </p>

              {/* Contact Details */}
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <MapPin size={15} />
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>{personalInfo.location}</strong>
                  </div>
                </div>

                {emailAvailable && (
                  <div className="contact-detail">
                    <div className="contact-detail-icon">
                      <Mail size={15} />
                    </div>

                    <div>
                      <span>Email</span>

                      <a
                        href={`mailto:${contactEmail}`}
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        <strong>{contactEmail}</strong>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Email Button */}
              <div className="contact-actions">
                {emailAvailable ? (
                  <a
                    href={`mailto:${contactEmail}`}
                    className="contact-primary-button"
                  >
                    <Mail size={16} />

                    <span>Send Me an Email</span>

                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <div className="contact-email-placeholder">
                    <Mail size={16} />

                    <span>No email available</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-side">
            <span className="contact-side-label">
              CONNECT WITH ME
            </span>

            <p>
              You can also find me across these platforms.
            </p>

            <div className="social-links">
              {contactSocialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-link-name">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="contact-side-divider"></div>

            <span className="contact-response">
              Open to opportunities & collaborations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
import { useState } from "react";
import { Menu, X } from "lucide-react";
import personalInfo from "../data/personalInfo";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Experience", target: "experience" },
    { label: "Education", target: "education" },
    { label: "Projects", target: "projects" },
    { label: "Achievements", target: "certifications" },
    { label: "Contact", target: "contact" },
  ];

  const handleNavigation = (target) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button
          className="navbar-logo"
          onClick={() => handleNavigation("home")}
          aria-label="Go to homepage"
        >
          <span className="logo-bracket">&lt;</span>
          <span>{personalInfo.name}</span>
          <span className="logo-bracket">/&gt;</span>
        </button>

        <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
          {navigationItems.map((item) => (
            <button
              key={item.target}
              className="navbar-link"
              onClick={() => handleNavigation(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((currentState) => !currentState)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
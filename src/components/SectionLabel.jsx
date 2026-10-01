import "./SectionLabel.css";

function SectionLabel({ eyebrow, title, description }) {
  return (
    <div className="section-label">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}

      <h2 className="section-title">{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

export default SectionLabel;
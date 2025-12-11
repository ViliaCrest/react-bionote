import viliaImage from "./image/vilia.jpg";

export default function Bionote({ onBack }) {
  return (
    <div className="bionote-wrapper">
      <button
        onClick={onBack}
        className="back-btn"
      >
        ← Back
      </button>

      <div className="bionote-container">
        <img src={viliaImage} alt="Vilia Crestene" className="profile-pic" />
        <div className="bionote-content">
          <h1 className="name">Vilia Crestene</h1>

          <p className="bio">
            I am a BSIT student dedicated to building intuitive and impactful systems.
          </p>

          <div className="section skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-list">
              {["HTML", "CSS", "JavaScript", "React", "MySQL", "C# ASP.NET"].map(
                (skill) => (
                  <span key={skill} className="skill">{skill}</span>
                )
              )}
            </div>
          </div>

          <div className="section interests-section">
            <h2 className="section-title">Interests</h2>
            <p>Web Development, UI/UX Design, System Development, Database Management.</p>
          </div>

          <div className="section education-section">
            <h2 className="section-title">Education</h2>
            <p>Bachelor of Science in Information Technology (BSIT-3A PYTHON)</p>
          </div>

          <div className="section projects-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-list">
              {[
                "Classroom Scheduler & Room Utilization Tracker",
                "Library Management System",
                "SPENDY-Budget Tracker",
              ].map((project) => (
                <span key={project} className="project-card">{project}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
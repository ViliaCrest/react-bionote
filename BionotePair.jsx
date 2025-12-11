import carlaImage from "./image/Carla.jpg";

export default function BionotePair({ onBack }) {
    return (
      <div className="bionote-wrapper">
        <button
          onClick={onBack}
          className="back-btn"
        >
          ← Back
        </button>
  
        <div className="bionote-container">
          <img src={carlaImage} alt="Carla Primitiva" className="profile-pic" />
          <div className="bionote-content">
            <h1 className="name">Carla Primitiva</h1>
  
            <p className="bio">
              I am a BSIT student passionate about technology and system development.
            </p>
  
            <div className="section skills-section">
              <h2 className="section-title">Skills</h2>
              <div className="skills-list">
                {["HTML", "CSS", "JavaScript", "React", "Database", "Networking"].map(
                  (skill) => (
                    <span key={skill} className="skill">{skill}</span>
                  )
                )}
              </div>
            </div>
  
            <div className="section interests-section">
              <h2 className="section-title">Interests</h2>
              <p>System Development, UI/UX, IT Support, Networking.</p>
            </div>
  
            <div className="section education-section">
              <h2 className="section-title">Education</h2>
              <p>Bachelor of Science in Information Technology (BSIT-3A PYTHON)</p>
            </div>
  
            <div className="section projects-section">
              <h2 className="section-title">Featured Projects</h2>
              <div className="projects-list">
                {[
                  "Hiraya Bookings",
                  "StudySphere",
                  "Uncle Brew POS System",
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
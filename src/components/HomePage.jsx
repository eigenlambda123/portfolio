import { projectCards } from '../data/projects';
import { skillChips } from '../data/skills';
import { certifications } from '../data/certifications';

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">Computer Science • Data Science</p>
            <h1>RM A. Villa</h1>
            <p className="lead">
              I'm interested in research as well as practical software and artificial intelligence.
            </p>
            <div className="cta-row">
              <a className="button github-btn" href="https://github.com/eigenlambda123" target="_blank" rel="noreferrer">GitHub</a>
              <a className="button linkedin-btn" href="https://www.linkedin.com/in/villaRm" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button resume-btn" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="narrow">
          <p className="section-tag">About</p>
          <p>
            I'm a 3rd-year Computer Science student who likes building useful stuff—apps, data tools, and ML experiments. I mainly use Python, SQL, and FastAPI, especially for hackathons and side projects. Lately I've been geeking out on the math behind machine learning and AI.
          </p>
        </div>
      </section>

      <section className="section alt" id="projects">
        <div>
          <p className="section-tag">Projects</p>
          <div className="project-grid">
            {projectCards.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.stack}</span>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="narrow">
          <p className="section-tag">Skills</p>
          <div className="chip-list">
            {skillChips.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="certifications">
        <div className="narrow">
          <p className="section-tag">Certifications</p>
          <p className="muted">Click a thumbnail to open the original PDF.</p>

          <div className="cert-grid">
            {certifications.map((category) => (
              <div className="cert-category" key={category.label}>
                <h4>{category.label}</h4>
                <div className="thumb-row">
                  {category.items.map((item) => (
                    <a href={item.pdf} target="_blank" rel="noreferrer" key={item.title}>
                      <img src={item.image} alt={item.title} loading="lazy" width="320" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-box">
          <h2>Let's build something useful.</h2>
          <div className="cta-row contact-actions">
            <a className="button github-btn" href="https://github.com/eigenlambda123" target="_blank" rel="noreferrer">GitHub</a>
            <a className="button linkedin-btn" href="https://www.linkedin.com/in/villaRm" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}

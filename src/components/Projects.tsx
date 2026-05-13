import { useReveal } from '../hooks/useReveal';
import { projects } from '../data';

export function Projects() {
  useReveal();

  return (
    <section id="projects">
      <div className="section-label reveal">Portfolio</div>
      <h2 className="section-title reveal reveal-d1">
        Featured <span>Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={p.title} className={`project-card reveal reveal-d${i + 1}`}>
            <div className="project-header">
              <img
                src={p.image}
                alt={p.title}
                className="project-img"
                loading="lazy"
              />
              <div className="project-img-overlay">
                <span className="project-img-icon">{p.icon}</span>
              </div>
              {/* Gradient fade to card body */}
              <div className="project-img-fade" />
            </div>
            <div className="project-body">
              <div className="project-year">{p.year}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {p.linkLabel}
                </a>
              ) : (
                <span className="project-link-disabled">🔒 {p.linkLabel}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


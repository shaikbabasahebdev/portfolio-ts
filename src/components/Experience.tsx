import { useReveal } from '../hooks/useReveal';
import { experiences } from '../data';

export function Experience() {
  useReveal();

  return (
    <section id="experience">
      <div className="section-label reveal">Career Path</div>
      <h2 className="section-title reveal reveal-d1">
        Work <span>Experience</span>
      </h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={exp.company} className={`timeline-item reveal reveal-d${i + 1}`}>
            <div className="timeline-dot" />
            <div className="timeline-meta">
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-date">{exp.date}</div>
            </div>
            <div className="timeline-role">{exp.role}</div>
            <ul className="timeline-points">
              {exp.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useReveal } from '../hooks/useReveal';
import { skills } from '../data';

export function Skills() {
  useReveal();

  return (
    <section id="skills">
      <div className="section-label reveal">Technical Arsenal</div>
      <h2 className="section-title reveal reveal-d1">
        Skills &amp; <span>Technologies</span>
      </h2>
      <div className="skills-grid">
        {skills.map((cat, i) => (
          <div key={cat.title} className={`skill-cat reveal reveal-d${(i % 3) + 1}`}>
            <div className="skill-cat-title">
              <span>{cat.icon}</span> {cat.title}
            </div>
            <div className="skill-pills">
              {cat.items.map((s) => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

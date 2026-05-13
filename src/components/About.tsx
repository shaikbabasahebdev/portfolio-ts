import { useReveal } from '../hooks/useReveal';

const AVATAR_URL =
  'https://api.dicebear.com/8.x/avataaars/svg?seed=BabasahebShaik&backgroundColor=transparent&clothingColor=262e33&facialHairColor=2c1b18&hairColor=2c1b18&skinColor=d08b5b';

export function About() {
  useReveal();

  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-text">
          <div className="section-label reveal">About Me</div>
          <h2 className="section-title reveal reveal-d1">
            Building things<br />that <span>matter</span>
          </h2>
          <p className="reveal reveal-d2">
            I'm a <strong>Full Stack Developer</strong> based in Bangalore, India, with 3+ years of
            experience building scalable web applications across frontend and backend stacks.
          </p>
          <p className="reveal reveal-d3">
            Proficient in <strong>React.js, TypeScript, Next.js, Node.js, and Golang</strong>, with
            hands-on experience integrating cloud services (AWS Lambda, S3) and databases (PostgreSQL, MongoDB).
          </p>
          <p className="reveal reveal-d4">
            Passionate about <strong>clean code, responsive UIs</strong>, and delivering production-grade
            software that scales. I love turning complex problems into elegant solutions.
          </p>
          <div className="tag-list reveal" style={{ marginTop: '2rem' }}>
            {['React.js', 'TypeScript', 'Next.js', 'Golang', 'Node.js', 'AWS', 'PostgreSQL', 'MongoDB'].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="reveal reveal-d1">
          <div className="about-card">
            {/* Animated corner glow */}
            <div className="about-card-glow" aria-hidden="true" />
            <div className="avatar">
              <img src={AVATAR_URL} alt="Babasaheb avatar" width="72" height="72" />
            </div>
            <div className="about-card-name">Shaik Babasaheb</div>
            <div className="about-card-role">$ Full Stack Developer</div>
            <hr />
            <div className="card-meta">
              <div><span className="key">location</span> <span className="arr">→</span> Bangalore, India</div>
              <div><span className="key">education</span> <span className="arr">→</span> B.Tech CSE, CGPA 8.0</div>
              <div><span className="key">experience</span> <span className="arr">→</span> 3+ years</div>
              <div>
                <span className="key">status</span> <span className="arr">→</span>{' '}
                <span className="status-badge">open to work</span>
              </div>
            </div>
            {/* Decorative floating rings */}
            <div className="about-ring about-ring-1" aria-hidden="true" />
            <div className="about-ring about-ring-2" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}


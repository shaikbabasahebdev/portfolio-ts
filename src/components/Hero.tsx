import { StatCell } from './StatCell';
import { useTyping } from '../hooks/useTyping';

const ROLES = [
  'Full Stack Developer',
  'React · TypeScript Engineer',
  'Golang Backend Dev',
  'AWS Cloud Builder',
];

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  x: `${(i * 41 + 5) % 95}%`,
  delay: `${(i * 0.65) % 8}s`,
  dur: `${7 + (i % 5) * 1.5}s`,
  size: `${2 + (i % 3)}px`,
}));

interface HeroProps {
  scrollTo: (id: string) => void;
}

export function Hero({ scrollTo }: HeroProps) {
  const typed = useTyping(ROLES, 72, 2600);

  return (
    <div id="hero" className="hero-outer">
      <div className="hero-grid" />
      <div className="hero-glow" />

      {/* Floating particles */}
      <div className="particles-wrap" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={
              {
                '--px': p.x,
                '--pd': p.delay,
                '--pdur': p.dur,
                '--ps': p.size,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="hero-layout">
        {/* ── Left: Text ── */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1>
            <span className="glitch">Shaik</span>{' '}
            <em className="grad">Babasaheb</em>
          </h1>

          <div className="hero-role">
            //{' '}
            <span className="typed-text">{typed}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-sub">
            Building scalable, production-grade web applications with a focus on clean architecture,
            responsive UIs, and performance. 3+ years crafting digital experiences.
          </p>

          <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View Projects →
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </div>

          <div className="hero-stats-bar">
            <StatCell num={3} label="Years Experience" cls="c" />
            <StatCell num={5} label="Projects Shipped" cls="g" />
            <StatCell num={8} label="Tech Stack" cls="b" />
          </div>
        </div>

        {/* ── Right: Code Editor Illustration ── */}
        <div className="hero-visual" aria-hidden="true">
          <CodeEditorIllustration />
          <div className="floating-tech-badges">
            {/* right side */}
            <span className="tech-float tb-react">⚛ React</span>
            <span className="tech-float tb-ts">TS</span>
            <span className="tech-float tb-go">Go</span>
            <span className="tech-float tb-node">Node.js</span>
            <span className="tech-float tb-mui">Material-UI</span>
            {/* left side */}
            <span className="tech-float tb-aws">☁ AWS</span>
            <span className="tech-float tb-mongo">MongoDB</span>
            <span className="tech-float tb-express">Express</span>
            <span className="tech-float tb-python">🐍 Python</span>
            {/* top / bottom */}
            <span className="tech-float tb-next">Next.js</span>
            <span className="tech-float tb-tail">Tailwind</span>
            <span className="tech-float tb-pg">PostgreSQL</span>
            <span className="tech-float tb-jwt">JWT</span>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </div>
  );
}

function CodeEditorIllustration() {
  return (
    <div className="code-editor-wrap">
      <svg
        viewBox="0 0 470 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="code-editor-svg"
      >
        {/* Window */}
        <rect
          width="470"
          height="330"
          rx="14"
          fill="#131314"
          stroke="rgba(128,255,249,0.18)"
          strokeWidth="1.5"
        />
        {/* Title bar */}
        <rect width="470" height="44" rx="14" fill="#18181A" />
        <rect y="32" width="470" height="12" fill="#18181A" />
        {/* Traffic lights */}
        <circle cx="28" cy="22" r="6" fill="#FF5F57" />
        <circle cx="50" cy="22" r="6" fill="#FEBC2E" />
        <circle cx="72" cy="22" r="6" fill="#28C840" />
        {/* Tabs */}
        <rect x="104" y="11" width="112" height="22" rx="5" fill="#0E0E0F" />
        <text x="122" y="26" fontSize="10" fill="rgba(128,255,249,0.85)" fontFamily="monospace">
          App.tsx
        </text>
        <text x="228" y="26" fontSize="10" fill="rgba(255,255,255,0.28)" fontFamily="monospace">
          Hero.tsx
        </text>
        {/* Line gutter */}
        <rect x="0" y="44" width="38" height="286" fill="rgba(255,255,255,0.02)" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n, i) => (
          <text
            key={n}
            x="10"
            y={67 + i * 21}
            fontSize="9"
            fill="rgba(255,255,255,0.18)"
            fontFamily="monospace"
          >
            {n}
          </text>
        ))}
        {/* — Code lines — */}
        <text x="48" y="67" fontSize="10.5" fill="#C792EA" fontFamily="monospace">
          import
        </text>
        <text x="92" y="67" fontSize="10.5" fill="#80CBC4" fontFamily="monospace">
          {'{ useState }'}
        </text>
        <text x="194" y="67" fontSize="10.5" fill="#C792EA" fontFamily="monospace">
          from
        </text>
        <text x="222" y="67" fontSize="10.5" fill="#C3E88D" fontFamily="monospace">
          {'  "react"'}
        </text>
        <text x="48" y="88" fontSize="10.5" fill="#C792EA" fontFamily="monospace">
          import
        </text>
        <text x="92" y="88" fontSize="10.5" fill="#80CBC4" fontFamily="monospace">
          {'{ Hero, About }'}
        </text>
        <text x="214" y="88" fontSize="10.5" fill="#C792EA" fontFamily="monospace">
          from
        </text>
        <text x="242" y="88" fontSize="10.5" fill="#C3E88D" fontFamily="monospace">
          {'  "./components"'}
        </text>
        {/* blank line */}
        <text x="48" y="130" fontSize="10.5" fill="#C792EA" fontFamily="monospace">
          export default function{' '}
        </text>
        <text x="250" y="130" fontSize="10.5" fill="#82AAFF" fontFamily="monospace">
          App
        </text>
        <text x="272" y="130" fontSize="10.5" fill="#89DDFF" fontFamily="monospace">
          {'() {'}
        </text>
        <text x="58" y="151" fontSize="10.5" fill="#C792EA" fontFamily="monospace">
          const{' '}
        </text>
        <text x="92" y="151" fontSize="10.5" fill="#EEFFFF" fontFamily="monospace">
          {'[dark, setDark] ='}
        </text>
        <text x="228" y="151" fontSize="10.5" fill="#82AAFF" fontFamily="monospace">
          {' useState'}
        </text>
        <text x="304" y="151" fontSize="10.5" fill="#89DDFF" fontFamily="monospace">
          {'(true)'}
        </text>
        <text x="58" y="172" fontSize="10.5" fill="#C792EA" fontFamily="monospace">
          return
        </text>
        <text x="100" y="172" fontSize="10.5" fill="#89DDFF" fontFamily="monospace">
          {'('}
        </text>
        <text x="68" y="193" fontSize="10.5" fill="#FF5370" fontFamily="monospace">
          {'<div'}
        </text>
        <text x="96" y="193" fontSize="10.5" fill="#80CBC4" fontFamily="monospace">
          {' className'}
        </text>
        <text x="186" y="193" fontSize="10.5" fill="#89DDFF" fontFamily="monospace">
          {'='}
        </text>
        <text x="194" y="193" fontSize="10.5" fill="#C3E88D" fontFamily="monospace">
          {'"app"'}
        </text>
        <text x="234" y="193" fontSize="10.5" fill="#FF5370" fontFamily="monospace">
          {'>'}
        </text>
        <text x="82" y="214" fontSize="10.5" fill="#FF5370" fontFamily="monospace">
          {'<Nav'}
        </text>
        <text x="110" y="214" fontSize="10.5" fill="#80CBC4" fontFamily="monospace">
          {' dark'}
        </text>
        <text x="142" y="214" fontSize="10.5" fill="#89DDFF" fontFamily="monospace">
          {'={dark} />'}
        </text>
        <text x="82" y="235" fontSize="10.5" fill="#FF5370" fontFamily="monospace">
          {'<Hero'}
        </text>
        <text x="116" y="235" fontSize="10.5" fill="#80CBC4" fontFamily="monospace">
          {' scrollTo'}
        </text>
        <text x="188" y="235" fontSize="10.5" fill="#89DDFF" fontFamily="monospace">
          {'={scrollTo}'}
        </text>
        {/* Active line */}
        <rect x="0" y="246" width="470" height="21" fill="rgba(128,255,249,0.04)" rx="2" />
        <text x="82" y="261" fontSize="10.5" fill="#FF5370" fontFamily="monospace">
          {'<About'}
        </text>
        <text x="122" y="261" fontSize="10.5" fill="#80CBC4" fontFamily="monospace">
          {' theme'}
        </text>
        <text x="162" y="261" fontSize="10.5" fill="#89DDFF" fontFamily="monospace">
          {'={theme}'}
        </text>
        <text x="216" y="261" fontSize="10.5" fill="#FF5370" fontFamily="monospace">
          {' />'}
        </text>
        {/* Blinking cursor */}
        <rect
          className="editor-cursor"
          x="248"
          y="251"
          width="2"
          height="13"
          fill="rgba(128,255,249,0.9)"
        />
        <text x="68" y="282" fontSize="10.5" fill="#FF5370" fontFamily="monospace">
          {'</div>'}
        </text>
        <text x="58" y="303" fontSize="10.5" fill="#89DDFF" fontFamily="monospace">
          {')'}
        </text>
        <text x="48" y="324" fontSize="10.5" fill="#89DDFF" fontFamily="monospace">
          {'}'}
        </text>
      </svg>
    </div>
  );
}


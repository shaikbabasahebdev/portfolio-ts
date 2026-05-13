import { useState, useEffect, useRef } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { navItems } from './data';

const techTicker = [
  'React.js', 'TypeScript', 'Golang', 'Node.js', 'Next.js',
  'AWS Lambda', 'PostgreSQL', 'MongoDB', 'JWT', 'Material-UI', 'TailwindCSS',
];

// ── Custom cursor ──────────────────────────────────────────────────────────────
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px,${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px,${ringY - 20}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animId = requestAnimationFrame(animate);

    const addHover = () => {
      dotRef.current?.classList.add('cursor-hover');
      ringRef.current?.classList.add('cursor-hover');
    };
    const rmHover = () => {
      dotRef.current?.classList.remove('cursor-hover');
      ringRef.current?.classList.remove('cursor-hover');
    };
    document.querySelectorAll('a,button,[class*="card"],[class*="pill"],[class*="link"]').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', rmHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

// ── Mouse glow orb ─────────────────────────────────────────────────────────────
function GlowOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let orbX = window.innerWidth / 2;
    let orbY = window.innerHeight / 2;
    let mouseX = orbX;
    let mouseY = orbY;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      orbX += (mouseX - orbX) * 0.055;
      orbY += (mouseY - orbY) * 0.055;
      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${orbX - 220}px,${orbY - 220}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animId = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <div ref={orbRef} className="mouse-glow" aria-hidden="true" />;
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  function toggleTheme(): void {
    setDarkMode((d) => !d);
  }

  function scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <GlowOrb />
      <div className="scanline" />

      <Nav
        navItems={navItems}
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        scrollTo={scrollTo}
        setMobileOpen={setMobileOpen}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <Hero scrollTo={scrollTo} />

      <div
        style={{
          background: 'var(--bg2)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '14px 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'ticker 28s linear infinite',
            fontFamily: 'var(--mono)',
            fontSize: '.75rem',
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
          }}
        >
          {/* duplicate items for seamless loop */}
          {[...techTicker, ...techTicker].map((t, i) => (
            <span key={i} style={{ flexShrink: 0, padding: '0 2.5rem' }}>✦ {t}</span>
          ))}
        </div>
      </div>

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}


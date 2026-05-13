import type { Dispatch, SetStateAction } from 'react';

interface NavProps {
  navItems: string[];
  activeSection: string;
  mobileOpen: boolean;
  scrollTo: (id: string) => void;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  toggleTheme: () => void;
}

export function Nav({ navItems, activeSection, mobileOpen, scrollTo, setMobileOpen, darkMode, toggleTheme }: NavProps) {
  return (
    <>
      <nav className="nav">
        <a className="nav-logo" onClick={() => scrollTo('hero')}>
          SB<span className="logo-dot" />
        </a>
        <ul className="nav-links">
          {navItems.map((n) => (
            <li key={n}>
              <a
                className={activeSection === n.toLowerCase() ? 'active' : ''}
                onClick={() => scrollTo(n.toLowerCase())}
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              /* Sun icon — click to go light */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon — click to go dark */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a href="mailto:shaikbabasaheb.dev@gmail.com" className="nav-cta">Hire Me</a>
          <button className="hamburger" onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {navItems.map((n) => (
          <a key={n} onClick={() => scrollTo(n.toLowerCase())}>{n}</a>
        ))}
      </div>
    </>
  );
}

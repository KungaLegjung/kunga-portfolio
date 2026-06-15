import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/index.js';

/* ── NAVBAR ─────────────────────────────────────────────────────────────── */
export function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <span className="nav-logo" onClick={() => scrollTo('home')}>
          KU<em>N</em>GA
        </span>

        <ul className="nav-links">
          {NAV_ITEMS.map(n => (
            <li key={n.id}>
              <button
                className={`nav-link${active === n.id ? ' active' : ''}`}
                onClick={() => scrollTo(n.id)}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="btn-hire" onClick={() => scrollTo('contact')}>
          HIRE ME
        </button>

        {/* Hamburger — mobile only */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-mobile open">
          {NAV_ITEMS.map(n => (
            <button
              key={n.id}
              className={`nav-link${active === n.id ? ' active' : ''}`}
              onClick={() => { scrollTo(n.id); setMenuOpen(false); }}
            >
              {n.label}
            </button>
          ))}
          <button className="btn-hire" onClick={() => { scrollTo('contact'); setMenuOpen(false); }}>
            HIRE ME
          </button>
        </div>
      )}
    </>
  );
}

/* ── SECTION HEADER ─────────────────────────────────────────────────────── */
export function SecHeader({ num, title, hl }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{num}</span>
      <h2 className="sec-title">
        {title}<span>{hl}</span>
      </h2>
      <div className="sec-line" />
    </div>
  );
}

/* ── GLITCH TEXT ─────────────────────────────────────────────────────────── */
export function GlitchText({ text, color = 'var(--p)' }) {
  return (
    <span style={{ color, fontWeight: 800 }}>
      {text}
    </span>
  );
}

/* ── GLASS CARD ─────────────────────────────────────────────────────────── */
export function GlassCard({ children, style = {}, className = '', onClick }) {
  return (
    <div
      className={`glass-card ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}

/* ── TECH PILL ───────────────────────────────────────────────────────────── */
export function TechPill({ label }) {
  return <span className="tech-pill">{label}</span>;
}

/* ── HEX BADGE ───────────────────────────────────────────────────────────── */
export function HexBadge({ children, color = 'var(--p)' }) {
  return (
    <span style={{
      fontFamily: 'var(--exo)',
      fontSize: 12,
      fontWeight: 500,
      padding: '4px 12px',
      borderRadius: '6px',
      border: `1px solid ${color}40`,
      color,
      background: `${color}08`,
      display: 'inline-block',
    }}>
      {children}
    </span>
  );
}
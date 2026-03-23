import { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../data/index.js';

/* ── CURSOR ────────────────────────────────────────────────────────────── */
export function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos  = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    let id;
    const lerp = () => {
      ring.current.x += (pos.current.x - ring.current.x) * .1;
      ring.current.y += (pos.current.y - ring.current.y) * .1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top  = ring.current.y + 'px';
      }
      id = requestAnimationFrame(lerp);
    };
    id = requestAnimationFrame(lerp);

    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(id); };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  style={{ top: 0, left: 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ top: 0, left: 0 }} />
    </>
  );
}

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
export function GlitchText({ text, color = 'var(--c)' }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', color, textShadow: `0 0 8px ${color}, 0 0 22px ${color}` }}>
      {text}
      <span aria-hidden style={{ position: 'absolute', inset: 0, color: 'var(--pk)', animation: 'glitch1 3.5s infinite', mixBlendMode: 'screen', opacity: .65 }}>{text}</span>
      <span aria-hidden style={{ position: 'absolute', inset: 0, color: 'var(--p)',  animation: 'glitch2 4s .5s infinite', mixBlendMode: 'screen', opacity: .55 }}>{text}</span>
    </span>
  );
}

/* ── GLASS CARD ─────────────────────────────────────────────────────────── */
export function GlassCard({ children, style = {}, className = '', hoverColor = 'rgba(56,189,248,0.4)', onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className={`glass-card ${className}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        ...style,
        borderColor: hov ? hoverColor : undefined,
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hov ? `0 18px 44px rgba(0,0,0,.5), 0 0 22px ${hoverColor}22` : 'none',
      }}
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
export function HexBadge({ children, color = 'var(--c)' }) {
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: 2,
      padding: '4px 14px',
      border: `.5px solid ${color}`,
      color,
      background: `${color}14`,
      clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
      display: 'inline-block',
    }}>
      {children}
    </span>
  );
}
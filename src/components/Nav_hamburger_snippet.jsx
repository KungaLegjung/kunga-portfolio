// ─── ADD THIS to your Nav component ───────────────────────────────────────
// 1. Add state at the top of your Nav function:
const [menuOpen, setMenuOpen] = useState(false);

// 2. Replace your existing nav JSX with this:
// (Keep all your existing logic for scrolled, scrollTo, etc.)

return (
  <>
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-logo" onClick={() => scrollTo('home')}>KL<em>.</em></a>

      {/* Desktop links */}
      <ul className="nav-links">
        {['home','about','education','skills','experience','projects','contact'].map(s => (
          <li key={s}>
            <button className={`nav-link${active === s ? ' active' : ''}`} onClick={() => scrollTo(s)}>
              {s.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      <button className="btn-hire desktop-only" onClick={() => scrollTo('contact')}>HIRE ME</button>

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
        {['home','about','education','skills','experience','projects','contact'].map(s => (
          <button
            key={s}
            className={`nav-link${active === s ? ' active' : ''}`}
            onClick={() => { scrollTo(s); setMenuOpen(false); }}
          >
            {s.toUpperCase()}
          </button>
        ))}
        <button className="btn-hire" onClick={() => { scrollTo('contact'); setMenuOpen(false); }}>
          HIRE ME
        </button>
      </div>
    )}
  </>
);

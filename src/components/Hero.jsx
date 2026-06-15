import { useState, useEffect } from 'react';

const ROLES = [
  'MCA Graduate',
  'Software Developer',
  'AI / ML Enthusiast',
  'Data Science',
];

const PROFILE_IMG = new URL('./kl.jpeg', import.meta.url).href;

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    let idx = 0, adding = true, timer;
    function tick() {
      const target = ROLES[roleIdx];
      if (adding) {
        idx++;
        setTyped(target.slice(0, idx));
        if (idx >= target.length) { adding = false; timer = setTimeout(tick, 1800); return; }
      } else {
        idx--;
        setTyped(target.slice(0, idx));
        if (idx === 0) { adding = true; setRoleIdx(r => (r + 1) % ROLES.length); }
      }
      timer = setTimeout(tick, adding ? 68 : 36);
    }
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [roleIdx]);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section" id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', maxWidth: 1100,
        margin: '0 auto', padding: '120px 40px',
        display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap',
      }}>

        {/* ── LEFT ── */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <div style={{ fontFamily: 'var(--exo)', fontSize: 13, fontWeight: 600, letterSpacing: 2, color: 'var(--p)', marginBottom: 16, textTransform: 'uppercase' }}>
            Hello, I am
          </div>

          <h1 style={{ fontFamily: 'var(--exo)', fontSize: 'clamp(40px, 5.5vw, 64px)', fontWeight: 800, lineHeight: 1.1, color: '#fff', marginBottom: 12 }}>
            KUNGA <span style={{ color: 'var(--p)' }}>LEGJUNG</span>
          </h1>

          <div style={{ fontFamily: 'var(--exo)', fontSize: 20, fontWeight: 500, color: 'rgba(255, 255, 255, 0.8)', height: 30, marginBottom: 24 }}>
            {typed}<span style={{ animation: 'blink 1s infinite', color: 'var(--p)' }}>|</span>
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.7, color: '#94a3b8', maxWidth: 520, marginBottom: 28 }}>
            Building tomorrow's digital solutions — from intelligent ML systems to real-time web platforms. Final year MCA student passionate about clean code and modern user interfaces.
          </p>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {['React.js', 'Node.js', 'Python', 'MongoDB', 'Machine Learning', 'AWS'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="/resume.pdf"
              download="Kunga_Legjung_Resume.pdf"
              style={{ textDecoration: 'none' }}
            >
              <button className="btn-primary">DOWNLOAD RESUME</button>
            </a>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              HIRE ME
            </button>
          </div>
        </div>

        {/* ── RIGHT — Profile ── */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
          {/* Profile card with simple elegant hover shadow */}
          <div style={{
            position: 'relative', width: 280, height: 280, borderRadius: '50%', overflow: 'hidden',
            border: '4px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            background: 'var(--bg2)',
          }}>
            {PROFILE_IMG ? (
              <img src={PROFILE_IMG} alt="Kunga Legjung" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <div style={{ fontSize: 72 }}>👨‍💻</div>
              </div>
            )}
          </div>

          {/* Simple clean floating stat cards */}
          <div style={{
            position: 'absolute', top: '-10px', right: '-20px',
            background: 'rgba(17, 24, 39, 0.9)', border: '1px solid var(--border)',
            borderRadius: '10px', padding: '10px 16px', backdropFilter: 'blur(8px)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: '#94a3b8' }}>CGPA</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--p)' }}>8.53/10</div>
          </div>

          <div style={{
            position: 'absolute', bottom: '20px', left: '-30px',
            background: 'rgba(17, 24, 39, 0.9)', border: '1px solid var(--border)',
            borderRadius: '10px', padding: '10px 16px', backdropFilter: 'blur(8px)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: '#94a3b8' }}>Projects</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--g)' }}>15+</div>
          </div>
        </div>
      </div>
    </section>
  );
}

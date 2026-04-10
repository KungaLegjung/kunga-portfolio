import { useState, useEffect } from 'react';
import ParticleBg from './ParticleBg.jsx';
import { GlitchText } from './UI.jsx';

const ROLES = [
  'MCA Graduate',
  'Software Developer',
  'AI / ML Enthusiast',
  'Data Analystics',
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
      <ParticleBg type="matrix" />

      {/* grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,255,231,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,231,0.02) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="hero-inner">

        {/* ── LEFT ── */}
        <div className="hero-left">
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 6, color: 'var(--c)', opacity: .65, marginBottom: 22, animation: 'fadeUp .6s ease both' }}>
            &gt;_ INITIALIZING PORTFOLIO.exe
          </div>

          <h1 style={{ fontFamily: 'var(--orb)', fontSize: 'clamp(32px,5.5vw,72px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 14, animation: 'fadeUp .7s .1s ease both' }}>
            <GlitchText text="KUNGA" /><br />
            <span style={{ color: 'var(--pk)', textShadow: '0 0 20px var(--pk), 0 0 40px rgba(255,45,120,.28)' }}>LEGJUNG</span>
          </h1>

          <div style={{ fontFamily: 'var(--mono)', fontSize: 18, color: 'var(--c)', height: 28, marginBottom: 26, animation: 'fadeUp .7s .2s ease both' }}>
            {typed}<span style={{ animation: 'blink 1s infinite' }}>_</span>
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(200,220,255,.58)', maxWidth: 480, marginBottom: 34, animation: 'fadeUp .7s .3s ease both' }}>
            Building tomorrow's digital solutions — from intelligent ML systems to real-time web platforms. Final year MCA student passionate about clean code and futuristic interfaces.
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32, animation: 'fadeUp .7s .4s ease both' }}>
            {['React.js', 'Node.js', 'Python', 'MongoDB', 'Machine Learning', 'AWS'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', animation: 'fadeUp .7s .5s ease both' }}>
            <a href="/KungaLegjungCV.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button className="btn-primary">VIEW RESUME</button>
            </a>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              HIRE ME
            </button>
          </div>
        </div>

        {/* ── RIGHT — Profile ── */}
        <div className="hero-right">
          <div style={{ position: 'relative', animation: 'float 4s ease-in-out infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Rotating rings */}
            {[
              { s: 260, dur: '12s', c: 'rgba(56,189,248,0.22)', dir: 'spin' },
              { s: 310, dur: '19s', c: 'rgba(129,140,248,0.16)', dir: 'spinR' },
              { s: 358, dur: '27s', c: 'rgba(244,63,94,0.10)', dir: 'spin' },
            ].map((r, i) => (
              <div key={i} style={{
                position: 'absolute', top: '50%', left: '50%',
                width: r.s, height: r.s,
                marginTop: -r.s / 2, marginLeft: -r.s / 2,
                borderRadius: '50%', border: `1px solid ${r.c}`,
                animation: `${r.dir} ${r.dur} linear infinite`,
                pointerEvents: 'none',
              }}>
                <div style={{ position: 'absolute', top: -4, left: '50%', width: 8, height: 8, marginLeft: -4, borderRadius: '50%', background: r.c.replace('0.28', '0.9').replace('0.18', '0.9').replace('0.12', '0.9'), boxShadow: `0 0 14px ${r.c}` }} />
              </div>
            ))}

            {/* Profile circle */}
            <div className="hero-avatar">
              {PROFILE_IMG
                ? <img src={PROFILE_IMG} alt="Kunga Legjung" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : (
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#050f20 0%,#0a1a3a 50%,#050f20 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    <div style={{ fontSize: 68 }}>👨‍💻</div>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: 3, color: 'rgba(56,189,248,.35)' }}>YOUR PHOTO</span>
                  </div>
                )
              }
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(56,189,248,.04) 50%,transparent 60%)', animation: 'scanline 3s linear infinite' }} />
            </div>

            {/* Floating stat chips */}
            {[
              { label: 'CGPA', val: '8.52/10', style: { top: '5%', right: '-22%' },  c: 'var(--c)' },
              { label: 'Projects', val: '4', style: { bottom: '18%', right: '-22%' }, c: 'var(--p)' },
              { label: 'Internships', val: '3', style: { bottom: '4%', left: '-8%' }, c: 'var(--pk)' },
            ].map((chip, i) => (
              <div key={i} className="hero-chip" style={{
                position: 'absolute', ...chip.style,
                background: 'rgba(5,15,30,.92)', border: `.5px solid ${chip.c}`,
                padding: '8px 14px', backdropFilter: 'blur(8px)',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: 2, color: chip.c, opacity: .7 }}>{chip.label}</div>
                <div style={{ fontFamily: 'var(--orb)', fontSize: 17, fontWeight: 700, color: chip.c }}>{chip.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[0, 1, 2, 3].map(i => (
            <span key={i} className="ticker-text">
              ◈ REACT ◈ NODE.JS ◈ PYTHON ◈ MONGODB ◈ AWS ◈ MACHINE LEARNING ◈ DOCKER ◈ SPRINGBOOT &nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { SecHeader, GlassCard, HexBadge, TechPill } from './UI.jsx';
import { EDUCATION, EXPERIENCE, SKILL_CATEGORIES } from '../data/index.js';

/* ── ABOUT ──────────────────────────────────────────────────────────────── */
export function About() {
  const STATS = [
    { num: '15+',  lbl: 'Projects Built',       c: 'var(--c)'  },
    { num: '3+',   lbl: 'Years Coding',          c: 'var(--p)'  },
    { num: '3',    lbl: 'Internships Done',      c: 'var(--pk)' },
    { num: '8+',   lbl: 'Technologies Mastered', c: 'var(--g)'  },
  ];
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <SecHeader num="00" title="ABOUT " hl="ME" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <GlassCard style={{ padding: 36 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1, color: 'var(--p)', marginBottom: 14 }}>PROFILE</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.8)', marginBottom: 16 }}>
              Hey! I'm <strong style={{ color: 'var(--p)' }}>Kunga Legjung</strong>, MCA Graduate passionate about building innovative tech solutions at the intersection of clean code and modern interface design.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.8)', marginBottom: 16 }}>
              From crafting real-time web apps to training ML models — I thrive when engineering meets creativity. Currently hunting for SDE / ML Engineer roles at product-first companies.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#94a3b8' }}>
              When not coding, I explore 3D web graphics, contribute to open-source, and build side-projects that solve real-world problems.
            </p>
          </GlassCard>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {STATS.map(s => (
              <GlassCard key={s.lbl} style={{ padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 24 }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: s.c, minWidth: 64 }}>{s.num}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#94a3b8' }}>{s.lbl}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── EDUCATION ───────────────────────────────────────────────────────────── */
export function Education() {
  return (
    <section className="section" id="education">
      <div className="section-inner">
        <SecHeader num="01" title="EDUCA" hl="TION" />
        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <GlassCard key={i} className="edu-card" style={{ borderColor: 'var(--border)' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{e.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--p)', marginBottom: 8 }}>{e.yr}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6, lineHeight: 1.35 }}>{e.deg}</h3>
              <p style={{ fontSize: 14, color: '#94a3b8', fontWeight: 500, marginBottom: 12 }}>{e.inst}</p>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: '#4b5563', marginBottom: 16 }}>{e.detail}</p>
              <HexBadge color={e.color}>{e.badge}</HexBadge>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SKILLS ──────────────────────────────────────────────────────────────── */
function SkillLogo({ name, logo, catColor }) {
  const [err, setErr] = useState(false);
  const [hov, setHov] = useState(false);

  return (
    <div
      className="skill-icon-card glass-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ borderColor: hov ? catColor : undefined }}
    >
      <div style={{ width: 28, height: 28, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {!err ? (
          <img
            src={logo}
            alt={name}
            onError={() => setErr(true)}
            style={{
              width: '100%', height: '100%',
              objectFit: 'contain',
              filter: hov ? 'none' : 'grayscale(1) brightness(0.8)',
              transition: 'filter .2s',
            }}
          />
        ) : (
          <span style={{ fontSize: 20 }}>⚙️</span>
        )}
      </div>
      <span style={{ fontSize: 11, fontWeight: 500, color: hov ? catColor : '#94a3b8', transition: 'color .2s', display: 'block' }}>
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <SecHeader num="02" title="TECH " hl="SKILLS" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={ci}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: cat.color, textTransform: 'uppercase', letterSpacing: 1 }}>{cat.title}</span>
                <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              </div>
              {/* Skills grid */}
              <div className="skills-icon-grid">
                {cat.skills.map((s, si) => (
                  <SkillLogo key={si} name={s.name} logo={s.logo} catColor={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── EXPERIENCE ──────────────────────────────────────────────────────────── */
export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <SecHeader num="03" title="EXPERI" hl="ENCE" />
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="tl-item glass-card" style={{ borderLeft: '2px solid var(--p)' }}>
              <div className="tl-dot" />
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--p)', marginBottom: 6 }}>{e.yr}</p>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{e.role}</h3>
              <p style={{ fontSize: 14, color: '#94a3b8', fontWeight: 500, marginBottom: 10 }}>{e.company}</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: '#4b5563', marginBottom: 14 }}>{e.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {e.tech.map(t => <TechPill key={t} label={t} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

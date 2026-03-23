import { useState, useEffect, useRef } from 'react';
import ParticleBg from './ParticleBg.jsx';
import { SecHeader, GlassCard, HexBadge, TechPill } from './UI.jsx';
import { EDUCATION, EXPERIENCE, SKILL_CATEGORIES } from '../data/index.js';

/* ── ABOUT ──────────────────────────────────────────────────────────────── */
export function About() {
  const STATS = [
    { num: '4', lbl: 'Projects Built',       c: 'var(--c)'  },
    { num: '3+',  lbl: 'Years Coding',          c: 'var(--p)'  },
    { num: '3',   lbl: 'Internships Done',      c: 'var(--pk)' },
    { num: '8+',  lbl: 'Technologies Mastered', c: 'var(--g)'  },
  ];
  return (
    <section className="section" id="about">
      <ParticleBg type="nodes" />
      <div className="section-inner">
        <SecHeader num="// 00" title="ABOUT " hl="ME" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <GlassCard style={{ padding: 36 }} className="clip-all">
            <p style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 4, color: 'var(--c)', marginBottom: 14, opacity: .6 }}>&gt;_ PROFILE.json</p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(200,220,255,.7)', marginBottom: 16 }}>
              Hey! I'm <strong style={{ color: 'var(--c)' }}>Kunga Legjung</strong>, MCA Graduate passionate about building innovative tech solutions at the intersection of clean code and bold design.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(200,220,255,.7)', marginBottom: 16 }}>
              From crafting real-time web apps to training ML models — I thrive when engineering meets creativity. Currently hunting for SDE / ML Engineer roles at product-first companies.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(200,220,255,.55)' }}>
              When not coding, I explore 3D web graphics, contribute to open-source, and build side-projects that solve real-world problems.
            </p>
          </GlassCard>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {STATS.map(s => (
              <GlassCard key={s.lbl} hoverColor={s.c} className="clip-tr" style={{ padding: '18px 26px', display: 'flex', alignItems: 'center', gap: 22 }}>
                <div style={{ fontFamily: 'var(--orb)', fontSize: 34, fontWeight: 900, color: s.c, textShadow: `0 0 14px ${s.c}`, minWidth: 76 }}>{s.num}</div>
                <div style={{ fontSize: 13, letterSpacing: 2, color: 'rgba(200,220,255,.6)' }}>{s.lbl}</div>
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
      <ParticleBg type="circuit" />
      <div className="section-inner">
        <SecHeader num="// 01" title="EDUCA" hl="TION" />
        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <GlassCard key={i} hoverColor={e.color} className="edu-card clip-tr" style={{ borderColor: `${e.color}28` }}>
              {/* corner accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: 20, height: 20, background: `${e.color}20`, clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              <div style={{ fontSize: 28, marginBottom: 10 }}>{e.icon}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: 3, color: e.color, marginBottom: 8 }}>{e.yr}</div>
              <h3 style={{ fontFamily: 'var(--orb)', fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 6, lineHeight: 1.35 }}>{e.deg}</h3>
              <p style={{ fontSize: 13, color: e.color, fontWeight: 600, marginBottom: 10 }}>{e.inst}</p>
              <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(200,220,255,.5)', marginBottom: 16 }}>{e.detail}</p>
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
      className="skill-icon-card glass-card clip-sm"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ borderColor: hov ? catColor : undefined }}
    >
      <div style={{ width: 26, height: 26, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {!err
          ? (
            <img
              src={logo}
              alt={name}
              onError={() => setErr(true)}
              style={{
                width: '100%', height: '100%',
                objectFit: 'contain',
                filter: hov ? 'none' : 'brightness(.7) saturate(.6)',
                transition: 'filter .3s',
              }}
            />
          )
          : <span style={{ fontSize: 18 }}>⚙️</span>
        }
      </div>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 7, letterSpacing: 1, color: hov ? catColor : 'rgba(200,220,255,.55)', transition: 'color .3s', display: 'block' }}>
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <ParticleBg type="wave" />
      <div className="section-inner">
        <SecHeader num="// 02" title="TECH " hl="SKILLS" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 52 }}>
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={ci}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 4, color: cat.color, opacity: .8 }}>// {cat.title.toUpperCase()}</span>
                <div style={{ flex: 1, height: .5, background: `linear-gradient(90deg, ${cat.color}, transparent)`, opacity: .3 }} />
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
      <ParticleBg type="hex" />
      <div className="section-inner">
        <SecHeader num="// 03" title="EXPERI" hl="ENCE" />
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="tl-item glass-card clip-tr" style={{ borderLeft: '2px solid rgba(99,102,241,0.7)', borderColor: 'rgba(99,102,241,.22)' }}>
              <div className="tl-dot" />
              <p style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: 3, color: 'var(--p)', marginBottom: 6 }}>{e.yr}</p>
              <h3 style={{ fontFamily: 'var(--orb)', fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{e.role}</h3>
              <p style={{ fontSize: 13, color: 'var(--c)', fontWeight: 600, marginBottom: 10 }}>{e.company}</p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(200,220,255,.52)', marginBottom: 14 }}>{e.desc}</p>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {e.tech.map(t => <TechPill key={t} label={t} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import ParticleBg from './ParticleBg.jsx';
import { SecHeader, TechPill } from './UI.jsx';
import { PROJECTS } from '../data/index.js';

/* ── SVG Icons ─────────────────────────────────────────────────────────── */
function GitHubIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function ExternalLinkIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

/* ── Project Link Button ─────────────────────────────────────────────────── */
function ProjBtn({ href, icon, label, accentColor, outlined = false }) {
  const [hov, setHov] = useState(false);

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    fontFamily: 'var(--mono)',
    fontSize: 9,
    letterSpacing: 2,
    padding: '6px 14px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all .25s',
    clipPath: 'polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)',
    userSelect: 'none',
  };

  const githubStyle = {
    ...base,
    border: `.5px solid ${hov ? accentColor : 'rgba(200,220,255,.28)'}`,
    color: hov ? accentColor : 'rgba(200,220,255,.65)',
    background: hov ? `${accentColor}14` : 'transparent',
  };

  const liveStyle = {
    ...base,
    border: `.5px solid ${hov ? '#fff' : 'rgba(200,220,255,.18)'}`,
    color: hov ? '#fff' : 'rgba(200,220,255,.45)',
    background: hov ? 'rgba(255,255,255,.07)' : 'transparent',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={outlined ? liveStyle : githubStyle}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {icon}
      {label}
    </a>
  );
}

/* ── Project Card ────────────────────────────────────────────────────────── */
function ProjectCard({ proj }) {
  const [hov, setHov]       = useState(false);
  const [imgErr, setImgErr] = useState(false);

  const hasLive = proj.demo && proj.demo !== '#';

  return (
    <div
      className="proj-card glass-card clip-all"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderColor: hov ? proj.color : 'rgba(244,63,94,.15)',
        boxShadow: hov
          ? `0 22px 46px rgba(0,0,0,.55), 0 0 30px ${proj.color}20`
          : 'none',
      }}
    >
      {/* ── Image ── */}
      <div className="proj-img-wrap">
        {!imgErr
          ? (
            <img
              src={proj.img}
              alt={proj.title}
              onError={() => setImgErr(true)}
            />
          )
          : (
            <div style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(135deg,#050f20,#0a1a3a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 44, opacity: .25,
            }}>🖥️</div>
          )
        }

        {/* bottom fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 15%,rgba(5,11,20,.97) 100%)' }} />

        {/* hover grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(56,189,248,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.04) 1px,transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: hov ? 1 : 0, transition: 'opacity .4s',
        }} />

        {/* type badge */}
        <span style={{
          position: 'absolute', top: 10, right: 10,
          fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: 2,
          padding: '3px 10px',
          border: `.5px solid ${proj.color}`,
          color: proj.color,
          background: `${proj.color}18`,
          clipPath: 'polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)',
        }}>
          {proj.type}
        </span>

        {/* hover scan line */}
        {hov && (
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(180deg,transparent 40%,${proj.color}05 50%,transparent 60%)`,
            animation: 'scanline 1.6s linear infinite',
          }} />
        )}
      </div>

      {/* ── Body ── */}
      <div style={{ padding: '16px 20px 22px' }}>
        <h3 style={{
          fontFamily: 'var(--orb)', fontSize: 13, fontWeight: 700,
          color: '#fff', marginBottom: 7,
        }}>
          {proj.title}
        </h3>

        <p style={{
          fontSize: 12, lineHeight: 1.65,
          color: 'rgba(200,220,255,.46)', marginBottom: 14,
        }}>
          {proj.desc}
        </p>

        {/* Tech pills */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
          {proj.tech.map(t => <TechPill key={t} label={t} />)}
        </div>

        {/* ── Action buttons ── */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <ProjBtn
            href={proj.github}
            accentColor={proj.color}
            icon={<GitHubIcon size={13} color="currentColor" />}
            label="GITHUB"
          />
          {hasLive && (
            <ProjBtn
              href={proj.demo}
              outlined
              icon={<ExternalLinkIcon size={12} color="currentColor" />}
              label="LIVE"
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section className="section" id="projects">
      <ParticleBg type="dna" />
      <div className="section-inner">
        <SecHeader num="// 04" title="PRO" hl="JECTS" />
        <div className="proj-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={i} proj={p} />)}
        </div>
      </div>
    </section>
  );
}

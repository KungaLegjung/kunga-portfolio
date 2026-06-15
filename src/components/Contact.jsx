import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SecHeader, GlassCard } from './UI.jsx';

const EMAILJS_SERVICE_ID  = 'service_ywputr5';   
const EMAILJS_TEMPLATE_ID = 'template_d9vlt73';  
const EMAILJS_PUBLIC_KEY  = 'cA9woMAZwPBNJZoGj';  

/* ── Contact SVG Icons ── */
function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  );
}

/* ── Contact SVG Icons ── */
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

const ICON_MAP = {
  EMAIL:    <EmailIcon />,
  LINKEDIN: <LinkedInIcon />,
  GITHUB:   <GitHubIcon />,
  PHONE:    <PhoneIcon />,
};

const CONTACT_LINKS = [
  { lbl: 'EMAIL',    val: 'kungalegjung2014@gmail.com',      c: 'var(--c)',  href: 'mailto:kungalegjung2014@gmail.com' },
  { lbl: 'LINKEDIN', val: 'linkedin.com/in/kungalegjung', c: 'var(--p)',  href: 'https://linkedin.com/in/kungalegjung' },
  { lbl: 'GITHUB',   val: 'github.com/KungaLegjung',            c: 'var(--g)',  href: 'https://github.com/KungaLegjung' },
  { lbl: 'PHONE',    val: '+91 96065 51526',                 c: 'var(--pk)', href: 'tel:+919606551526' },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]     = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState('');

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;

    setStatus('sending');
    setErrMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrMsg(err?.text || 'Failed to send. Check your EmailJS config.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const buttonLabel = {
    idle:    'SEND MESSAGE',
    sending: 'SENDING…',
    success: 'MESSAGE SENT!',
    error:   'FAILED — RETRY',
  }[status];

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <SecHeader num="05" title="CON" hl="TACT" />

        <div className="contact-grid">
          {/* ── LEFT ── */}
          <div>
            <GlassCard style={{ padding: 30, marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
                Let's Build Something Epic
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: '#94a3b8' }}>
                Open to MCA project collaborations, internship roles, freelance web/ML work, and full-time opportunities. Response within 24 hours.
              </p>
            </GlassCard>

            {CONTACT_LINKS.map((link, i) => (
              <ContactLink key={i} link={link} />
            ))}
          </div>

          {/* ── RIGHT — Form ── */}
          <form ref={formRef} onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { name: 'from_name',  label: 'YOUR NAME',      ph: 'Enter your name',                    type: 'text' },
              { name: 'from_email', label: 'EMAIL ADDRESS',  ph: 'your@email.com',                      type: 'email' },
              { name: 'subject',    label: 'SUBJECT',        ph: 'Internship / Project / Collaboration', type: 'text' },
            ].map(f => (
              <div key={f.name}>
                <label className="f-label">{f.label}</label>
                <input
                  className="f-input"
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handle}
                  placeholder={f.ph}
                  required={f.name !== 'subject'}
                />
              </div>
            ))}

            <div>
              <label className="f-label">MESSAGE</label>
              <textarea
                className="f-textarea"
                name="message"
                value={form.message}
                onChange={handle}
                placeholder="Tell me about your project or opportunity…"
                rows={5}
                required
              />
            </div>

            {errMsg && (
              <p style={{ fontSize: 13, color: 'var(--pk)' }}>
                ⚠ {errMsg}
              </p>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  background: status === 'success' ? 'var(--g)' : status === 'error' ? 'var(--pk)' : 'var(--c)',
                }}
              >
                {buttonLabel}
              </button>
              {status === 'idle' && (
                <span style={{ fontSize: 11, color: '#4b5563' }}>
                  Powered by EmailJS
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ── Contact link row ── */
function ContactLink({ link }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={link.href}
      target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? '_self' : '_blank'}
      rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '12px 18px', marginBottom: 12,
        background: 'var(--glass)',
        border: `1px solid ${hov ? 'var(--border-h)' : 'var(--border)'}`,
        borderRadius: '8px',
        transition: 'all 0.2s',
        transform: hov ? 'translateX(4px)' : 'none',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      <div style={{
        width: 36, height: 36,
        borderRadius: '6px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: link.c,
        background: `${link.c}12`,
        border: `1px solid ${link.c}20`,
        flexShrink: 0,
      }}>
        {ICON_MAP[link.lbl]}
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#4b5563', textTransform: 'uppercase', letterSpacing: 0.5 }}>{link.lbl}</div>
        <div style={{ fontSize: 14, color: '#94a3b8' }}>{link.val}</div>
      </div>
    </a>
  );
}

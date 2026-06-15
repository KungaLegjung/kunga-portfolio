import { useState, useEffect } from 'react';
import { Navbar } from './components/UI.jsx';
import Hero from './components/Hero.jsx';
import { About, Education, Skills, Experience } from './components/Sections.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import AIAssistant from './components/AIAssistant.jsx';
import { NAV_ITEMS } from './data/index.js';

export default function App() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.32 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar active={active} />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 1, color: 'rgba(200,220,255,.22)' }}>
          © 2026 KUNGA LEGJUNG · MCA PORTFOLIO
        </span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 1, color: 'rgba(200,220,255,.22)' }}>
          BUILT WITH REACT · VITE · EMAILJS
        </span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 1, color: 'rgba(99,102,241,.4)' }}>
          ALL SYSTEMS OPERATIONAL ◈
        </span>
      </footer>

      <AIAssistant />
    </>
  );
}

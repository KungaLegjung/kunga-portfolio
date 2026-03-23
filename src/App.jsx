import { useState, useEffect } from 'react';
import { Cursor, Navbar } from './components/UI.jsx';
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
      <Cursor />
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
        borderTop: '.5px solid rgba(0,255,231,.07)',
        padding: '18px 56px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: 3, color: 'rgba(200,220,255,.22)' }}>
          © 2026 KUNGA LEGJUNG · MCA PORTFOLIO
        </span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: 3, color: 'rgba(200,220,255,.22)' }}>
          BUILT WITH REACT · VITE · EMAILJS
        </span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: 2, color: 'rgba(0,255,231,.3)' }}>
          ALL SYSTEMS OPERATIONAL ◈
        </span>
      </footer>

      <AIAssistant />
    </>
  );
}

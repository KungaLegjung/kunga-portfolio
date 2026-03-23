import { useState, useEffect, useRef } from 'react';
import { getAIReply } from '../data/index.js';

const QUICK = ['Skills', 'Projects', 'Hire me', 'Education', 'Experience', 'Contact'];

export default function AIAssistant() {
  const [open,   setOpen]   = useState(false);
  const [msgs,   setMsgs]   = useState([]);
  const [input,  setInput]  = useState('');
  const [typing, setTyping] = useState(false);
  const msgsRef = useRef(null);

  // Greeting on first open
  useEffect(() => {
    if (open && msgs.length === 0) {
      setTimeout(() =>
        addBot("👾 Hey! I'm Kunga's AI. Ask me about his skills, projects, education, experience, or how to hire him!"),
      500);
    }
  }, [open]);

  // Auto-scroll
  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [msgs, typing]);

  function addBot(text) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, { role: 'bot', text }]);
    }, 950);
  }

  function send(q) {
    if (!q.trim()) return;
    setMsgs(m => [...m, { role: 'user', text: q }]);
    setInput('');
    addBot(getAIReply(q));
  }

  return (
    <>
      {/* FAB */}
      <button className="ai-fab" onClick={() => setOpen(o => !o)} aria-label="Open AI assistant">
        🤖
      </button>

      {/* Panel */}
      <div className={`ai-panel${open ? '' : ' closed'}`}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 16px', borderBottom: '.5px solid rgba(99,102,241,.18)', background: 'rgba(99,102,241,.06)' }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,var(--p),var(--pk))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, boxShadow: '0 0 10px rgba(99,102,241,.45)' }}>🤖</div>
          <div>
            <div style={{ fontFamily: 'var(--orb)', fontSize: 11, fontWeight: 700, color: '#fff' }}>KUNGA·AI</div>
            <div style={{ fontSize: 11, color: 'rgba(200,220,255,.45)', display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e' }} />
              Online
            </div>
          </div>
          <button onClick={() => setOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'rgba(200,220,255,.35)', fontSize: 16, cursor: 'pointer' }}>✕</button>
        </div>

        {/* Messages */}
        <div className="ai-msgs" ref={msgsRef}>
          {msgs.map((m, i) => (
            <div key={i} style={{
              maxWidth: '86%', padding: '9px 13px', fontSize: 13, lineHeight: 1.55,
              whiteSpace: 'pre-line',
              alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
              background: m.role === 'user' ? 'rgba(56,189,248,.06)' : 'rgba(99,102,241,.09)',
              border: `.5px solid ${m.role === 'user' ? 'rgba(56,189,248,.18)' : 'rgba(99,102,241,.2)'}`,
              color: 'rgba(220,230,255,.88)',
              clipPath: m.role === 'user'
                ? 'polygon(8px 0,100% 0,100% 100%,0 100%,0 8px)'
                : 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)',
            }}>{m.text}</div>
          ))}
          {typing && (
            <div style={{ maxWidth: '86%', padding: '12px 15px', background: 'rgba(99,102,241,.09)', border: '.5px solid rgba(99,102,241,.2)', display: 'flex', gap: 5, alignSelf: 'flex-start' }}>
              {[0, .15, .3].map((d, i) => (
                <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--p)', animation: `dotPulse .85s ${d}s ease-in-out infinite` }} />
              ))}
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', padding: '7px 13px', borderTop: '.5px solid rgba(99,102,241,.1)' }}>
          {QUICK.map(q => (
            <button key={q} onClick={() => send(q)} style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: 1, padding: '3px 9px', border: '.5px solid rgba(99,102,241,.35)', color: 'rgba(200,180,255,.75)', background: 'rgba(99,102,241,.055)', cursor: 'pointer', transition: 'all .2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(99,102,241,.055)'}
            >{q}</button>
          ))}
        </div>

        {/* Input */}
        <div style={{ display: 'flex', gap: 7, padding: '9px 13px', borderTop: '.5px solid rgba(99,102,241,.15)' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="Ask me anything…"
            style={{ flex: 1, background: 'rgba(99,102,241,.04)', border: '.5px solid rgba(99,102,241,.2)', padding: '8px 11px', fontFamily: 'var(--exo)', fontSize: 13, color: '#dde8ff', outline: 'none' }}
            onFocus={e => e.target.style.borderColor = 'var(--p)'}
            onBlur={e  => e.target.style.borderColor = 'rgba(99,102,241,.2)'}
          />
          <button onClick={() => send(input)} style={{ width: 34, height: 34, background: 'linear-gradient(135deg,var(--p),var(--pk))', border: 'none', cursor: 'pointer', fontSize: 13, flexShrink: 0, transition: 'transform .2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >➤</button>
        </div>
      </div>
    </>
  );
}

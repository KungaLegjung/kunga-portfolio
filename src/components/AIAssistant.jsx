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
        addBot("👋 Hey! I'm Kunga's AI Assistant. Ask me about his skills, projects, education, experience, or how to hire him!"),
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
        💬
      </button>

      {/* Panel */}
      <div className={`ai-panel${open ? '' : ' closed'}`}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px', borderBottom: '1px solid var(--border)', background: 'var(--bg3)' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🤖</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Kunga's Assistant</div>
            <div style={{ fontSize: 11, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
              Online
            </div>
          </div>
          <button onClick={() => setOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#94a3b8', fontSize: 18, cursor: 'pointer' }}>✕</button>
        </div>

        {/* Messages */}
        <div className="ai-msgs" ref={msgsRef}>
          {msgs.map((m, i) => (
            <div key={i} style={{
              maxWidth: '85%', padding: '10px 14px', fontSize: 13, lineHeight: 1.5,
              whiteSpace: 'pre-line',
              alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
              background: m.role === 'user' ? 'var(--c)' : 'var(--bg3)',
              color: m.role === 'user' ? '#fff' : '#cbd5e1',
              borderRadius: m.role === 'user' ? '12px 12px 0px 12px' : '12px 12px 12px 0px',
              border: m.role === 'user' ? 'none' : '1px solid var(--border)',
            }}>{m.text}</div>
          ))}
          {typing && (
            <div style={{ maxWidth: '85%', padding: '12px 16px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '12px 12px 12px 0px', display: 'flex', gap: 5, alignSelf: 'flex-start' }}>
              {[0, .15, .3].map((d, i) => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--p)', animation: `dotPulse .85s ${d}s ease-in-out infinite` }} />
              ))}
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '8px 16px', borderTop: '1px solid var(--border)', background: 'rgba(255, 255, 255, 0.01)' }}>
          {QUICK.map(q => (
            <button key={q} onClick={() => send(q)} style={{ fontSize: 11, fontWeight: 500, padding: '4px 10px', borderRadius: '20px', border: '1px solid var(--border)', color: '#94a3b8', background: 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'var(--border-h)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >{q}</button>
          ))}
        </div>

        {/* Input */}
        <div style={{ display: 'flex', gap: 8, padding: '12px 16px', borderTop: '1px solid var(--border)', background: 'var(--bg3)' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="Ask me anything…"
            style={{ flex: 1, background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border)', borderRadius: '6px', padding: '8px 12px', fontSize: 13, color: '#fff', outline: 'none' }}
            onFocus={e => e.target.style.borderColor = 'var(--p)'}
            onBlur={e  => e.target.style.borderColor = 'var(--border)'}
          />
          <button onClick={() => send(input)} style={{ width: 34, height: 34, borderRadius: '6px', background: 'var(--c)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--p)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--c)'}
          >➤</button>
        </div>
      </div>
    </>
  );
}

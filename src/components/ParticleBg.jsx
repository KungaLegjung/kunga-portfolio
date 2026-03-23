import { useEffect, useRef } from 'react';

/*
  Simple, calm, interactive backgrounds — subtle depth, nothing distracting.

  matrix   → Hero:       Slow fading code rain, low opacity
  nodes    → About:      Floating dots connected by thin lines, mouse-reactive
  circuit  → Education:  Faint grid with slow-pulsing dots
  wave     → Skills:     Gentle sine waves drifting across
  hex      → Experience: Faint hex outlines, softly pulsing
  dna      → Projects:   Slow floating particles with connecting lines
  stars    → Contact:    Quiet star field with subtle twinkle
*/

export default function ParticleBg({ type }) {
  const ref    = useRef(null);
  const mouse  = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId, t = 0;
    const TAU = Math.PI * 2;
    const rnd = (a, b) => a + Math.random() * (b - a);

    function resize() {
      canvas.width  = canvas.offsetWidth  || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || document.body);

    // track mouse for interactive nodes
    const onMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.parentElement?.addEventListener('mousemove', onMove);

    /* ── shared particle pool ── */
    let pts = [];
    function initPts(W, H, count = 80) {
      pts = Array.from({ length: count }, () => ({
        x: rnd(0, W), y: rnd(0, H),
        vx: rnd(-0.18, 0.18), vy: rnd(-0.18, 0.18),
        r: rnd(1, 2.2),
        o: rnd(0.08, 0.35),
        phase: rnd(0, TAU),
      }));
    }

    /* ── matrix columns ── */
    let cols = [];
    function initMatrix(W) {
      cols = [];
      const cw = 20;
      for (let i = 0; i < Math.ceil(W / cw); i++) {
        cols.push({
          x: i * cw,
          y: rnd(-400, 0),
          speed: rnd(0.4, 1.2),
          len: Math.floor(rnd(6, 18)),
          opacity: rnd(0.04, 0.12),
        });
      }
    }

    /* ── star pool ── */
    let stars = [];
    function initStars(W, H) {
      stars = Array.from({ length: 120 }, () => ({
        x: rnd(0, W), y: rnd(0, H),
        r: rnd(0.3, 1.4),
        o: rnd(0.08, 0.4),
        spd: rnd(0.5, 2.5),
      }));
    }

    let inited = false;
    function init(W, H) {
      inited = true;
      if (type === 'matrix') initMatrix(W);
      else if (type === 'stars') initStars(W, H);
      else initPts(W, H, type === 'nodes' ? 70 : 60);
    }

    /* ══ DRAW ══ */
    function draw() {
      const W = canvas.width, H = canvas.height;
      if (!inited) init(W, H);
      ctx.clearRect(0, 0, W, H);
      t += 0.008;

      /* ── MATRIX: slow fading code rain ── */
      if (type === 'matrix') {
        cols.forEach(col => {
          col.y += col.speed;
          if (col.y > H + col.len * 16) {
            col.y = rnd(-200, 0);
            col.speed = rnd(0.4, 1.2);
            col.len   = Math.floor(rnd(6, 18));
          }
          for (let i = 0; i < col.len; i++) {
            const cy = col.y - i * 16;
            if (cy < 0 || cy > H) continue;
            const fade = Math.max(0, 1 - i / col.len);
            const ch   = Math.random() > 0.6
              ? String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
              : String.fromCharCode(0x30 + Math.floor(Math.random() * 10));
            ctx.font = '12px Share Tech Mono,monospace';
            ctx.fillStyle = `rgba(56,189,248,${col.opacity * fade * (i === 0 ? 2.5 : 1)})`;
            ctx.fillText(ch, col.x, cy);
          }
        });
      }

      /* ── NODES: floating dots + lines, mouse-reactive ── */
      else if (type === 'nodes') {
        const mx = mouse.current.x, my = mouse.current.y;

        pts.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        });

        // connections
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
            if (d < 100) {
              ctx.beginPath();
              ctx.moveTo(pts[i].x, pts[i].y);
              ctx.lineTo(pts[j].x, pts[j].y);
              ctx.strokeStyle = `rgba(56,189,248,${(1 - d / 100) * 0.055})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
          // connect to mouse
          const dm = Math.hypot(pts[i].x - mx, pts[i].y - my);
          if (dm < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(56,189,248,${(1 - dm / 130) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // dots
        pts.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, TAU);
          ctx.fillStyle = `rgba(56,189,248,${p.o * 0.7})`;
          ctx.fill();
        });
      }

      /* ── CIRCUIT: faint grid + slow pulsing dots ── */
      else if (type === 'circuit') {
        const step = 44;
        ctx.strokeStyle = 'rgba(56,189,248,0.04)';
        ctx.lineWidth = 0.6;
        for (let x = 0; x < W; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
        for (let y = 0; y < H; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

        // slow pulsing intersection dots
        for (let x = step; x < W; x += step) {
          for (let y = step; y < H; y += step) {
            const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + x * 0.02 + y * 0.015);
            if (pulse > 0.72) {
              ctx.beginPath();
              ctx.arc(x, y, 2 + pulse * 1.5, 0, TAU);
              ctx.fillStyle = `rgba(56,189,248,${pulse * 0.18})`;
              ctx.fill();
            }
          }
        }
      }

      /* ── WAVE: gentle drifting sine waves ── */
      else if (type === 'wave') {
        const waves = [
          { amp: 18, freq: 0.008, spd: 0.6,  color: '56,189,248',  a: 0.08 },
          { amp: 12, freq: 0.012, spd: 1.0,  color: '129,140,248', a: 0.06 },
          { amp: 24, freq: 0.005, spd: 0.35, color: '52,211,153',  a: 0.05 },
          { amp: 9,  freq: 0.018, spd: 1.4,  color: '56,189,248',  a: 0.04 },
        ];
        waves.forEach(w => {
          ctx.beginPath();
          for (let x = 0; x <= W; x += 3) {
            const y = H / 2 + Math.sin(x * w.freq + t * w.spd) * w.amp
                    + Math.sin(x * w.freq * 1.7 + t * w.spd * 0.6) * (w.amp * 0.4);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(${w.color},${w.a})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        });
      }

      /* ── HEX: faint honeycomb, soft pulse ── */
      else if (type === 'hex') {
        const sz = 32, hW = sz * 1.732, hH = sz * 2;
        for (let row = 0; row * hH * 0.75 < H + hH; row++) {
          for (let col = 0; col * hW < W + hW; col++) {
            const cx = col * hW + (row % 2) * (hW / 2);
            const cy = row * hH * 0.75;
            const pulse = 0.5 + 0.5 * Math.sin(t * 0.8 + col * 0.25 + row * 0.35);
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const a = i * Math.PI / 3 - Math.PI / 6;
              ctx.lineTo(cx + (sz - 5) * Math.cos(a), cy + (sz - 5) * Math.sin(a));
            }
            ctx.closePath();
            ctx.strokeStyle = `rgba(99,102,241,${0.04 + pulse * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            if (pulse > 0.88) {
              ctx.fillStyle = 'rgba(99,102,241,0.025)';
              ctx.fill();
            }
          }
        }
      }

      /* ── DNA (projects): floating particles + soft connections ── */
      else if (type === 'dna') {
        pts.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          p.phase += 0.015;
        });

        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
            if (d < 90) {
              ctx.beginPath();
              ctx.moveTo(pts[i].x, pts[i].y);
              ctx.lineTo(pts[j].x, pts[j].y);
              ctx.strokeStyle = `rgba(56,189,248,${(1 - d / 90) * 0.05})`;
              ctx.lineWidth = 0.4;
              ctx.stroke();
            }
          }
        }

        pts.forEach(p => {
          const glow = 0.5 + 0.5 * Math.sin(p.phase);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * (0.8 + glow * 0.4), 0, TAU);
          ctx.fillStyle = `rgba(56,189,248,${p.o * 0.55})`;
          ctx.fill();
        });
      }

      /* ── STARS: quiet twinkle field ── */
      else if (type === 'stars') {
        stars.forEach(s => {
          const fl = 0.4 + 0.4 * Math.sin(t * s.spd + s.o * 8);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, TAU);
          ctx.fillStyle = `rgba(200,220,255,${s.o * fl * 0.55})`;
          ctx.fill();
        });

        // occasional soft shooting star
        for (let i = 0; i < 1; i++) {
          const sx = ((t * 22 + i * 400) % (W + 250)) - 125;
          const sy = ((t * 14 + i * 260) % (H + 80)) - 40;
          const g  = ctx.createLinearGradient(sx - 55, sy - 18, sx, sy);
          g.addColorStop(0, 'rgba(255,255,255,0)');
          g.addColorStop(1, 'rgba(255,255,255,0.1)');
          ctx.beginPath();
          ctx.moveTo(sx - 55, sy - 18);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = g;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      canvas.parentElement?.removeEventListener('mousemove', onMove);
    };
  }, [type]);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  );
}

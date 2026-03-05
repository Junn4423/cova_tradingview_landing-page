/**
 * ConstellationBackground
 * ─────────────────────────────────────────────────────────────────────────────
 * Layer 1: CSS hex-grid mesh (always dim)
 * Layer 2: Canvas with drifting star-nodes + constellation lines
 *   - Stars near cursor → glow brighter, pulled gently toward cursor
 *   - Connections near cursor → turn bright cyan
 *   - Extra "ray" lines drawn from cursor to nearby stars
 * Layer 3: Radial torch spotlight following cursor
 */
import { useEffect, useRef } from 'react';

// ── Seeded LCG for deterministic initial positions ────────────────────────────
function lcg(seed) {
  let s = seed >>> 0;
  return () => { s = Math.imul(1664525, s) + 1013904223 >>> 0; return s / 0x100000000; };
}

// ── Star node factory ─────────────────────────────────────────────────────────
function makeStars(count, W, H) {
  const rng = lcg(9001);
  const palette = ['#3A86FF', '#00D4FF', '#00F5A0', '#7B2CBF', '#FFD700'];
  return Array.from({ length: count }, (_, i) => ({
    x:  rng() * W,
    y:  rng() * H,
    vx: (rng() - 0.5) * 0.25,
    vy: (rng() - 0.5) * 0.25,
    r:  0.8 + rng() * 1.6,
    color: palette[i % palette.length],
    baseAlpha: 0.25 + rng() * 0.45,
    alpha: 0,
  }));
}

const LINK_DIST   = 160;   // max px between linked stars
const CURSOR_DIST = 260;   // cursor influence radius
const PULL_FORCE  = 0.018; // how much cursor attracts stars

const ConstellationBackground = () => {
  const canvasRef  = useRef(null);
  const spotRef    = useRef(null);
  const starsRef   = useRef([]);
  const mouseRef   = useRef({ x: -9999, y: -9999 });
  const rafRef     = useRef(null);
  const sizeRef    = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // ── Size canvas to viewport ─────────────────────────────────────────────
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width  = w;
      canvas.height = h;
      sizeRef.current = { w, h };
      starsRef.current = makeStars(90, w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Track mouse ─────────────────────────────────────────────────────────
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      // Update spotlight overlay
      if (spotRef.current) {
        spotRef.current.style.background = `radial-gradient(
          600px circle at ${e.clientX}px ${e.clientY}px,
          rgba(58,134,255,0.07) 0%,
          rgba(0,212,255,0.035) 30%,
          transparent 70%
        )`;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    // ── Animation loop ───────────────────────────────────────────────────────
    const draw = () => {
      const { w, h } = sizeRef.current;
      const mouse = mouseRef.current;
      const stars = starsRef.current;

      ctx.clearRect(0, 0, w, h);

      // Update star positions
      for (const s of stars) {
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.hypot(dx, dy);

        // Gentle pull toward cursor
        if (dist < CURSOR_DIST) {
          const f = (1 - dist / CURSOR_DIST) * PULL_FORCE;
          s.vx += dx * f;
          s.vy += dy * f;
        }

        // Damping
        s.vx *= 0.96;
        s.vy *= 0.96;

        s.x += s.vx;
        s.y += s.vy;

        // Wrap around edges
        if (s.x < -10) s.x = w + 10;
        if (s.x > w + 10) s.x = -10;
        if (s.y < -10) s.y = h + 10;
        if (s.y > h + 10) s.y = -10;

        // Alpha: brighter near cursor
        const proximity = Math.max(0, 1 - dist / CURSOR_DIST);
        const targetAlpha = s.baseAlpha + proximity * 0.38;
        s.alpha += (targetAlpha - s.alpha) * 0.08;
      }

      // ── Draw constellation links ──────────────────────────────────────────
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const a = stars[i], b = stars[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d  = Math.hypot(dx, dy);
          if (d > LINK_DIST) continue;

          // Check if this link is near cursor
          const midX = (a.x + b.x) / 2, midY = (a.y + b.y) / 2;
          const mdist = Math.hypot(mouse.x - midX, mouse.y - midY);
          const nearCursor = mdist < CURSOR_DIST;

          const lineAlpha = (1 - d / LINK_DIST) * (nearCursor ? 0.49 : 0.12);
          const lineColor  = nearCursor ? `rgba(0,212,255,${lineAlpha})` : `rgba(58,134,255,${lineAlpha})`;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth   = nearCursor ? 1.2 : 0.6;
          ctx.stroke();
        }
      }

      // ── Draw cursor rays to nearby stars ──────────────────────────────────
      if (mouse.x > -1000) {
        for (const s of stars) {
          const dx = s.x - mouse.x, dy = s.y - mouse.y;
          const d  = Math.hypot(dx, dy);
          if (d > CURSOR_DIST * 0.85) continue;

          const rayAlpha = (1 - d / (CURSOR_DIST * 0.85)) * 0.31;
          const grad = ctx.createLinearGradient(mouse.x, mouse.y, s.x, s.y);
          grad.addColorStop(0, `rgba(0,212,255,${rayAlpha * 0.9})`);
          grad.addColorStop(1, `rgba(58,134,255,0)`);

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(s.x, s.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth   = 1;
          ctx.stroke();
        }
      }

      // ── Draw stars ────────────────────────────────────────────────────────
      for (const s of stars) {
        const dx   = mouse.x - s.x, dy = mouse.y - s.y;
        const dist = Math.hypot(dx, dy);
        const nearCursor = dist < CURSOR_DIST;
        const radius = nearCursor
          ? s.r * (1 + (1 - dist / CURSOR_DIST) * 2.5)
          : s.r;

        // Outer glow
        if (nearCursor) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, radius * 5);
          glow.addColorStop(0, `rgba(0,212,255,${s.alpha * 0.28})`);
          glow.addColorStop(1, 'rgba(0,212,255,0)');
          ctx.beginPath();
          ctx.arc(s.x, s.y, radius * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = nearCursor
          ? `rgba(0,212,255,${Math.min(0.7, s.alpha + 0.21)})`
          : s.color.replace(')', `,${s.alpha})`).replace('rgb', 'rgba');
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      {/* Canvas — constellation stars + lines */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Radial torch spotlight */}
      <div
        ref={spotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default ConstellationBackground;

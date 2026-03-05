/**
 * 3D Animation Hooks & Utilities
 * ─────────────────────────────────────────────
 * use3DTilt     — perspective tilt on mouse hover
 * useMagnetic   — magnetic pull toward cursor
 * useRipple     — ripple burst on click
 * useParallax   — multi-layer scroll parallax
 */

import { useRef, useCallback, useState, useEffect } from 'react';

// ── use3DTilt ─────────────────────────────────────────────────────────────────
/**
 * Adds a 3D perspective tilt + shine to an element on hover.
 *
 * @param {object} opts
 * @param {number} opts.maxTilt   Max tilt angle in degrees (default 12)
 * @param {number} opts.scale     Scale on hover (default 1.04)
 * @param {number} opts.glare     Glare opacity, 0 = off (default 0.15)
 * @returns {{ ref, style, shineStyle, onMouseMove, onMouseLeave }}
 */
export function use3DTilt({ maxTilt = 12, scale = 1.04, glare = 0.15 } = {}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');
  const [shine, setShine] = useState({ background: 'transparent', opacity: 0 });
  const rafRef = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);   // -1 to 1
        const dy = (e.clientY - cy) / (rect.height / 2);  // -1 to 1

        const rotateX = -dy * maxTilt;
        const rotateY = dx * maxTilt;

        setTransform(
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`
        );

        if (glare > 0) {
          const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 180;
          setShine({
            background: `linear-gradient(${angle}deg, rgba(255,255,255,${glare * 0.8}) 0%, transparent 60%)`,
            opacity: 1,
          });
        }
      });
    },
    [maxTilt, scale, glare]
  );

  const onMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    setShine({ background: 'transparent', opacity: 0 });
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const style = {
    transform,
    transition: transform === '' ? 'none' : 'transform 0.1s ease',
    willChange: 'transform',
  };

  const shineStyle = {
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    pointerEvents: 'none',
    zIndex: 1,
    mixBlendMode: 'overlay',
    ...shine,
    transition: 'opacity 0.3s ease',
  };

  return { ref, style, shineStyle, onMouseMove, onMouseLeave };
}

// ── useMagnetic ───────────────────────────────────────────────────────────────
/**
 * Magnetic pull — element drifts slightly toward the cursor within its bounds.
 *
 * @param {number} strength   How strongly the element is pulled (0–1, default 0.35)
 * @returns {{ ref, style, handlers }}
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        setPos({
          x: (e.clientX - cx) * strength,
          y: (e.clientY - cy) * strength,
        });
      });
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setPos({ x: 0, y: 0 });
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const style = {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: pos.x === 0 && pos.y === 0 ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.1s linear',
    willChange: 'transform',
  };

  return { ref, style, handlers: { onMouseMove, onMouseLeave } };
}

// ── useRipple ─────────────────────────────────────────────────────────────────
/**
 * Generates ripple "splash" divs on click (inject returned <Ripples> inside
 * a position:relative container).
 *
 * @returns {{ ripples, createRipple }}
 */
export function useRipple() {
  const [ripples, setRipples] = useState([]);

  const createRipple = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now() + Math.random();

    setRipples((r) => [...r, { id, x, y, size }]);
    setTimeout(() => setRipples((r) => r.filter((rip) => rip.id !== id)), 700);
  }, []);

  const Ripples = () => (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{
            position: 'absolute',
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
            transform: 'scale(0)',
            animation: 'rippleAnim 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );

  return { ripples, createRipple, Ripples };
}

// ── Ripple keyframe (inject once) ────────────────────────────────────────────
const RIPPLE_STYLE_ID = '__ripple_kf__';
export function injectRippleKeyframe() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(RIPPLE_STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = RIPPLE_STYLE_ID;
  s.textContent = `
    @keyframes rippleAnim {
      to { transform: scale(1); opacity: 0; }
    }
  `;
  document.head.appendChild(s);
}

// ── useCountUp ────────────────────────────────────────────────────────────────
/**
 * Counts a numeric value from 0 → target when the ref enters the viewport.
 * Re-triggers each time the element enters the viewport (once: false).
 *
 * @param {object} opts
 * @param {number}   opts.end        Target number
 * @param {number}   [opts.duration] Animation duration in ms (default 1800)
 * @param {number}   [opts.decimals] Decimal places (default 0)
 * @param {string}   [opts.prefix]   Prefix character e.g. '$' or '+'
 * @param {string}   [opts.suffix]   Suffix character e.g. '%' or 'K+'
 * @param {Function} [opts.format]   Custom formatter: (raw: number) => string
 * @returns {{ ref: React.RefObject, display: string }}
 */
export function useCountUp({
  end,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
  format,
} = {}) {
  const ref         = useRef(null);
  const [value, setValue] = useState(0);
  const rafRef      = useRef(null);
  const startRef    = useRef(null);

  const runCount = useCallback(() => {
    setValue(0);
    startRef.current = null;

    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) runCount(); },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [runCount]);

  const display =
    format
      ? format(value)
      : `${prefix}${value.toFixed(decimals)}${suffix}`;

  return { ref, display };
}

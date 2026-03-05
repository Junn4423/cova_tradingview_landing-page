import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import styles from './CustomCursor.module.scss';

// ── Click particle burst ──────────────────────────────────────────────────────
const COLORS = ['#3A86FF', '#00D4FF', '#00F5A0', '#FFD700', '#FF6B6B', '#7B2CBF'];

const ClickParticle = ({ x, y, color, angle, id, onDone }) => {
  return (
    <motion.span
      key={id}
      style={{
        position: 'fixed',
        left: x,
        top: y,
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px ${color}`,
        pointerEvents: 'none',
        zIndex: 99997,
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
      animate={{
        x: Math.cos(angle) * (40 + Math.random() * 30),
        y: Math.sin(angle) * (40 + Math.random() * 30),
        scale: 0,
        opacity: 0,
      }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      onAnimationComplete={onDone}
    />
  );
};

const CustomCursor = () => {
  // Don't render on touch devices
  const isTouchDevice = typeof window !== 'undefined' &&
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouchDevice) return null;

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [particles, setParticles] = useState([]);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const dotX = useSpring(rawX, { stiffness: 1200, damping: 40, mass: 0.1 });
  const dotY = useSpring(rawY, { stiffness: 1200, damping: 40, mass: 0.1 });

  const ringX = useSpring(rawX, { stiffness: 150, damping: 20, mass: 0.5 });
  const ringY = useSpring(rawY, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onEnterClickable = () => { setIsHovering(true); setCursorVariant('hover'); };
    const onLeaveClickable = () => { setIsHovering(false); setCursorVariant('default'); };

    const onMouseDown = (e) => {
      setIsClicking(true);
      // Spawn 8 particles in a starburst
      const burst = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        color: COLORS[i % COLORS.length],
        angle: (i / 8) * Math.PI * 2,
      }));
      setParticles((p) => [...p, ...burst]);
    };
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const observe = () => {
      document.querySelectorAll('a, button, [role="button"], input, label, [tabindex]').forEach((el) => {
        el.addEventListener('mouseenter', onEnterClickable);
        el.addEventListener('mouseleave', onLeaveClickable);
      });
    };
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      mo.disconnect();
    };
  }, [rawX, rawY]);

  const removeParticle = (id) => setParticles((p) => p.filter((pt) => pt.id !== id));

  return (
    <>
      {/* Click particle bursts */}
      {particles.map((pt) => (
        <ClickParticle
          key={pt.id}
          {...pt}
          onDone={() => removeParticle(pt.id)}
        />
      ))}

      {/* Outer trailing ring */}
      <motion.div
        className={styles.ring}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.5 : 0.25,
          borderColor: isHovering ? 'rgba(0, 212, 255, 0.7)' : 'rgba(58, 134, 255, 0.4)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* Inner glowing dot */}
      <motion.div
        className={styles.dot}
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 0 : 1,
          background: isHovering
            ? 'radial-gradient(circle, #00D4FF 0%, #3A86FF 100%)'
            : 'radial-gradient(circle, #ffffff 0%, #00D4FF 100%)',
          boxShadow: isHovering
            ? '0 0 20px rgba(0, 212, 255, 0.9), 0 0 40px rgba(0, 212, 255, 0.4)'
            : '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(58, 134, 255, 0.5)',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />

      {/* Hover crosshair / blend overlay */}
      <motion.div
        className={styles.blend}
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;

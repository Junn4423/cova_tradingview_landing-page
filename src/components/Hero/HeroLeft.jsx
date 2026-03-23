import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, ChevronRight, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './HeroLeft.module.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const scatterLeft = {
  hidden: { opacity: 0, x: -80, rotate: -6 },
  visible: {
    opacity: 1, x: 0, rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// Hot tips from 4-Color Liquidity Sequence Cheat Sheet
const hotTips = [
  '🟡 → 🟢 → 🔵 → 🔴 → TREND',
  '🔵 → 🔴 → 🟡 → 🟢 → TREND',
  'Liquidity loading before expansion',
  'Blue repeatedly = Accumulation building',
  'Red attempts failing = Buyers absorbing',
  'Price moves last. Liquidity moves first.',
];

// Magnetic button hook
function useMagnet(strength = 0.4) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { sx, sy, onMove, onLeave };
}

const HeroLeft = () => {
  const btn1 = useMagnet(0.35);
  const btn2 = useMagnet(0.35);

  // Rotating hot tips
  const [tipIndex, setTipIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTipIndex((i) => (i + 1) % hotTips.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className={styles.left}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.a 
        href="#education"
        variants={scatterLeft} 
        className={styles.badge}
        style={{ textDecoration: 'none' }}
      >
        <span className={styles.badgePulse} />
        <span className={styles.badgeText}>A Visual Framework for Reading Market Behavior</span>
        <ChevronRight size={14} className={styles.badgeArrow} />
      </motion.a>

      {/* Headline */}
      <motion.h1 variants={itemVariants} className={styles.headline}>
        <span
          className={`${styles.brandGradient} notranslate`}
          aria-label="4Color System"
        >
          4Color System™
        </span>
      </motion.h1>

      {/* CFE Formula — from mail 2 */}
      <motion.div variants={itemVariants} className={styles.cfeFormula}>
        <p className={styles.cfeIntro}>
          <strong>Context-First Execution (CFE)</strong> analyzes market forces in real time by combining:
        </p>
        <p className={styles.cfeEquation}>
          <span className="notranslate">Order Flow + AD + 4-Color Candle Logic + FVG</span>
          <span className={styles.cfeArrow}>→</span>
          <span className={styles.cfeResult}>Real-Time Market Context</span>
        </p>
        <p className={styles.cfeSub}>
          Enhanced with AI-assisted interpretation for faster insight into liquidity, imbalances, and execution zones.
        </p>
      </motion.div>

      {/* Tagline */}
      <motion.p variants={itemVariants} className={styles.tagline}>
        Price shows <em>where</em>. 4-Color shows <em>who</em>.
      </motion.p>

      {/* Hot Tips Floating Window — from cheat sheet (TASK 2 + 12) */}
      <motion.div
        variants={itemVariants}
        className={styles.hotTipWindow}
      >
        <div className={styles.hotTipHeader}>
          <Lightbulb size={14} />
          <span>Liquidity Sequence Tip</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={tipIndex}
            className={styles.hotTipContent}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="notranslate">{hotTips[tipIndex]}</span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className={styles.ctas}>
        {/* Primary — links to TradingView */}
        <motion.a
          href="https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryBtn}
          style={{ x: btn1.sx, y: btn1.sy, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          onMouseMove={btn1.onMove}
          onMouseLeave={btn1.onLeave}
          whileTap={{ scale: 0.96 }}
        >
          <span>Access Lite version</span>
          <motion.span
            className={styles.btnArrow}
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowRight size={18} />
          </motion.span>
          <span className={styles.shimmer} />
        </motion.a>

        {/* Secondary — YouTube demo (updated to Bitcoin education video) */}
        <motion.a
          href="https://www.youtube.com/watch?v=xGvS9clt9Sw"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryBtn}
          style={{ x: btn2.sx, y: btn2.sy, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          onMouseMove={btn2.onMove}
          onMouseLeave={btn2.onLeave}
          whileTap={{ scale: 0.96 }}
        >
          <motion.span
            className={styles.playRing}
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
          <PlayCircle size={20} className={styles.playIcon} />
          <span>Watch demo on Youtube</span>
        </motion.a>
      </motion.div>

      {/* Education & Trading link */}
      <motion.a
        variants={itemVariants}
        href="#education"
        className={styles.educationLink}
      >
        Education &amp; Trading →
      </motion.a>

      {/* Waitlist links */}
      <motion.div variants={itemVariants} className={styles.waitlistLinks}>
        <a href="https://form.jotform.com/260806377022050" target="_blank" rel="noopener noreferrer" className={styles.waitlistLink}>Join Pro Waitlist</a>
        <span className={styles.waitlistSep}>·</span>
        <a href="https://form.jotform.com/260806560917057" target="_blank" rel="noopener noreferrer" className={styles.waitlistLink}>Apply for Elite</a>
      </motion.div>
    </motion.div>
  );
};

export default HeroLeft;

import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, Lightbulb, Facebook, Shield } from 'lucide-react';
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

// Hot tips from 4Color Liquidity Sequence Cheat Sheet
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
  const btn3 = useMagnet(0.35);
  const btn4 = useMagnet(0.35);

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
      {/* IP / Patent Badge */}
      <motion.a
        variants={itemVariants}
        href="/images/Patent-Filing.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ipBadge}
      >
        <Shield size={14} />
        <span>IP Filed — USPTO Patent Pending</span>
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
          <span className="notranslate">Structure → AD → FVG → 4Color Candle</span>
          <span className={styles.cfeArrow}>→</span>
          <span className={styles.cfeResult}>Real-Time Market Context</span>
        </p>
        <p className={styles.cfeSub}>
          Enhanced with AI-assisted interpretation for faster insight into liquidity, imbalances, and execution zones.
        </p>
      </motion.div>

      {/* Tagline */}
      <motion.p variants={itemVariants} className={styles.tagline}>
        Price shows <em>where</em>. 4Color shows <em>who</em>.
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

      {/* CTA Buttons + QR */}
      <motion.div variants={itemVariants} className={styles.ctaGroup}>
        {/* Left: 3 stacked buttons */}
        <div className={styles.btnStack}>
          {/* YouTube demo */}
          <motion.a
            href="https://www.youtube.com/watch?v=xGvS9clt9Sw"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stackBtn}
            style={{ x: btn2.sx, y: btn2.sy, textDecoration: 'none' }}
            onMouseMove={btn2.onMove}
            onMouseLeave={btn2.onLeave}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span
              className={styles.playRing}
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
            <PlayCircle size={18} className={styles.playIcon} />
            <span>Watch demo on Youtube</span>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/people/Fvg-Execution-Logic/61576892860617/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stackBtn}
            style={{ x: btn3.sx, y: btn3.sy, textDecoration: 'none' }}
            onMouseMove={btn3.onMove}
            onMouseLeave={btn3.onLeave}
            whileTap={{ scale: 0.96 }}
          >
            <Facebook size={18} color="#3A86FF" />
            <span>Follow us on Facebook</span>
          </motion.a>

          {/* Access Lite */}
          <motion.a
            href="https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.stackBtn} ${styles.liteBtn}`}
            style={{ x: btn4.sx, y: btn4.sy, textDecoration: 'none' }}
            onMouseMove={btn4.onMove}
            onMouseLeave={btn4.onLeave}
            whileTap={{ scale: 0.96 }}
          >
            <span>Access Lite version</span>
            <motion.span
              className={styles.btnArrow}
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <ArrowRight size={16} />
            </motion.span>
            <span className={styles.shimmer} />
          </motion.a>
        </div>

        {/* Right: QR panel */}
        <div className={styles.qrPanel}>
          <div className={styles.qrGlow} />
          <img
            src="/images/4ColorSystem_QR.jpeg"
            alt="Scan to access 4Color Lite on TradingView"
            className={styles.qrImg}
            loading="lazy"
          />
          <span className={styles.qrLabel}>Scan to access</span>
          <span className={styles.qrSub}>4Color Lite — Free</span>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default HeroLeft;

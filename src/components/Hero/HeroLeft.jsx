import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, TrendingUp, Shield, Zap, ChevronRight } from 'lucide-react';
import styles from './HeroLeft.module.scss';
import { useToast } from '../Toast/Toast';
import { useCountUp } from '../../utils/animations';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    // Reduced from 0.2/0.12 → tighter stagger so LCP text appears sooner
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

// Scatter on scroll-out, snap back on scroll-in
const scatterLeft = {
  hidden: { opacity: 0, x: -80, rotate: -6 },
  visible: {
    opacity: 1, x: 0, rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};
const scatterRight = {
  hidden: { opacity: 0, x: 80, rotate: 6 },
  visible: {
    opacity: 1, x: 0, rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { icon: TrendingUp, value: '94.7%', countEnd: 94.7, decimals: 1, suffix: '%', label: 'Win Rate', color: '#00F5A0' },
  { icon: Shield,     value: '50K+',  countEnd: 50,   decimals: 0, suffix: 'K+',  label: 'Traders',   color: '#3A86FF' },
  { icon: Zap,        value: '24/7',  countEnd: null,                              label: 'Live Data', color: '#FFD700' },
];

const StatItem = ({ s }) => {
  const { ref, display } = useCountUp({
    end: s.countEnd ?? 0,
    decimals: s.decimals ?? 0,
    suffix: s.suffix ?? '',
  });
  return (
    <motion.div
      className={styles.stat}
      whileHover={{ y: -6, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <div className={styles.statIcon} style={{ '--color': s.color }}>
        <s.icon size={18} />
      </div>
      <div className={styles.statBody}>
        <span ref={s.countEnd != null ? ref : undefined} className={styles.statValue} style={{ color: s.color }}>
          {s.countEnd != null ? display : s.value}
        </span>
        <span className={styles.statLabel}>{s.label}</span>
      </div>
    </motion.div>
  );
};

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
  const { showToast } = useToast();
  const btn1 = useMagnet(0.35);
  const btn2 = useMagnet(0.35);

  const handleDemo = (e) => {
    e.preventDefault();
    showToast('Đây là bản demo, chức năng này chưa hoạt động', 'info');
  };

  return (
    <motion.div
      className={styles.left}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={scatterLeft} className={styles.badge}>
        <span className={styles.badgePulse} />
        <span className={styles.badgeText}>Education &amp; Trading Redefined</span>
        <ChevronRight size={14} className={styles.badgeArrow} />
      </motion.div>

      {/* Headline */}
      <motion.h1 variants={itemVariants} className={styles.headline}>
        Master the Market with{' '}
        <br className={styles.br} />
        <span
          className={`${styles.brandGradient} notranslate`}
          aria-label="4Color System"
        >
          4Color System
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p variants={itemVariants} className={styles.sub}>
        See the pressure, not just the patterns. Built for market validation —
        the ultimate education platform for serious traders who demand an edge.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className={styles.ctas}>
        {/* Primary — magnetic */}
        <motion.button
          className={styles.primaryBtn}
          style={{ x: btn1.sx, y: btn1.sy }}
          onMouseMove={btn1.onMove}
          onMouseLeave={btn1.onLeave}
          onClick={handleDemo}
          whileTap={{ scale: 0.96 }}
        >
          <span>Explore Education</span>
          <motion.span
            className={styles.btnArrow}
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowRight size={18} />
          </motion.span>
          <span className={styles.shimmer} />
        </motion.button>

        {/* Secondary — magnetic */}
        <motion.button
          className={styles.secondaryBtn}
          style={{ x: btn2.sx, y: btn2.sy }}
          onMouseMove={btn2.onMove}
          onMouseLeave={btn2.onLeave}
          onClick={handleDemo}
          whileTap={{ scale: 0.96 }}
        >
          <motion.span
            className={styles.playRing}
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
          <PlayCircle size={20} className={styles.playIcon} />
          <span>Watch Demo</span>
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div variants={scatterRight} className={styles.stats}>
        {stats.map((s, i) => <StatItem key={i} s={s} />)}
      </motion.div>

      {/* Social proof strip */}
      <motion.div variants={itemVariants} className={styles.proof}>
        <div className={styles.avatarStack}>
          {['#3A86FF', '#00F5A0', '#FF6B6B', '#FFD700', '#7B2CBF'].map((c, i) => (
            <div key={i} className={styles.avatar} style={{ background: c, zIndex: 10 - i }} />
          ))}
        </div>
        <span className={styles.proofText}>
          Joined by <strong>50,000+</strong> professional traders worldwide
        </span>
      </motion.div>
    </motion.div>
  );
};

export default HeroLeft;

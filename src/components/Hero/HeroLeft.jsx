import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, PlayCircle, TrendingUp, Shield, Zap, ChevronRight } from 'lucide-react';
import styles from './HeroLeft.module.scss';

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
        <span className={styles.statValue} style={{ color: s.color }}>
          {s.value}
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
  const btn1 = useMagnet(0.35);
  const btn2 = useMagnet(0.35);

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
        <span className={styles.badgeText}>A Visual Framework for Reading Market Behavior</span>
        <ChevronRight size={14} className={styles.badgeArrow} />
      </motion.div>

      {/* Headline */}
      <motion.h1 variants={itemVariants} className={styles.headline}>
        <span
          className={`${styles.brandGradient} notranslate`}
          aria-label="4Color System"
        >
          4Color System™
        </span>
      </motion.h1>

      {/* Subheadline — exact from DOCX */}
      <motion.p variants={itemVariants} className={styles.sub}>
        Understand liquidity shifts, execution context, and structural pressure
        through a simplified 4-Color price model.
      </motion.p>

      {/* Tagline */}
      <motion.p variants={itemVariants} className={styles.tagline}>
        Price shows <em>where</em>. 4-Color shows <em>who</em>.
      </motion.p>

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

        {/* Secondary — YouTube demo */}
        <motion.a
          href="https://www.youtube.com/watch?v=9M93_6S9TaQ"
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

      {/* Waitlist links from DOCX */}
      <motion.div variants={itemVariants} className={styles.waitlistLinks}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=minhptran9@gmail.com&su=Join%20Pro%20Waitlist%20%E2%80%93%204Color%20System&body=Hi%204Color%20System%20Team%2C%0A%0AI%20am%20interested%20in%20joining%20the%20Pro%20Waitlist.%0A%0APlease%20let%20me%20know%20when%20Pro%20is%20available%20and%20how%20to%20get%20early%20access.%0A%0AThank%20you!" target="_blank" rel="noopener noreferrer" className={styles.waitlistLink}>Join Pro Waitlist</a>
        <span className={styles.waitlistSep}>·</span>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=minhptran9@gmail.com&su=Apply%20for%20Elite%20%E2%80%93%204Color%20System&body=Hi%204Color%20System%20Team%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20Elite%20version%20with%20FVG%20Lifecycle%20tracking%20and%20execution%20context.%0A%0APlease%20send%20me%20more%20details%20about%20Elite%20access.%0A%0AThank%20you!" target="_blank" rel="noopener noreferrer" className={styles.waitlistLink}>Apply for Elite</a>
      </motion.div>
    </motion.div>
  );
};

export default HeroLeft;

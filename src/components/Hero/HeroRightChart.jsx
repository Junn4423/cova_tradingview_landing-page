import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BarChart2, TrendingUp, Activity, Layers } from 'lucide-react';
import styles from './HeroRightChart.module.scss';

// ─── Floating info badge ──────────────────────────────────────────────────────
const InfoBadge = ({ label, value, sub, color, delay, x, y }) => (
  <motion.div
    className={styles.badge}
    style={{ left: x, top: y, '--accent': color }}
    initial={{ opacity: 0, y: 20, scale: 0.85 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.06, y: -4 }}
  >
    <span className={styles.badgeDot} style={{ background: color }} />
    <div className={styles.badgeInner}>
      <span className={styles.badgeLabel}>{label}</span>
      <span className={styles.badgeValue} style={{ color }}>{value}</span>
      {sub && <span className={styles.badgeSub}>{sub}</span>}
    </div>
  </motion.div>
);

// ─── Tilt reference dimensions (logical) ─────────────────────────────────────
const TW = 580;
const TH = 400;

const HeroRightChart = () => {
  const containerRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  // ── 3-D tilt on mouse move ────────────────────────────────────────────────
  const mouseX  = useMotionValue(TW / 2);
  const mouseY  = useMotionValue(TH / 2);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22 });
  const rotateX = useTransform(springY, [0, TH], [7, -7]);
  const rotateY = useTransform(springX, [0, TW], [-7,  7]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(TW / 2);
    mouseY.set(TH / 2);
  };

  return (
    <motion.div
      ref={containerRef}
      className={styles.wrapper}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 60, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow */}
      <div className={styles.glow} />
      <div className={styles.glowSecondary} />

      {/* Card */}
      <div className={styles.card}>

        {/* ── Card Header ──────────────────────────────────────────────── */}
        <div className={styles.cardHeader}>
          <div className={styles.ticker}>
            <div className={styles.tickerIcon}><BarChart2 size={16} /></div>
            <div>
              <span className={`${styles.tickerSymbol} notranslate`}>4-Color + FVG Lite</span>
              <span className={styles.exchange}>TradingView · Free Access</span>
            </div>
          </div>

          {/* PUBLIC badge */}
          <div className={styles.liveChip}>
            <motion.span
              className={styles.liveDot}
              style={{ background: '#00F5A0' }}
              animate={{ opacity: [1, 0.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
            PUBLIC
          </div>
        </div>

        {/* ── Static Lite Chart Image ───────────────────────────────────── */}
        <div className={styles.chartArea}>
          <motion.img
            src="/images/Lite-Sample-Chart.jpg"
            alt="4-Color + FVG Lite — Sample Chart"
            className={styles.chartImg}
            onLoad={() => setImgLoaded(true)}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: imgLoaded ? 1 : 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Subtle breathing overlay */}
          <motion.div
            className={styles.chartImgOverlay}
            animate={{ opacity: [0.0, 0.06, 0.0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          />

          {/* Corner tag */}
          <div className={styles.chartTag}>
            <span className={styles.chartTagDot} />
            <span className={styles.chartTagText}>Live Preview</span>
          </div>
        </div>

        {/* ── Bottom metrics row ────────────────────────────────────────── */}
        <div className={styles.metrics}>
          {[
            { icon: TrendingUp, label: '4-Color Logic',  value: 'Active',    color: '#3A86FF' },
            { icon: Activity,   label: 'FVG Zones',      value: 'Visible',   color: '#00D4FF' },
            { icon: Layers,     label: 'Access',         value: 'FREE',      color: '#00F5A0' },
          ].map(({ icon: Icon, label, value, color }, i) => (
            <motion.div
              key={i}
              className={styles.metric}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.12, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <Icon size={14} style={{ color }} />
              <span className={styles.metricLabel}>{label}</span>
              <span className={`${styles.metricValue} notranslate`} style={{ color }}>{value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Floating zone info badges ─────────────────────────────────────── */}
      <InfoBadge
        label="Blue — Accumulation"
        value="Building"
        sub="Absorption phase"
        color="#3A86FF"
        delay={1.4}
        x="calc(100% - 10px)"
        y="20%"
      />
      <InfoBadge
        label="Green — Expansion"
        value="Confirmed"
        sub="Buyer control"
        color="#00F5A0"
        delay={1.6}
        x="-20px"
        y="52%"
      />
      <InfoBadge
        label="Yellow — Liquidity"
        value="Sweep"
        sub="Watch for reversal"
        color="#FFD700"
        delay={1.8}
        x="calc(100% - 10px)"
        y="70%"
      />

      {/* Doji — Why Upgrade? (TASK 14 — from mail 3) */}
      <motion.div
        className={styles.dojiSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/images/Doji.jpg"
          alt="Why You Keep Losing? — Doji comparison: Traditional vs 4-Color"
          className={styles.dojiImg}
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroRightChart;

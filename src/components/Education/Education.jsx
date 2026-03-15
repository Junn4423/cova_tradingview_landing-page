import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, ExternalLink, Check, X, Info } from 'lucide-react';
import styles from './Education.module.scss';
import { use3DTilt, useRipple, injectRippleKeyframe } from '../../utils/animations';

import { useEffect } from 'react';

const modules = [
  {
    title: 'Foundations of 4Color System',
    description: 'Learn to read who controls the market using 4-Color Candle Logic. Stop random guessing — understand context before you trade.',
    level: 'Beginner',
    imgUrl: '/images/Lite-Education-Chart.jpg',
    tag: 'Start Here',
    tagColor: '#00F5A0',
  },
  {
    title: 'Understanding FVG (Fair Value Gap)',
    description: 'Discover how Fair Value Gaps represent imbalances in the market ecosystem. Learn the flow from retail to smart money to institutions.',
    level: 'Intermediate',
    imgUrl: '/images/FVG.jpg',
    tag: 'Core Concept',
    tagColor: '#3A86FF',
  },
  {
    title: 'Dynamic FVG Logic & Orderflow',
    description: 'Deep dive into how orderflow and delta analysis confirm whether a move has real pressure behind it — or is just a trap.',
    level: 'Advanced',
    imgUrl: '/images/Bitcoin.jpg',
    tag: 'Pro Level',
    tagColor: '#7B2CBF',
  },
  {
    title: 'Stress Test & Risk Management',
    description: 'Apply the CFE Sequence in real conditions. Learn how to validate setups, identify traps vs takeovers, and protect your capital.',
    level: 'All Levels',
    imgUrl: '/images/hero-cover.jpg',
    tag: 'Essential',
    tagColor: '#FF9F1C',
  },
];

const tiers = [
  {
    name: 'Lite',
    question: "What's going on?",
    subtitle: 'Market Context',
    color: '#00F5A0',
    bg: 'rgba(0,245,160,0.07)',
    border: 'rgba(0,245,160,0.25)',
    badge: 'FREE — Public',
    badgeBg: 'rgba(0,245,160,0.15)',
    badgeColor: '#00F5A0',
    included: [
      'Shows who controls price using 4-Color Candle Logic',
      'Helps traders stop random guessing',
      'Prevents emotional trades',
      'Real-time market state reading',
    ],
    excluded: [
      'No imbalance logic',
      'No FVG validation',
      'No timing signals',
      'No BUY/SELL signals — observation only',
    ],
    analogy: 'Watching store traffic and shelf movement before making business decisions.',
    cta: 'Access Lite — Free',
    ctaLink: 'https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/',
    ctaExternal: true,
  },
  {
    name: 'Pro',
    question: 'Is this pressure real?',
    subtitle: 'Pressure Confirmation',
    color: '#3A86FF',
    bg: 'rgba(58,134,255,0.07)',
    border: 'rgba(58,134,255,0.25)',
    badge: 'Coming Soon',
    badgeBg: 'rgba(255,215,0,0.12)',
    badgeColor: '#FFD700',
    included: [
      'All Lite features',
      'Buying vs selling pressure confirmation',
      'Absorption behavior detection',
      'Filters weak market moves',
    ],
    excluded: [
      'No FVG imbalance tracking yet',
      'No timing signals yet',
    ],
    analogy: 'Checking supplier stability and customer demand before ordering inventory.',
    cta: 'Join Pro Waitlist',
    ctaLink: '#cta',
    ctaExternal: false,
  },
  {
    name: 'Elite',
    question: 'Is this the right moment?',
    subtitle: 'Execution Context',
    color: '#FF9F1C',
    bg: 'rgba(255,159,28,0.07)',
    border: 'rgba(255,159,28,0.25)',
    badge: 'Coming Soon',
    badgeBg: 'rgba(255,215,0,0.12)',
    badgeColor: '#FFD700',
    included: [
      'All Pro features',
      'Fair Value Gap (FVG) imbalance detection',
      'FVG Lifecycle tracking',
      'Trap vs takeover identification',
      'FVG Execution Logic (CFE)',
      'When control actually shifts',
    ],
    excluded: [],
    analogy: 'You know exactly when wholesalers stop dumping inventory and buyers start paying higher prices.',
    cta: 'Apply for Elite',
    ctaLink: '#cta',
    ctaExternal: false,
  },
];

const ModuleCard = ({ mod, index }) => {
  const tilt = use3DTilt({ maxTilt: 8, scale: 1.025, glare: 0.1 });
  const { createRipple, Ripples } = useRipple();
  return (
    <motion.div
      className={styles.moduleCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      ref={tilt.ref}
      style={{ ...tilt.style, position: 'relative', overflow: 'hidden' }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={createRipple}
    >
      <div style={tilt.shineStyle} />
      <Ripples />
      <div className={styles.moduleImage}>
        <img src={mod.imgUrl} alt={mod.title} loading="lazy" />
        <span className={styles.moduleTag} style={{ background: mod.tagColor + '22', color: mod.tagColor, border: `1px solid ${mod.tagColor}44` }}>
          {mod.tag}
        </span>
        <span className={styles.moduleLevel}>{mod.level}</span>
      </div>
      <div className={styles.moduleContent}>
        <h3 className={styles.moduleTitle}>{mod.title}</h3>
        <p className={styles.moduleDesc}>{mod.description}</p>
        <button className={styles.moduleBtn}>
          <BookOpen size={15} />
          <span>Self-Study Module</span>
        </button>
      </div>
    </motion.div>
  );
};

const TierCard = ({ tier, index }) => {
  const tilt = use3DTilt({ maxTilt: 7, scale: 1.02, glare: 0.08 });
  return (
    <motion.div
      className={styles.tierCard}
      style={{ background: tier.bg, borderColor: tier.border, ...tilt.style }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div style={tilt.shineStyle} />
      <div className={styles.tierHeader}>
        <div className={styles.tierBadge} style={{ background: tier.badgeBg, color: tier.badgeColor }}>
          {tier.badge}
        </div>
        <h3 className={styles.tierName} style={{ color: tier.color }}>{tier.name}</h3>
        <div className={styles.tierSubtitle}>{tier.subtitle}</div>
        <div className={styles.tierQuestion} style={{ borderLeftColor: tier.color }}>"{tier.question}"</div>
      </div>
      <div className={styles.tierFeatures}>
        {tier.included.map((item, i) => (
          <div key={i} className={styles.tierFeature}>
            <Check size={14} color={tier.color} style={{ flexShrink: 0 }} />
            <span>{item}</span>
          </div>
        ))}
        {tier.excluded.map((item, i) => (
          <div key={i} className={`${styles.tierFeature} ${styles.excluded}`}>
            <X size={14} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0 }} />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={styles.tierAnalogy}>
        <Info size={14} color={tier.color} style={{ flexShrink: 0, marginTop: 2 }} />
        <span><em>{tier.analogy}</em></span>
      </div>
      {tier.ctaExternal ? (
        <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer"
          className={styles.tierCta}
          style={{ background: tier.color + '18', borderColor: tier.border, color: tier.color }}>
          {tier.cta} <ExternalLink size={14} />
        </a>
      ) : (
        <button className={styles.tierCta}
          style={{ background: tier.color + '18', borderColor: tier.border, color: tier.color }}
          onClick={() => { window.location.href = tier.ctaLink; }}>
          {tier.cta} <ChevronRight size={14} />
        </button>
      )}
    </motion.div>
  );
};

const Education = () => {
  useEffect(() => { injectRippleKeyframe(); }, []);

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>Self-Paced Trading Education</span>
          <h2 className={styles.title}>
            Learn to Trade at{' '}
            <span className={styles.gradient}>Your Own Pace</span>
          </h2>
          <p className={styles.subtitle}>
            4 structured modules designed for independent learners. No live classes, no scheduled sessions —
            study when you are ready, at the depth you choose.
          </p>
        </motion.div>

        <div className={styles.modulesGrid}>
          {modules.map((mod, i) => (
            <ModuleCard key={i} mod={mod} index={i} />
          ))}
        </div>

        <motion.div
          className={styles.tierSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.tierHeading}>Understand Each Tool</h3>
          <p className={styles.tierSubheading}>
            The 4-Color System comes in tiers — each building on the previous, unlocking deeper market context.
          </p>
          <div className={styles.tiersGrid}>
            {tiers.map((tier, i) => (
              <TierCard key={i} tier={tier} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

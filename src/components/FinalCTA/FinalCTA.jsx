import { motion } from 'framer-motion';
import { Check, Sparkles, ExternalLink, Youtube, Facebook } from 'lucide-react';
import styles from './FinalCTA.module.scss';

import { use3DTilt, useRipple, injectRippleKeyframe } from '../../utils/animations';
import { useEffect } from 'react';

const plans = [
  {
    name: 'Lite',
    price: 'FREE',
    period: 'Free Forever',
    description: 'Start reading market context — free on TradingView.',
    image: '/images/LITE-FX2.png',
    features: [
      '4Color Candle Logic (who controls price)',
      'Prevents emotional trades',
      'Real-time market state reading',
      'Available on TradingView — Free',
      'No BUY/SELL signals — observation only',
    ],
    popular: false,
    cta: 'Access Lite — Free',
    ctaLink: 'https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/',
    ctaExternal: true,
    badge: 'PUBLIC',
    badgeColor: '#00F5A0',
    isShowcase: false,
  },
  {
    name: 'Pro',
    period: 'Under Development',
    description: 'Confirm whether the pressure behind a move is real.',
    image: '/images/PRO-FX-TIME-ZONE.png',
    features: [
      'All Lite features',
      'Buying vs Selling pressure metrics',
      'Absorption detection',
      'Liquidity imbalance signals',
    ],
    popular: false,
    badge: 'NOT FOR SALE',
    badgeColor: '#FF9F1C',
    isShowcase: true,
  },
  {
    name: 'Elite',
    period: 'Under Development',
    description: 'Full execution context with FVG Lifecycle tracking.',
    image: '/images/ELITE-FX.png',
    features: [
      'All Pro features',
      'Fair Value Gap (FVG) imbalance detection',
      'FVG Lifecycle tracking',
      'Trap vs takeover identification',
      'FVG Lifecycle Logic™ (CFE)',
    ],
    popular: false,
    badge: 'NOT FOR SALE',
    badgeColor: '#FF9F1C',
    isShowcase: true,
  },
  {
    name: 'Hubs',
    period: 'Research in Progress',
    description: 'FX Terminal Hub — multi-pair Forex & crypto dashboard.',
    image: '/images/ELITE-STOCK2.png',
    features: [
      'All Elite features',
      'FX Terminal Hub multi-pair dashboard',
      'Forex & crypto asset coverage',
      'Advanced orderflow analytics',
    ],
    popular: false,
    badge: 'NOT FOR SALE',
    badgeColor: '#FF9F1C',
    isShowcase: true,
  },
];

const PlanCard = ({ plan, index }) => {
  const tilt = use3DTilt({ maxTilt: 8, scale: 1.03, glare: 0.12 });
  const { createRipple, Ripples } = useRipple();

  return (
    <motion.div
      className={`${styles.planCard} ${plan.popular ? styles.popular : ''} ${plan.isShowcase ? styles.showcaseCard : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      ref={tilt.ref}
      style={{ ...tilt.style, position: 'relative', overflow: 'hidden' }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div style={tilt.shineStyle} />

      {/* Status Badge */}
      <div
        className={styles.statusBadge}
        style={{ background: plan.badgeColor + '18', color: plan.badgeColor, border: `1px solid ${plan.badgeColor}35` }}
      >
        {plan.badge}
      </div>

      {/* Chart Image */}
      {plan.image && (
        <div className={styles.planImage}>
          <img src={plan.image} alt={`${plan.name} chart`} loading="lazy" />
        </div>
      )}

      <div className={styles.planHeader}>
        <h3 className={`${styles.planName} notranslate`}>{plan.name}</h3>
        <div className={styles.planPrice}>
          {plan.price && <span className={styles.price}>{plan.price}</span>}
          <span className={styles.period}>{plan.period}</span>
        </div>
        <p className={styles.planDescription}>{plan.description}</p>
      </div>

      <ul className={`${styles.features} ${plan.isShowcase ? styles.featuresDimmed : ''}`}>
        {plan.features.map((feature, i) => (
          <motion.li
            key={i}
            className={styles.feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 + i * 0.05 }}
          >
            <span className={styles.checkIcon}><Check size={16} /></span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* Not-for-sale notice for Pro/Elite/Hubs */}
      {plan.isShowcase ? (
        <div className={styles.notForSaleNotice}>
          <p>Currently under development. Not for Sale — No public access.</p>
          <p>These systems are being refined for real execution — not rushed for release. Access will only be considered once the system meets internal standards.</p>
        </div>
      ) : (
        <>
          {/* Follow Us Links for Lite */}
          <div className={styles.followSection}>
            <a href="https://www.youtube.com/watch?v=xGvS9clt9Sw" target="_blank" rel="noopener noreferrer" className={styles.followLink}>
              <Youtube size={16} />
              <span>YouTube</span>
            </a>
            <a href="https://www.facebook.com/people/Fvg-Execution-Logic/61576892860617/" target="_blank" rel="noopener noreferrer" className={styles.followLink}>
              <Facebook size={16} />
              <span>Facebook</span>
            </a>
          </div>
          <a
            href={plan.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.planButton} ${styles.primaryButton}`}
            style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
          >
            <Ripples />
            <span>{plan.cta}</span>
            <ExternalLink size={16} />
          </a>
        </>
      )}
    </motion.div>
  );
};

const FinalCTA = () => {
  useEffect(() => { injectRippleKeyframe(); }, []);
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>
            <Sparkles size={14} />
            4Color System™ Tools
          </span>
          <h2 className={styles.title}>
            The <span className={styles.gradient}>4Color System™</span> — What's Being Built
          </h2>
          <p className={styles.subtitle}>
            Lite is free and live on TradingView. Pro, Elite, and Hubs are under development — showcased here so you know what's coming.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className={styles.plans}>
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className={styles.glowEffect} />
    </section>
  );
};

export default FinalCTA;

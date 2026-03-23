import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Lock, CreditCard, CheckCircle2, Globe2, ExternalLink } from 'lucide-react';
import styles from './FinalCTA.module.scss';

import { use3DTilt, useRipple, injectRippleKeyframe } from '../../utils/animations';
import { useEffect } from 'react';

const plans = [
  {
    name: 'Lite',
    price: 'FREE',
    priceNum: 0,
    period: 'Free Forever',
    description: 'Start reading market context — free on TradingView.',
    image: '/images/Lite-Sample-Chart.jpg',
    features: [
      '4-Color Candle Logic (who controls price)',
      'Prevents emotional trades',
      'Real-time market state reading',
      'Available on TradingView — Free',
      'No BUY/SELL signals — observation only',
    ],
    popular: false,
    cta: 'Access Free on TradingView',
    ctaLink: 'https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/',
    ctaExternal: true,
    badge: 'PUBLIC',
    badgeColor: '#00F5A0',
  },
  {
    name: 'Pro',
    price: null,
    priceNum: null,
    period: 'Early Access (Under Development)',
    description: 'Confirm whether the pressure behind a move is real.',
    image: '/images/Pro-Sample-Chart.jpeg',
    features: [
      'All Lite features',
      'Buying vs Selling pressure metrics',
      'Absorption detection',
      'Liquidity imbalance signals',
      'Priority Support',
    ],
    popular: true,
    cta: 'Join Pro Waitlist',
    ctaLink: 'https://form.jotform.com/260806377022050',
    ctaExternal: true,
    badge: 'COMING SOON',
    badgeColor: '#FFD700',
  },
  {
    name: 'Elite',
    price: null,
    priceNum: null,
    period: 'Research Version (Under Development)',
    description: 'Full execution context with FVG Lifecycle tracking.',
    image: '/images/Elite-Sample-Chart.jpeg',
    features: [
      'All Pro features',
      'Fair Value Gap (FVG) imbalance detection',
      'FVG Lifecycle tracking',
      'Trap vs takeover identification',
      'FVG Lifecycle Logic™ (CFE)',
    ],
    popular: false,
    cta: 'Apply for Elite',
    ctaLink: 'https://form.jotform.com/260806560917057',
    ctaExternal: true,
    badge: 'COMING SOON',
    badgeColor: '#FFD700',
  },
  {
    name: 'Hubs',
    price: null,
    priceNum: null,
    period: 'Research in Progress',
    description: 'FX Terminal Hub — multi-pair Forex & crypto dashboard.',
    image: '/images/FX.jpg',
    features: [
      'All Elite features',
      'FX Terminal Hub multi-pair dashboard',
      'Forex & crypto asset coverage',
      'Advanced orderflow analytics',
      'Dedicated onboarding support',
    ],
    popular: false,
    cta: 'Contact for Access',
    ctaLink: 'https://form.jotform.com/260806911516052',
    ctaExternal: true,
    badge: 'COMING SOON',
    badgeColor: '#FFD700',
  },
];

const PlanCard = ({ plan, index }) => {
  const tilt = use3DTilt({ maxTilt: 8, scale: 1.03, glare: 0.12 });
  const { createRipple, Ripples } = useRipple();

  return (
    <motion.div
      className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
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
      {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}

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
          {plan.price ? (
            <span className={styles.price}>{plan.price}</span>
          ) : null}
          <span className={styles.period}>{plan.period}</span>
        </div>
        <p className={styles.planDescription}>{plan.description}</p>
      </div>

      <ul className={styles.features}>
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

      {plan.ctaExternal ? (
        <a
          href={plan.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.planButton} ${plan.popular ? styles.primaryButton : ''}`}
          style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
        >
          <Ripples />
          <span>{plan.cta}</span>
          <ExternalLink size={16} />
        </a>
      ) : (
        <motion.button
          className={`${styles.planButton} ${plan.popular ? styles.primaryButton : ''}`}
          onClick={(e) => { createRipple(e); }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <Ripples />
          <span>{plan.cta}</span>
          <ArrowRight size={18} />
        </motion.button>
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
            Choose Your Tool
          </span>
          <h2 className={styles.title}>
            The <span className={styles.gradient}>4Color System™</span> Product Suite
          </h2>
          <p className={styles.subtitle}>
            Lite is free and live now. Pro, Elite, and Hubs are in final testing — join the waitlist to get early access.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className={styles.plans}>
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className={styles.trustSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
        >
          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <span className={styles.trustIcon}><Lock size={18} /></span>
              <span>256-bit SSL Secure</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustIcon}><CreditCard size={18} /></span>
              <span>All Major Cards Accepted</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustIcon}><CheckCircle2 size={18} /></span>
              <span>30-Day Money Back</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustIcon}><Globe2 size={18} /></span>
              <span>Instant Global Access</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className={styles.glowEffect} />
    </section>
  );
};

export default FinalCTA;

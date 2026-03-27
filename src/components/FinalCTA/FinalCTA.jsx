import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, ExternalLink, Youtube, Facebook, Users, BarChart2 } from 'lucide-react';
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
    qrCode: '/images/4ColorSystem_QR.jpeg',
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

      {/* QR Code */}
      {plan.qrCode && (
        <div className={styles.qrSection}>
          <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
            <img src={plan.qrCode} alt={`Scan to reserve ${plan.name}`} className={styles.qrImage} />
          </a>
          <span className={styles.qrLabel}>Scan to Reserve Your Spot</span>
        </div>
      )}

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
            Start reading market context now — no cost, no waitlist. Free on TradingView.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className={styles.plans}>
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Community / Follow Us */}
        <motion.div
          className={styles.communitySection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.communityIcon}>
            <Users size={28} />
          </div>
          <h3 className={styles.communityTitle}>Join Our Community</h3>
          <p className={styles.communityDesc}>
            Follow us for chart breakdowns, liquidity reads, and live analysis — updated regularly.
          </p>
          <div className={styles.communityLinks}>
            <a
              href="https://www.youtube.com/watch?v=xGvS9clt9Sw"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.communityBtn} ${styles.youtubeBtn}`}
            >
              <Youtube size={20} />
              <span>Follow on YouTube</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://www.facebook.com/people/Fvg-Execution-Logic/61576892860617/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.communityBtn} ${styles.facebookBtn}`}
            >
              <Facebook size={20} />
              <span>Follow on Facebook</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.communityBtn} ${styles.liteCtaBtn}`}
            >
              <BarChart2 size={20} />
              <span>Try 4Color Lite — Free</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className={styles.glowEffect} />
    </section>
  );
};

export default FinalCTA;

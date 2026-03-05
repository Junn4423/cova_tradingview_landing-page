import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Lock, CreditCard, CheckCircle2, Globe2 } from 'lucide-react';
import styles from './FinalCTA.module.scss';
import { useToast } from '../Toast/Toast';
import { use3DTilt, useRipple, injectRippleKeyframe, useCountUp } from '../../utils/animations';
import { useEffect } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$97',
    priceNum: 97,
    period: 'one-time',
    description: 'Perfect for beginners starting their trading journey',
    features: [
      'Foundations Course (24 lessons)',
      'Basic Color Zone Indicators',
      'Community Forum Access',
      '30-Day Email Support',
      'Mobile App Access',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$297',
    priceNum: 297,
    period: 'one-time',
    description: 'For serious traders ready to level up',
    features: [
      'All Starter Features',
      'Advanced Strategies Course',
      'Premium Indicators Suite',
      'Weekly Live Q&A Sessions',
      'Private Discord Channel',
      '6-Month Priority Support',
      'Trade Journal Template',
    ],
    popular: true,
    cta: 'Start Pro',
  },
  {
    name: 'Elite',
    price: '$997',
    priceNum: 997,
    period: 'one-time',
    description: 'Full access with personal mentorship',
    features: [
      'All Professional Features',
      '1-on-1 Mentorship Sessions',
      'Custom Strategy Development',
      'Lifetime Access & Updates',
      'Exclusive Elite Community',
      'VIP Event Invitations',
      'Done-For-You Setup',
      'Direct Mentor Hotline',
    ],
    popular: false,
    cta: 'Go Elite',
  },
];

const PlanCard = ({ plan, index, onDemoClick }) => {
  const tilt = use3DTilt({ maxTilt: 8, scale: 1.03, glare: 0.12 });
  const { createRipple, Ripples } = useRipple();
  const { ref: priceRef, display: priceDisplay } = useCountUp({ end: plan.priceNum, decimals: 0, prefix: '$' });

  return (
    <motion.div
      className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      ref={tilt.ref}
      style={{ ...tilt.style, position: 'relative', overflow: 'hidden' }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div style={tilt.shineStyle} />
      {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}

      <div className={styles.planHeader}>
        <h3 className={styles.planName}>{plan.name}</h3>
        <div className={styles.planPrice}>
          <span ref={priceRef} className={styles.price}>{priceDisplay}</span>
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

      <motion.button
        className={`${styles.planButton} ${plan.popular ? styles.primaryButton : ''}`}
        onClick={(e) => { createRipple(e); onDemoClick(e); }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <Ripples />
        <span>{plan.cta}</span>
        <ArrowRight size={18} />
      </motion.button>
    </motion.div>
  );
};

const FinalCTA = () => {
  const { showToast } = useToast();
  useEffect(() => { injectRippleKeyframe(); }, []);

  const handleDemoClick = (e) => {
    e.preventDefault();
    showToast('Đây là bản demo, chức năng này chưa hoạt động', 'info');
  };
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
            Start Your Journey
          </span>
          <h2 className={styles.title}>
            Ready to Transform Your{' '}
            <span className={styles.gradient}>Trading?</span>
          </h2>
          <p className={styles.subtitle}>
            Choose the plan that fits your goals. All plans include our 30-day money-back guarantee.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className={styles.plans}>
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} index={index} onDemoClick={handleDemoClick} />
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

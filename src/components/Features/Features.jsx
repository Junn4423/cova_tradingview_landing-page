import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Target, 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp,
  LineChart,
  Layers
} from 'lucide-react';
import styles from './Features.module.scss';
import { use3DTilt, useRipple, injectRippleKeyframe } from '../../utils/animations';
import { useEffect } from 'react';

const features = [
  {
    icon: BarChart3,
    title: '4Color System™',
    titleNoTranslate: true,
    description: 'Our proprietary methodology uses Accumulation (Blue), Expansion (Green), Distribution (Red), and Reset (Yellow) phases — making market cycles instantly visible through 4 distinct candle colors.',
    color: '#3A86FF',
  },
  {
    icon: Target,
    title: 'Liquidity State Reading',
    description: 'Read who is in control of price at any moment. The 4Color system shows whether buyers, sellers, or neither are driving the market — eliminating guesswork.',
    color: '#00F5A0',
  },
  {
    icon: Brain,
    title: 'Dynamic FVG Logic',
    description: 'Fair Value Gap tracking across its full lifecycle — from creation to validation to fill. Understand exactly where institutional imbalance sits in the market.',
    color: '#7B2CBF',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'The Stress Test feature validates setups before you act. Know whether a move is a trap or a genuine takeover — then position accordingly.',
    color: '#FF9F1C',
  },
  {
    icon: Zap,
    title: 'FVG Lifecycle Logic™ (CFE)',
    description: 'The complete Accumulation → Liquidity Sweep → Structure Shift → Buyer Control → Expansion sequence — the roadmap from setup to breakout.',
    color: '#00D4FF',
  },
  {
    icon: TrendingUp,
    title: 'Multi-Timeframe Context',
    description: 'Analyze liquidity states across multiple timeframes simultaneously. Confirm whether structure on the higher timeframe aligns with execution on the lower.',
    color: '#FF6B6B',
  },
  {
    icon: LineChart,
    title: 'Orderflow & Delta Analysis',
    description: 'Go beyond candles — analyze the delta between buying and selling volume to confirm whether price pressure is genuine absorption or simply noise.',
    color: '#FFD700',
  },
  {
    icon: Layers,
    title: 'FX Terminal Hub',
    description: 'The Hubs tier provides a multi-pair Forex and crypto dashboard — monitor multiple markets simultaneously with the same 4Color logic applied across all pairs.',
    color: '#00F5A0',
  },
];

const FeatureCard = ({ feature, variants }) => {
  const tilt = use3DTilt({ maxTilt: 10, scale: 1.03, glare: 0.18 });
  const { createRipple, Ripples } = useRipple();

  return (
    <motion.div
      className={styles.card}
      variants={variants}
      ref={tilt.ref}
      style={{ ...tilt.style, position: 'relative', overflow: 'hidden' }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={createRipple}
    >
      <div style={tilt.shineStyle} />
      <Ripples />
      <div
        className={styles.iconWrapper}
        style={{
          background: `${feature.color}15`,
          borderColor: `${feature.color}30`,
        }}
      >
        <feature.icon size={28} style={{ color: feature.color }} />
      </div>
      <h3 className={`${styles.cardTitle}${feature.titleNoTranslate ? ' notranslate' : ''}`}>
        {feature.title}
      </h3>
      <p className={styles.cardDescription}>{feature.description}</p>
      <div className={styles.cardGlow} style={{ background: feature.color }} />
    </motion.div>
  );
};

const Features = () => {
  useEffect(() => { injectRippleKeyframe(); }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Features</span>
          <h2 className={styles.title}>
            What Your{' '}
            <span className={styles.gradient}>Chart Is Missing</span>
          </h2>
          <p className={styles.subtitle}>
            The 4Color System™ gives you the tools to read market behavior with clarity — not predictions, 
            but real-time structural context that serious traders rely on.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

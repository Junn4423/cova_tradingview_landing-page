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
    title: '4-Zone Color System',
    titleNoTranslate: true,
    description: 'Our proprietary methodology divides market analysis into four distinct color zones, making complex patterns instantly recognizable.',
    color: '#3A86FF',
  },
  {
    icon: Target,
    title: 'Precision Entry Points',
    description: 'Identify optimal entry and exit points with laser-focused accuracy using our advanced zone-based algorithms.',
    color: '#00F5A0',
  },
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Leverage machine learning models trained on decades of market data to predict price movements before they happen.',
    color: '#7B2CBF',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Built-in risk assessment tools help you manage position sizes and protect your capital with smart stop-loss strategies.',
    color: '#FF9F1C',
  },
  {
    icon: Zap,
    title: 'Real-Time Alerts',
    description: 'Never miss a trading opportunity with instant notifications when price enters your target zones.',
    color: '#00D4FF',
  },
  {
    icon: TrendingUp,
    title: 'Multi-Timeframe',
    description: 'Analyze markets across multiple timeframes simultaneously for a complete picture of market structure.',
    color: '#FF6B6B',
  },
  {
    icon: LineChart,
    title: 'Advanced Charting',
    description: 'Professional-grade charts with custom indicators designed specifically for the 4Color methodology.',
    color: '#FFD700',
  },
  {
    icon: Layers,
    title: 'Strategy Builder',
    description: 'Create, backtest, and automate custom trading strategies using our intuitive visual builder.',
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
            Everything You Need to{' '}
            <span className={styles.gradient}>Trade Smarter</span>
          </h2>
          <p className={styles.subtitle}>
            Our comprehensive suite of tools gives you the edge you need to succeed in today's fast-moving markets.
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

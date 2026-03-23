import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, TrendingUp, Shield, Zap } from 'lucide-react';
import styles from './HowItWorks.module.scss';

// ---------- Color‑dot helper ------------------------------------------------
// Replaces raw emoji circles with styled CSS dots that have radial gradients
// and glow effects — looks much more polished.

const COLORS = {
  red:    '#FF6B6B',
  green:  '#00F5A0',
  blue:   '#3A86FF',
  yellow: '#FFD700',
};

const ColorDot = ({ color, size = 14, style: extra }) => (
  <span
    className={styles.colorDot}
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      minWidth: size,
      borderRadius: '50%',
      background: `radial-gradient(circle at 35% 35%, ${color}ee, ${color}88)`,
      boxShadow: `0 0 6px ${color}55, inset 0 -2px 4px ${color}33`,
      verticalAlign: 'middle',
      marginRight: 2,
      ...extra,
    }}
  />
);

// Map single‑character token → color value
const EMOJI_MAP = {
  '🔴': COLORS.red,
  '🟢': COLORS.green,
  '🔵': COLORS.blue,
  '🟡': COLORS.yellow,
};

/** Parse a "candles" string like '🟢🔵🔴🟡' into React nodes. */
const renderCandles = (str) => {
  if (!str) return null;
  const tokens = [...str]; // works with emoji too
  return tokens.map((ch, i) => {
    const c = EMOJI_MAP[ch];
    if (c) return <ColorDot key={i} color={c} size={16} />;
    if (ch === '→') return <span key={i} style={{ margin: '0 2px', opacity: 0.4, fontSize: 10 }}>→</span>;
    return <span key={i}>{ch}</span>;
  });
};

/** Render a labeled dot + text, e.g. a red dot followed by "Red candles…" */
const DotLabel = ({ color, children }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
    <ColorDot color={color} size={12} />
    {children}
  </span>
);

// 4-Color Candle Code
const candleColors = [
  {
    color: COLORS.red,
    bg: 'rgba(255,107,107,0.12)',
    border: 'rgba(255,107,107,0.35)',
    icon: <TrendingDown size={22} color={COLORS.red} />,
    name: 'RED — Active Selling Pressure',
    meaning: 'Bearish Pressure',
    tells: 'Sellers are aggressive. Price is being pushed down decisively. Often appears after breakdowns or distribution traps.',
    rule: 'Many Reds → Sellers control market',
    ruleIcon: <ColorDot color={COLORS.red} size={12} />,
  },
  {
    color: COLORS.green,
    bg: 'rgba(0,245,160,0.10)',
    border: 'rgba(0,245,160,0.35)',
    icon: <TrendingUp size={22} color={COLORS.green} />,
    name: 'GREEN — Active Buying Pressure',
    meaning: 'Bullish Pressure',
    tells: 'Buyers are stepping in fast. Price is being pushed, not dragged. Momentum is genuinely upward.',
    rule: 'Many Greens → Buyers control market',
    ruleIcon: <ColorDot color={COLORS.green} size={12} />,
  },
  {
    color: COLORS.blue,
    bg: 'rgba(58,134,255,0.10)',
    border: 'rgba(58,134,255,0.35)',
    icon: <Shield size={22} color={COLORS.blue} />,
    name: 'BLUE — Accumulation / Resistance Test',
    meaning: 'Accumulation Zone',
    tells: 'Price is entering a previously controlled area. Common behaviors: slowing down, rejection, short accumulation before expansion.',
    rule: 'Repeated Blues → Accumulation building',
    ruleIcon: <ColorDot color={COLORS.blue} size={12} />,
  },
  {
    color: COLORS.yellow,
    bg: 'rgba(255,215,0,0.10)',
    border: 'rgba(255,215,0,0.35)',
    icon: <Zap size={22} color={COLORS.yellow} />,
    name: 'YELLOW — Liquidity Sweep / Transition',
    meaning: 'Liquidity Event',
    tells: 'Market grabbing stops or shifting direction. False breaks are common. Often the start of a reaction or reversal.',
    rule: 'Yellow spikes → Liquidity events',
    ruleIcon: <ColorDot color={COLORS.yellow} size={12} />,
  },
];

// Timeline narrative from DOCX
const timeline = [
  { time: '12:30–13:00', phase: 'Distribution / Selling Pressure', candles: '🟡🔴🔴🔴', sentiment: 'Bearish', description: 'Sellers dominate. Yellow liquidity sweep followed by strong red selling pressure. Market trending down.' },
  { time: '13:00–13:30', phase: 'Rebalancing Phase', candles: '🟢🔵🔴🟡', sentiment: 'Mixed', description: 'Mixed colors — market cooling down. No clear direction. Both buyers and sellers testing the zone.' },
  { time: '13:30–14:00', phase: 'Inventory Rebalancing', candles: '🔵🟢🟡🔴', sentiment: 'Neutral', description: 'Buyers absorbing sellers. Market consolidating. Smart money accumulating while retail is confused.' },
  { time: '14:00–14:47', phase: 'Early Demand Emergence', candles: '🟢🟡🔵🔴', sentiment: 'Cautious', description: 'Demand appears but not confirmed. Mixed sequence — demand is not strong enough to break structure yet.' },
  { time: '14:48–15:14', phase: 'Accumulation Zone', candles: '🔵🔵🔵🔵', sentiment: 'Bullish Setup', description: 'Blue dominant — Smart money building position. This is classic accumulation behavior. Price moves sideways while buyers absorb supply.' },
  { time: '15:15–15:17', phase: 'Liquidity Sweep', candles: '🔴⬇️', sentiment: 'Stop Hunt', description: 'Red spike down — stop-loss orders triggered below the range. This is the liquidity grab before the move.' },
  { time: '15:18–15:21', phase: 'Structure Shift', candles: '🔵🟢', sentiment: 'Bullish Signal', description: 'Blue followed by Green — buyers step in after the sweep. Internal structure shifting from bearish to bullish.' },
  { time: '15:22–15:34', phase: 'Pullback Confirmation', candles: '🔵🔴🔵', sentiment: 'Higher Low', description: 'Small red pullback then blue support — a Higher Low is forming. This confirms the new bullish structure.' },
  { time: '15:35–15:37', phase: 'Expansion Begins', candles: '🟢🟢🟢', sentiment: 'Bullish Expansion', description: 'Strong green sequence — market enters expansion mode. Buyers are in full control.' },
  { time: '15:38–15:41', phase: 'Breakout — Bullish FVG', candles: '🟢💥', sentiment: 'Confirmed Breakout', description: 'Strong green impulse creates a Bullish Fair Value Gap. The CFE sequence completes: Accumulation → Liquidity Sweep → Structure Shift → Buyer Control → Expansion.' },
];

// CFE Sequence steps
const cfeSteps = [
  { label: 'Accumulation', color: COLORS.blue, icon: <Shield size={18} />, desc: 'Blues dominating — Smart money absorbing supply' },
  { label: 'Liquidity Sweep', color: COLORS.yellow, icon: <Zap size={18} />, desc: 'Yellow/Red spike — Stop hunts triggered' },
  { label: 'Structure Shift', color: COLORS.blue, icon: <Shield size={18} />, desc: 'Blue → Green transition confirms buyer entry' },
  { label: 'Buyer Control', color: COLORS.green, icon: <TrendingUp size={18} />, desc: 'Green dominates — Buyers now in full control' },
  { label: 'Expansion', color: COLORS.green, icon: <TrendingUp size={18} />, desc: 'Strong green impulse — Bullish FVG created' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>System Page</span>
          <h2 className={styles.title}>
            How the <span className={styles.gradient}>4-Color System</span> Works
          </h2>
          <p className={styles.subtitle}>
            Chart Narrative — a real trade timeline that shows how the 4-Color System reads market behavior
            <em> before</em> the breakout happens.
          </p>
          <blockquote className={styles.quote}>
            "The breakout wasn't the signal. It was the result."
          </blockquote>
        </motion.div>

        {/* 4-Color Candle Code */}
        <motion.div
          className={styles.candleSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.sectionHeading}>4-Color Liquidity Candle Code</h3>
          <p className={styles.candleIntro}>
            The 4-Color System™ turns complex price behavior into a readable structure. 
            <strong> Price shows <em>where</em>. 4-Color shows <em>who</em>.</strong>
          </p>
          <div className={styles.candleGrid}>
            {candleColors.map((c, i) => (
              <motion.div
                key={i}
                className={styles.candleCard}
                style={{ borderColor: c.border, background: c.bg }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className={styles.candleEmoji}>{c.icon}</div>
                <h4 className={styles.candleName} style={{ color: c.color }}>{c.name}</h4>
                <p className={styles.candleMeaning}>{c.meaning}</p>
                <p className={styles.candleTells}>{c.tells}</p>
                <div className={styles.candleRule} style={{ borderLeftColor: c.color }}>
                  {c.rule}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beginner Rules */}
        <motion.div
          className={styles.beginnerRules}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.sectionHeading}>Simple Rules for Beginners</h3>
          <div className={styles.rulesGrid}>
            {candleColors.map((c, i) => (
              <div key={i} className={styles.ruleItem} style={{ borderColor: c.border }}>
                <span className={styles.ruleEmoji}>{c.ruleIcon}</span>
                <span className={styles.ruleText} style={{ color: c.color }}>{c.rule}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Narrative */}
        <div className={styles.timelineSection}>
          <h3 className={styles.sectionHeading}>Chart Narrative — Real Session Timeline</h3>
          <p className={styles.timelineIntro}>
            Here's how the 4-Color System reads a single trading session from start to breakout:
          </p>
          <div className={styles.timeline}>
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <div className={styles.timelineTime}>{entry.time}</div>
                <div className={styles.timelineConnector}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineLine} />
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.timelineCandles}>{renderCandles(entry.candles)}</span>
                    <span className={styles.timelineSentiment}
                      style={{
                        color: entry.sentiment.includes('Bullish') ? '#00F5A0'
                          : entry.sentiment.includes('Bearish') ? '#FF6B6B'
                          : entry.sentiment.includes('Stop') ? '#FFD700'
                          : 'rgba(255,255,255,0.7)'
                      }}
                    >{entry.sentiment}</span>
                  </div>
                  <h4 className={styles.timelinePhase}>{entry.phase}</h4>
                  <p className={styles.timelineDesc}>{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CFE Sequence */}
        <motion.div
          className={styles.cfeSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <h3 className={styles.sectionHeading}>CFE Sequence</h3>
          <p className={styles.cfeIntro}>The complete cycle from accumulation to expansion:</p>
          <div className={styles.cfeFlow}>
            {cfeSteps.map((step, i) => (
              <div key={i} className={styles.cfeStep}>
                <motion.div
                  className={styles.cfeBox}
                  style={{ borderColor: step.color, background: `${step.color}15` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className={styles.cfeEmoji}><ColorDot color={step.color} size={20} />{step.icon}</div>
                  <div className={styles.cfeLabel} style={{ color: step.color }}>{step.label}</div>
                  <div className={styles.cfeDesc}>{step.desc}</div>
                </motion.div>
                {i < cfeSteps.length - 1 && (
                  <div className={styles.cfeArrow}>
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Structure Rule */}
        <motion.div
          className={styles.keyRule}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.sectionHeading}>The Key Structure Rule</h3>
          <div className={styles.keyRuleGrid}>
            <div className={styles.keyRuleCard}>
              <h4>During Healthy Bullish Expansion:</h4>
              <p className={styles.sequenceText}>
                <DotLabel color={COLORS.green}>impulse</DotLabel>
                <span className={styles.seqArrow}>→</span>
                <DotLabel color={COLORS.red}>small pullback</DotLabel>
                <span className={styles.seqArrow}>→</span>
                <DotLabel color={COLORS.yellow}>liquidity probe</DotLabel>
                <span className={styles.seqArrow}>→</span>
                <DotLabel color={COLORS.green}>continuation</DotLabel>
              </p>
              <p>As long as price keeps forming <strong>Higher Lows</strong>, expansion is healthy.</p>
            </div>
            <div className={styles.keyRuleCard}>
              <h4>Real Expansion Looks Like:</h4>
              <p className={styles.sequenceText}>
                <ColorDot color={COLORS.blue} />→<ColorDot color={COLORS.red} />→<ColorDot color={COLORS.yellow} />→<ColorDot color={COLORS.blue} />→<ColorDot color={COLORS.red} />→<ColorDot color={COLORS.yellow} />→<ColorDot color={COLORS.blue} />
              </p>
              <p>Small pullbacks and liquidity tests <em>keep the trend alive</em>. Not straight <ColorDot color={COLORS.green} /><ColorDot color={COLORS.green} /><ColorDot color={COLORS.green} /><ColorDot color={COLORS.green} />.</p>
            </div>
            <div className={styles.keyRuleCard} style={{ borderColor: 'rgba(255,107,107,0.3)' }}>
              <h4>⚠️ Warning Signs:</h4>
              <ul>
                <li><DotLabel color={COLORS.red}>Red candles start dominating</DotLabel></li>
                <li>Higher Lows break</li>
                <li><DotLabel color={COLORS.blue}>Blue absorption appears above resistance</DotLabel></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Final Lesson */}
        <motion.div
          className={styles.lesson}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.lessonText}>
            "Price moves last. Liquidity moves first. Most traders only react to the breakout candle. 
            The 4-Color Liquidity System shows the behaviour building <em>before</em> the breakout happens."
          </p>
          <a href="#cta" className={styles.lessonCta}>
            Explore Lite — Free Access <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;

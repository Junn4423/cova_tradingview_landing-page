import { motion } from 'framer-motion';
import { FileText, AlertTriangle } from 'lucide-react';
import styles from './FixExecutionLogic.module.scss';

const FixExecutionLogic = () => {
  return (
    <section id="fix-logic" className={styles.section}>
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
            <AlertTriangle size={14} />
            Execution Framework
          </span>
          <h2 className={styles.title}>
            Fix Your{' '}
            <span className={styles.gradient}>Execution Logic</span>
          </h2>
          <p className={styles.subtitle}>
            Most traders fail not from bad strategy — but from broken execution logic.
            The 4Color System replaces guesswork with a structured visual framework.
          </p>
        </motion.div>

        {/* V4 Row: Doji2 + Stop Memorizing side-by-side */}
        <div className={styles.v4Row}>
          <motion.div
            className={styles.dojiSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/images/Doji2.jpg"
              alt="Why You Keep Losing? — Stop guessing, read order flow with 4Color Doji"
              className={styles.dojiImg}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className={styles.stopMemorizeSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className={styles.stopMemorizeTitle}>
              Stop Memorizing 20+ Candle Patterns
            </h3>
            <p className={styles.stopMemorizeSub}>
              There are <strong>only 3</strong> candle behaviors you need:
            </p>
            <div className={styles.candleBehaviors}>
              <div className={styles.behaviorCard} style={{ '--bdr': '#3A86FF' }}>
                <span className={styles.behaviorNum}>1</span>
                <h4>Compression</h4>
                <p>Market is loading. No clear winner.</p>
                <span className={styles.behaviorHint}>→ Something is coming</span>
              </div>
              <div className={styles.behaviorCard} style={{ '--bdr': '#FF6B6B' }}>
                <span className={styles.behaviorNum}>2</span>
                <h4>Rejection</h4>
                <p>Price tried… got denied.</p>
                <span className={styles.behaviorHint}>→ Someone stepped in HARD</span>
              </div>
              <div className={styles.behaviorCard} style={{ '--bdr': '#00F5A0' }}>
                <span className={styles.behaviorNum}>3</span>
                <h4>Expansion</h4>
                <p>One side takes control.</p>
                <span className={styles.behaviorHint}>→ This is where money moves</span>
              </div>
            </div>
            <div className={styles.sequenceRow}>
              <span style={{ color: '#3A86FF' }}>Compression</span>
              <span className={styles.seqArrow}>→</span>
              <span style={{ color: '#FF6B6B' }}>Rejection</span>
              <span className={styles.seqArrow}>→</span>
              <span style={{ color: '#00F5A0' }}>Expansion</span>
            </div>
            <a
              href="/docs/STOP%20MEMORIZING%2020%2B%20CANDLE%20PATTERNS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.stopMemorizeCta}
            >
              <FileText size={16} />
              Read Full Guide
            </a>
          </motion.div>
        </div>

        {/* Missing Logic Row */}
        <div className={styles.missingLogicRow}>
          <p className={styles.missingLogicQuote}>
            "Most traders don't fail from lack of strategy. They fail from broken execution logic."
          </p>
          <motion.div
            className={styles.missingLogicImgWrap}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/images/Missing-Logic.jpg"
              alt="Decades studying trader behavior — Logic still missing. The market noticed."
              className={styles.missingLogicImg}
              loading="lazy"
            />
          </motion.div>
          <p className={styles.missingLogicSub}>
            The FVG Execution Logic™ framework removes guesswork by tracking imbalance, behavior, and real-time execution context.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FixExecutionLogic;

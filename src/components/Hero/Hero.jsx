import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText } from 'lucide-react';
import HeroLeft from './HeroLeft';
import HeroRightChart from './HeroRightChart';
import styles from './Hero.module.scss';
import rightStyles from './HeroRightChart.module.scss';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const leftX  = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0,  80]);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div style={{ x: leftX }}>
            <HeroLeft />
          </motion.div>
          <motion.div style={{ x: rightX }} className={styles.rightColumn}>
            {/* FVG Execution Logic™ Notice — above chart */}
            <div className={styles.fvgNotice}>
              <h5 className={styles.fvgNoticeTitle}>FVG Execution Logic™ Notice</h5>
              <p>FVG Execution Logic™ and the 4Color Candle System are proprietary analytical frameworks developed for educational purposes.</p>
              <p>This system focuses on price behavior, liquidity flow, and execution context using a structured visual model. All analysis presented reflects this independent framework and is not derived from or affiliated with any third-party platform.</p>
              <p>Any platforms, charts, or tools shown are used solely as a medium to visualize the system. The methodology itself remains platform-independent.</p>
            </div>
            <HeroRightChart />
          </motion.div>
        </div>

        {/* V4 Row: Doji2 + Stop Memorizing side-by-side */}
        <div className={styles.v4Row}>
          <motion.div
            className={rightStyles.dojiSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/images/Doji2.jpg"
              alt="Why You Keep Losing? — Stop guessing, read order flow with 4Color Doji"
              className={rightStyles.dojiImg}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className={rightStyles.stopMemorizeSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className={rightStyles.stopMemorizeTitle}>
              Stop Memorizing 20+ Candle Patterns
            </h3>
            <p className={rightStyles.stopMemorizeSub}>
              There are <strong>only 3</strong> candle behaviors you need:
            </p>
            <div className={rightStyles.candleBehaviors}>
              <div className={rightStyles.behaviorCard} style={{ '--bdr': '#3A86FF' }}>
                <span className={rightStyles.behaviorNum}>1</span>
                <h4>Compression</h4>
                <p>Market is loading. No clear winner.</p>
                <span className={rightStyles.behaviorHint}>→ Something is coming</span>
              </div>
              <div className={rightStyles.behaviorCard} style={{ '--bdr': '#FF6B6B' }}>
                <span className={rightStyles.behaviorNum}>2</span>
                <h4>Rejection</h4>
                <p>Price tried… got denied.</p>
                <span className={rightStyles.behaviorHint}>→ Someone stepped in HARD</span>
              </div>
              <div className={rightStyles.behaviorCard} style={{ '--bdr': '#00F5A0' }}>
                <span className={rightStyles.behaviorNum}>3</span>
                <h4>Expansion</h4>
                <p>One side takes control.</p>
                <span className={rightStyles.behaviorHint}>→ This is where money moves</span>
              </div>
            </div>
            <div className={rightStyles.sequenceRow}>
              <span style={{ color: '#3A86FF' }}>Compression</span>
              <span className={rightStyles.seqArrow}>→</span>
              <span style={{ color: '#FF6B6B' }}>Rejection</span>
              <span className={rightStyles.seqArrow}>→</span>
              <span style={{ color: '#00F5A0' }}>Expansion</span>
            </div>
            <a
              href="/docs/STOP_MEMORIZING_20_CANDLE_PATTERNS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={rightStyles.stopMemorizeCta}
            >
              <FileText size={16} />
              Read Full Guide
            </a>
          </motion.div>
        </div>

        {/* Row 3: Logic Still Missing — quote → image → quote */}
        <div className={styles.missingLogicRow}>
          <p className={styles.missingLogicQuote}>
            “Most traders don’t fail from lack of strategy. They fail from broken execution logic.”
          </p>
          <motion.div
            className={styles.missingLogicImgWrap}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

export default Hero;

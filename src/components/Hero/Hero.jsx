import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroLeft from './HeroLeft';
import HeroRightChart from './HeroRightChart';
import styles from './Hero.module.scss';

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

        {/* Hero tagline */}
        <motion.div
          className={styles.heroTagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.heroTaglineText}>Stop Guessing. Read the Market.</h2>
          <h2 className={styles.heroTaglineText}>4Colors. Real Intent. This shows who's in control.</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

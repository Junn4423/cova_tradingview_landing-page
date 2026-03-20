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
          <motion.div style={{ x: rightX }}>
            <HeroRightChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

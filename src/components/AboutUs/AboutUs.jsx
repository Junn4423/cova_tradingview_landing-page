import { motion } from 'framer-motion';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section id="about-us" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            About <span className={styles.gradient}>Us</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <p>
            We build observation systems for traders who want to understand market behavior, not chase predictions.
          </p>
          <p>
            Most trading tools focus on outcomes — signals, entries, exits.
            <br />
            We focus on context: who is in control, when price is efficient or deceptive, and when not to trade.
          </p>
          <p>
            Our work is centered around <strong>FVG Execution Logic™</strong>, a structured methodology that observes real-time price behavior using locked 4Color conditions and volume context. The goal is clarity, not certainty.
          </p>
          <p>
            We don't sell signals.
            <br />
            We don't promise performance.
            <br />
            We don't simplify markets into false confidence.
          </p>
          <p>Instead, we design tools and Hubs that help traders:</p>
          <ul className={styles.list}>
            <li>Read execution conditions</li>
            <li>Identify structural traps</li>
            <li>Reduce reactive decision-making</li>
          </ul>
          <p>
            This platform is built for discretionary traders who value process over prediction and discipline over noise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import styles from './FAQ.module.scss';

const faqs = [
  {
    q: 'What is the 4Color System™?',
    a: 'The 4Color System™ is a proprietary price behavior reading methodology that uses 4 distinct candle colors — Red, Green, Blue, and Yellow — to identify who is in control of the market at any given moment. It reads liquidity states, not just direction.',
  },
  {
    q: 'What is FVG (Fair Value Gap)?',
    a: 'A Fair Value Gap (FVG) is an imbalance left in price action when the market moves so fast that not all orders are filled. The 4Color System™ tracks these gaps across their full lifecycle — from creation to validation to fill — helping you understand when price is likely to react.',
  },
  {
    q: 'Does the Lite version give BUY/SELL signals?',
    a: 'No. The Lite version is strictly an observation tool. It shows you who controls the market using 4Color candle logic — Red for selling pressure, Green for buying pressure, Blue for accumulation/resistance, and Yellow for liquidity sweeps. There are no BUY or SELL signals — that is by design.',
  },
  {
    q: 'Is this suitable for beginners?',
    a: 'Yes. The Lite version is specifically designed to help beginners stop guessing and start reading context. The self-paced education modules walk you through each concept step by step, from understanding the 4 colors to applying the CFE Sequence in real conditions.',
  },
  {
    q: 'What products are available?',
    a: 'Currently, the Lite version is publicly available for free on TradingView. Pro, Elite, and Hubs are in final testing (coming soon). Lite provides the foundation — the other tiers unlock deeper layers of analysis including FVG tracking, pressure confirmation, and the FX Terminal Hub.',
  },
  {
    q: 'How do I install the Lite indicator?',
    a: 'The Lite indicator is available directly on TradingView at no cost. Click "Access Lite — Free" to visit the TradingView script page. You can add it to any chart with a free TradingView account.',
  },
  {
    q: 'What is the difference between Lite, Pro, and Elite?',
    a: 'Lite answers "What\'s going on?" — it shows market context through 4Color candle logic. Pro answers "Is this pressure real?" — it adds buying vs selling pressure confirmation and absorption detection. Elite answers "Is this the right moment?" — it adds FVG imbalance detection, lifecycle tracking, and the full FVG Execution Logic™ (CFE).',
  },
  {
    q: 'Is there a free trial for Pro or Elite?',
    a: 'Pro and Elite are currently in testing phase. You can join the Pro waitlist or apply for Elite access through the Products section. The Lite version remains free permanently.',
  },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
    >
      <button
        className={`${styles.question} ${open ? styles.open : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={styles.chevron}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.answerInner}>{faq.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => (
  <section id="faq" className={styles.section}>
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.label}>
          <HelpCircle size={14} /> FAQ
        </span>
        <h2 className={styles.title}>
          Frequently Asked <span className={styles.gradient}>Questions</span>
        </h2>
        <p className={styles.subtitle}>
          Everything you need to know about the 4Color System™ and how it works.
        </p>
      </motion.div>

      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;

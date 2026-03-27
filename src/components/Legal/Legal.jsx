import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import styles from './Legal.module.scss';

const sections = [
  {
    title: 'Risk Disclosure',
    content: [
      'Trading involves substantial risk of loss and is not suitable for all investors. The content, tools, and signals provided on this website are for educational and informational purposes only and do not constitute financial advice, recommendations, or a solicitation to buy or sell any financial instruments.',
      'Past performance is not indicative of future results. Users are responsible for their own trading decisions. Do not trade with money you cannot afford to lose.',
      'The 4Color System™ and all associated indicators are tools for market analysis and education only. They do not guarantee profits or protect against losses.',
    ],
  },
  {
    title: 'Terms of Service',
    content: [
      'By accessing or using 4Color System™ products and services, you agree to be bound by these terms. All content, indicators, and educational materials are the intellectual property of 4Color System™.',
      'You may use our indicators and educational materials for personal use only. Redistribution, resale, or commercial use of 4Color System™ materials without written permission is strictly prohibited.',
      'We reserve the right to modify, suspend, or discontinue any part of our service at any time. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.',
    ],
  },
  {
    title: 'Privacy Policy',
    content: [
      'We respect your privacy and are committed to protecting your personal data. Information collected through our website is used solely to provide and improve our services.',
      'We do not sell, trade, or transfer your personal information to third parties without your consent, except where required by law or as necessary to provide our services.',
      'Our website may use cookies and similar tracking technologies to enhance your experience. You may disable cookies in your browser settings, though this may affect functionality.',
      'By using our services, you consent to the collection and use of information in accordance with this policy.',
    ],
  },
  {
    title: 'Platform & Trademark Disclaimer',
    content: [
      'All trademarks, company names, logos, and platform references are the property of their respective owners. We do not claim any affiliation, partnership, or endorsement with any third-party platforms, brokers, or service providers.',
      'Charts, data, and visual tools displayed are used solely for analysis illustration. Accuracy and completeness of data are not guaranteed.',
      'By using this website, you agree that you are fully responsible for your own trading decisions and outcomes.',
    ],
  },
];

const Legal = () => (
  <section id="legal" className={styles.section}>
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.label}>
          <Shield size={14} /> Legal
        </span>
        <h2 className={styles.title}>
          Legal <span className={styles.gradient}>Terms</span>
        </h2>
        <p className={styles.subtitle}>
          Please read these terms carefully before using 4Color System™ products and services.
        </p>
      </motion.div>

      <div className={styles.content}>
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className={styles.sectionTitle}>{sec.title}</h3>
            {sec.content.map((para, j) => (
              <p key={j} className={styles.para}>{para}</p>
            ))}
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.notice}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4 }}
      >
        <p>These terms were last updated on March 15, 2026. For questions about these terms, please contact us at <a href="mailto:4colorsystem@gmail.com">4colorsystem@gmail.com</a>.</p>
      </motion.div>
    </div>
  </section>
);

export default Legal;

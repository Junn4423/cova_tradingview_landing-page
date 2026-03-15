import { motion } from 'framer-motion';
import { Mail, MapPin, Youtube, MessageCircle, ExternalLink } from 'lucide-react';
import styles from './Contact.module.scss';

const contactItems = [
  {
    icon: Mail,
    label: 'Email Support',
    value: 'support@4colorsystem.com',
    href: 'mailto:support@4colorsystem.com',
    color: '#3A86FF',
  },
  {
    icon: Youtube,
    label: 'YouTube Demo',
    value: 'Watch Demo on YouTube',
    href: 'https://www.youtube.com/watch?v=9M93_6S9TaQ',
    color: '#FF6B6B',
    external: true,
  },
  {
    icon: MessageCircle,
    label: 'Community',
    value: 'Join our Community',
    href: '#',
    color: '#7B2CBF',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Singapore',
    href: null,
    color: '#00F5A0',
  },
];

const Contact = () => (
  <section id="contact" className={styles.section}>
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.label}>Contact</span>
        <h2 className={styles.title}>
          Get in <span className={styles.gradient}>Touch</span>
        </h2>
        <p className={styles.subtitle}>
          Have questions about the 4Color System™? Reach out — we're here to help.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {contactItems.map((item, i) => (
          <motion.div
            key={i}
            className={styles.card}
            style={{ borderColor: item.color + '30' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className={styles.iconWrap} style={{ background: item.color + '15', color: item.color }}>
              <item.icon size={22} />
            </div>
            <div className={styles.info}>
              <span className={styles.infoLabel}>{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  className={styles.infoValue}
                  style={{ color: item.color }}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.value}
                  {item.external && <ExternalLink size={13} />}
                </a>
              ) : (
                <span className={styles.infoValue} style={{ color: item.color }}>{item.value}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.disclaimer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4 }}
      >
        <p>
          <strong>Disclaimer:</strong> Trading involves substantial risk of loss and is not suitable 
          for all investors. The content, tools, and signals provided on this website are for 
          educational and informational purposes only and do not constitute financial advice, 
          recommendations, or a solicitation to buy or sell any financial instruments. Past 
          performance is not indicative of future results. Users are responsible for their own 
          trading decisions.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Contact;

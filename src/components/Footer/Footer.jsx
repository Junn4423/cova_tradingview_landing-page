import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import styles from './Footer.module.scss';


const footerLinks = {
  products: [
    { name: 'Lite (Free)', href: 'https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/' },
    { name: 'Pro',         href: '#cta' },
    { name: 'Elite',       href: '#cta' },
    { name: 'Hubs',        href: '#cta' },
  ],
  education: [
    { name: 'Education Hub',   href: '#education' },
    { name: 'How It Works',    href: '#how-it-works' },
    { name: 'Youtube Demo',    href: 'https://www.youtube.com/watch?v=9M93_6S9TaQ' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Contact',  href: '#contact' },
    { name: 'FAQ',      href: '#faq' },
  ],
  legal: [
    { name: 'Privacy Policy',   href: '#legal' },
    { name: 'Terms of Service', href: '#legal' },
    { name: 'Risk Disclosure',  href: '#legal' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Column */}
          <motion.div
            className={styles.brandColumn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className={styles.logo}>
              <div className={styles.logoIcon}>
                <img
                  src="/images/logo-4colorsystem.png"
                  alt="4Color System™"
                  className={styles.logoImg}
                  height={36}
                />
              </div>
              <span className={`${styles.logoText} notranslate`}>4Color System™</span>
            </a>

            <p className={styles.brandDescription}>
              The revolutionary trading methodology that helps you identify high-probability 
              setups with our proprietary color zone system.
            </p>

            <div className={styles.contactInfo}>
              <a href="mailto:support@4colorsystem.com" className={styles.contactItem}>
                <Mail size={18} />
                <span className="notranslate">support@4colorsystem.com</span>
              </a>
              <a href="#" className={styles.contactItem}>
                <MapPin size={18} />
                <span>Singapore</span>
              </a>
            </div>

            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}

                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className={styles.linksGrid}>
            {Object.entries(footerLinks).map(([category, links], colIndex) => (
              <motion.div
                key={category}
                className={styles.linksColumn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 + colIndex * 0.1, duration: 0.6 }}
              >
                <h4 className={styles.columnTitle}>
                  {category === 'products' ? 'Products'
                    : category === 'education' ? 'Education'
                    : category === 'company' ? 'Company'
                    : 'Legal'}
                </h4>
                <ul className={styles.linksList}>
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        className={styles.link}
                        onClick={undefined}
                        whileHover={{ x: 4 }}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight size={14} className={styles.linkArrow} />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          className={styles.newsletter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.newsletterContent}>
            <h4 className={styles.newsletterTitle}>Get Trading Insights</h4>
            <p className={styles.newsletterDescription}>
              Join 50,000+ traders receiving weekly market analysis and trading tips.
            </p>
          </div>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <motion.button
              type="submit"
              className={styles.newsletterButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} <span className="notranslate">4Color System</span>. All rights reserved.
          </p>
          <p className={styles.poweredBy}>
            Powered by{' '}
            <a
              href="https://covasol.com.vn"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.poweredByLink} notranslate`}
            >
              covasol.com.vn
            </a>
          </p>
          <div className={styles.disclaimerFull}>
            <p><strong>Disclaimer:</strong> Trading involves substantial risk of loss and is not suitable for all investors. The content, tools, and signals provided on this website are for educational and informational purposes only and do not constitute financial advice, recommendations, or a solicitation to buy or sell any financial instruments. Past performance is not indicative of future results. Users are responsible for their own trading decisions.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
import { useToast } from '../Toast/Toast';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#cta' },
    { name: 'Education', href: '#education' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'API Access', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Video Tutorials', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Trading Glossary', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Risk Disclosure', href: '#' },
    { name: 'Cookie Policy', href: '#' },
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
  const { showToast } = useToast();

  const handleDemoClick = (e) => {
    e.preventDefault();
    showToast('Đây là bản demo, chức năng này chưa hoạt động', 'info');
  };

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
                <span className={styles.logoSquare} style={{ background: '#3A86FF' }} />
                <span className={styles.logoSquare} style={{ background: '#00F5A0' }} />
                <span className={styles.logoSquare} style={{ background: '#FF6B6B' }} />
                <span className={styles.logoSquare} style={{ background: '#FFD700' }} />
              </div>
              <span className={`${styles.logoText} notranslate`}>4Color System</span>
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
                  onClick={handleDemoClick}
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
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h4>
                <ul className={styles.linksList}>
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        className={styles.link}
                        onClick={link.href === '#' ? handleDemoClick : undefined}
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
          <form className={styles.newsletterForm} onSubmit={handleDemoClick}>
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
          <p className={styles.disclaimer}>
            Trading involves substantial risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

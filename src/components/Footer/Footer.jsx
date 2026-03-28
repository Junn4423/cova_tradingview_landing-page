import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight,
  Youtube,
  Facebook
} from 'lucide-react';
import styles from './Footer.module.scss';

const footerLinks = {
  products: [
    { name: 'Lite (Free)', href: 'https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/' },
    { name: 'Pro (Under Development)',   href: '#cta' },
    { name: 'Elite (Under Development)', href: '#cta' },
    { name: 'Hubs (Under Development)',  href: '#cta' },
  ],
  education: [
    { name: 'Education Hub',   href: '#education' },
    { name: 'How It Works',    href: '#how-it-works' },
    { name: 'Youtube Demo',    href: 'https://www.youtube.com/watch?v=9M93_6S9TaQ' },
  ],
  company: [
    { name: 'About Us', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=4colorsystem@gmail.com&su=About%204Color%20System&body=Hi%204Color%20System%20Team%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%204Color%20System%20and%20your%20team.%0A%0AThank%20you!' },
    { name: 'FAQ',      href: '#faq' },
  ],
  legal: [
    { name: 'Privacy Policy',   href: '#legal' },
    { name: 'Terms of Service', href: '#legal' },
    { name: 'Risk Disclosure',  href: '#legal' },
  ],
};

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/watch?v=9M93_6S9TaQ', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/people/Fvg-Execution-Logic/61576892860617/', label: 'Facebook' },
  { icon: Mail, href: 'mailto:4colorsystem@gmail.com', label: 'Gmail' },
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
                  src="/images/logo-cfe.jpg"
                  alt="4Color System™ — CFE"
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
              <a href="mailto:4colorsystem@gmail.com" className={styles.contactItem}>
                <Mail size={18} />
                <span className="notranslate">4colorsystem@gmail.com</span>
              </a>
              <a href="#" className={styles.contactItem}>
                <MapPin size={18} />
                <span>Toronto, Canada</span>
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

        {/* Follow Us */}
        <motion.div
          className={styles.newsletter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.newsletterContent}>
            <h4 className={styles.newsletterTitle}>Follow Us</h4>
            <p className={styles.newsletterDescription}>
              Stay connected for the latest market insights and system updates.
            </p>
          </div>
          <div className={styles.followLinks}>
            <a
              href="https://www.youtube.com/watch?v=9M93_6S9TaQ"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followBtn}
            >
              <Youtube size={20} />
              <span>Follow us on YouTube</span>
            </a>
            <a
              href="https://www.facebook.com/people/Fvg-Execution-Logic/61576892860617/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followBtn}
            >
              <Facebook size={20} />
              <span>Follow us on Facebook</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} <span className="notranslate">4Color System</span>. All rights reserved.
          </p>
          <div className={styles.disclaimerFull}>
            <p><strong>Disclaimer:</strong> For educational purposes only. Not financial advice. Trading involves risk. Past performance does not guarantee future results.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

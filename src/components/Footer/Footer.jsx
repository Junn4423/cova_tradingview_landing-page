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
    { name: 'Pro',         href: 'https://form.jotform.com/260806377022050' },
    { name: 'Elite',       href: 'https://form.jotform.com/260806560917057' },
    { name: 'Hubs',        href: 'https://form.jotform.com/260806911516052' },
  ],
  education: [
    { name: 'Education Hub',   href: '#education' },
    { name: 'How It Works',    href: '#how-it-works' },
    { name: 'Youtube Demo',    href: 'https://www.youtube.com/watch?v=9M93_6S9TaQ' },
  ],
  company: [
    { name: 'About Us', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=4colorsystem@gmail.com&su=About%204Color%20System&body=Hi%204Color%20System%20Team%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%204Color%20System%20and%20your%20team.%0A%0AThank%20you!' },
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
  { icon: Twitter, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=4colorsystem@gmail.com&su=Twitter%20%2F%20Social%20Media%20Inquiry&body=Hi%204Color%20System%20Team%2C%0A%0ACould%20you%20share%20your%20official%20Twitter%20%2F%20X%20account%20link%3F%0A%0AThank%20you!', label: 'Twitter' },
  { icon: Youtube, href: 'https://www.youtube.com/watch?v=9M93_6S9TaQ', label: 'YouTube' },
  { icon: Linkedin, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=4colorsystem@gmail.com&su=LinkedIn%20Inquiry&body=Hi%204Color%20System%20Team%2C%0A%0ACould%20you%20share%20your%20official%20LinkedIn%20page%3F%0A%0AThank%20you!', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=4colorsystem@gmail.com&su=Join%204Color%20System%20Community&body=Hi%204Color%20System%20Team%2C%0A%0AI%20would%20like%20to%20join%20the%204Color%20System%20community%20%2F%20Discord.%0A%0AThank%20you!', label: 'Discord' },
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
          <form className={styles.newsletterForm} onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            const body = email ? `Hi 4Color System Team,%0A%0AI'd like to subscribe to your trading insights newsletter.%0A%0AMy email: ${encodeURIComponent(email)}%0A%0AThank you!` : `Hi 4Color System Team,%0A%0AI'd like to subscribe to your trading insights newsletter.%0A%0AThank you!`;
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=4colorsystem@gmail.com&su=Subscribe%20to%204Color%20System%20Newsletter&body=${body}`, '_blank');
          }}>
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

import CookieConsent from 'react-cookie-consent';
import styles from './CookieBanner.module.scss';

const CookieBanner = () => (
  <CookieConsent
    location="bottom"
    cookieName="4colorsystem_cookie_consent"
    expires={365}
    // Use custom button class (styled via module.scss global override not possible with CSS modules,
    // so we pass inline styles directly to the library's built-in buttons)
    buttonStyle={{
      background: 'rgba(0, 245, 160, 0.15)',
      border: '1px solid rgba(0, 245, 160, 0.45)',
      color: '#00F5A0',
      borderRadius: '10px',
      fontFamily: 'inherit',
      fontSize: '0.82rem',
      fontWeight: '700',
      padding: '0.55rem 1.4rem',
      cursor: 'pointer',
      letterSpacing: '0.03em',
      transition: 'all 0.2s',
    }}
    declineButtonStyle={{
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.12)',
      color: 'rgba(255,255,255,0.45)',
      borderRadius: '10px',
      fontFamily: 'inherit',
      fontSize: '0.82rem',
      fontWeight: '600',
      padding: '0.55rem 1.1rem',
      cursor: 'pointer',
      marginRight: '0.5rem',
    }}
    buttonText="Accept"
    enableDeclineButton
    declineButtonText="Decline"
    style={{
      background: 'rgba(11, 19, 43, 0.97)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '1rem 2rem',
      alignItems: 'center',
      gap: '1rem',
      zIndex: 9999,
    }}
    contentStyle={{
      flex: '1',
      margin: '0',
    }}
  >
    <div className={styles.content}>
      <span className={styles.icon}>🍪</span>
      <div>
        <strong className={styles.title}>Cookies &amp; Privacy</strong>
        <p className={styles.text}>
          This website uses cookies to enhance your experience and analyze site traffic.
          By clicking <strong>Accept</strong>, you consent to our use of cookies in accordance with our{' '}
          <a href="#legal" className={styles.link}>Cookie &amp; Privacy Policy</a>.
          You may decline non-essential cookies.
        </p>
      </div>
    </div>
  </CookieConsent>
);

export default CookieBanner;

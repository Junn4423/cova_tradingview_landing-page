import CookieConsent from 'react-cookie-consent';
import styles from './CookieBanner.module.scss';

const CookieBanner = () => (
  <CookieConsent
    location="bottom"
    cookieName="4colorsystem_cookie_consent"
    expires={365}
    containerClasses={styles.bannerRoot}
    contentClasses={styles.bannerContent}
    buttonWrapperClasses={styles.buttonWrap}
    buttonClasses={styles.acceptBtn}
    declineButtonClasses={styles.declineBtn}
    buttonText="Accept"
    enableDeclineButton
    declineButtonText="Decline"
  >
    <div className={styles.content}>
      <span className={styles.icon}>🍪</span>
      <div className={styles.contentBody}>
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

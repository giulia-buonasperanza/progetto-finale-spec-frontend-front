
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerIcons} aria-hidden="true">
        <i className="bi bi-dice-5"></i>
        <i className="bi bi-puzzle"></i>
        <i className="bi bi-stars"></i>
      </div>

      <p className={styles.footerTitle}>
        Ogni partita inizia da una scelta.
      </p>

      <p className={styles.footerText}>
        Scopri, confronta e trova il tuo prossimo gioco preferito.
      </p>

      <div className={styles.divider}></div>

      <p className={styles.copyright}>
        © 2026 BoardGame Compare
      </p>
    </footer>
  );
}

export default Footer;

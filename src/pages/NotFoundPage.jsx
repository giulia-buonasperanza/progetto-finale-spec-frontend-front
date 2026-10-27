
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <section className={styles.notFound}>
      <p className={styles.code}>404</p>

      <h1>Ops! Gioco non trovato</h1>

      <p className={styles.message}>
        Sembra che questa pagina si sia persa tra le caselle del tabellone.
      </p>

      <Link to="/" className={styles.homeLink}>
        ← Torna al catalogo
      </Link>
    </section>
  );
}

export default NotFoundPage;

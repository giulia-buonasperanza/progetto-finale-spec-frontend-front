
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        BoardGame Compare
      </NavLink>

      <nav className={styles.nav}>
        <NavLink to="/" end>
          Catalogo
        </NavLink>

        <NavLink to="/compare">
          Comparatore
        </NavLink>

        <NavLink to="/favorites">
          Preferiti
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

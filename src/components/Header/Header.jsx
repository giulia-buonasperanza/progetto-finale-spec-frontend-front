
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
         <img src="/images/logoCompareGame.png" alt="BoardGame Compare logo" />
      </NavLink>

      <nav className={styles.nav}>
       <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Catalogo
        </NavLink>

        <NavLink
          to="/compare"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Comparatore
        </NavLink>

       <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Preferiti
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

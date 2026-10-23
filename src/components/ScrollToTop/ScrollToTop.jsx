
import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      className={styles.scrollButton}
      onClick={scrollToTop}
      aria-label="Torna all'inizio della pagina"
      title="Torna su"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;

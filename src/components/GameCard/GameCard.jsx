
import styles from "./GameCard.module.css";

function GameCard({ game }) {
  return (
    <article className={styles.card}>
      <h2>{game.title}</h2>

      <p className={styles.category}>
        {game.category}
      </p>
    </article>
  );
}

export default GameCard;


import styles from "./GameCard.module.css";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <article className={styles.card}>
      <h2>
        <Link to={`/games/${game.id}`}>
          {game.title}
        </Link>
      </h2>

      <p className={styles.category}>
        {game.category}
      </p>
    </article>
  );
}

export default GameCard;

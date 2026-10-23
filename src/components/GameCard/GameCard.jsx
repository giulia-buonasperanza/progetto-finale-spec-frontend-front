
import styles from "./GameCard.module.css";
import { Link } from "react-router-dom";
import { useFavorites } from "../../contexts/FavoritesContext";
import gameImages from "../../data/gameImages.js";

function GameCard({ game }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(game.id);

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

      <img
        src={gameImages[game.id]}
        alt={`Copertina di ${game.title}`}
        className={styles.cover}
      />


      <button
        type="button"
        onClick={() => toggleFavorite(game.id)}
        aria-pressed={favorite}
      >
        {favorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
      </button>
    </article>
  );
}

export default GameCard;

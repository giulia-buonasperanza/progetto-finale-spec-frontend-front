
import { Link } from "react-router-dom";
import useGames from "../hooks/useGames";
import { useFavorites } from "../contexts/FavoritesContext.jsx";
import GameCard from "../components/GameCard/GameCard";
import styles from "./GamesPage.module.css";


function FavoritesPage() {
  const { games, loading, error } = useGames();
  const { favorites } = useFavorites();


  if (loading) {
    return <p>Caricamento dei preferiti...</p>;
  }

  if (error) {
    return <p>Errore nel caricamento dei giochi: {error}</p>;
  }

  const favoriteGames = games.filter((game) =>
    favorites.includes(game.id)
  );

  return (
    <section>
      <h1>I MIEI GIOCHI PREFERITI</h1>

      {favoriteGames.length === 0 ? (
        <div>
          <p>Non hai ancora aggiunto giochi ai preferiti.</p>
          <Link to="/">Esplora il catalogo</Link>
        </div>
      ) : (
        <div className={styles.flexContainer}>
          {favoriteGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritesPage;

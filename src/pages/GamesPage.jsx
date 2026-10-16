import GameCard from "../components/GameCard/GameCard.jsx";
import useGames from "../hooks/useGames.js"; 


function GamesPage() {
  const { games, loading, error } = useGames();

  if (loading) {
    return <h1>Caricamento in corso...</h1>;
  }

  if (error) {
    return <p>Errore: {error}</p>
  }

  return (
    <section>
      <h1>Catalogo dei giochi da tavolo</h1>

      {games.length === 0 ? (
        <p>Non ci sono giochi disponibili.</p>
      ) : (
        <div className = {styles.flexContainer}>
          {games.map((game) => (
            <GameCard key ={game.id} game={game} />
          ))}
        </div>
      )}
    </section>
  );

}
export default GamesPage;
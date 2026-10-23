import useGames from "../hooks/useGames";
import { useState, useEffect } from "react";
import GameComparison from "../components/GameComparison/GameComparison";
import useGameId from "../hooks/useGameId";
import styles from "./ComparePage.module.css"

function ComparePage() {
  const { games, loading, error } = useGames();

  const [firstGameId, setFirstGameId] = useState("");
  const [secondGameId, setSecondGameId] = useState("");

  useEffect(() => {
    if (firstGameId && firstGameId === secondGameId) {
      setSecondGameId("");
    }
  }, [firstGameId, secondGameId]);

  const {
    game: firstGame,
    loading: loadingFirstGame,
    error: errorFirstGame,
  } = useGameId(firstGameId);

  const {
    game: secondGame,
    loading: loadingSecondGame,
    error: errorSecondGame,
  } = useGameId(secondGameId);

  if (loadingFirstGame || loadingSecondGame || loading) {
    return <h1>Caricamento...</h1>;
  }

  if (errorFirstGame || errorSecondGame || error) {
    return <h1>Errore nel caricamento dei giochi, {error}</h1>;
  }


  return (
    <section>
      <div className={styles.selectionSection}>
        <h1>CONFRONTA I GIOCHI</h1>

        <p>Giochi disponibili per il confronto: {games.length}</p>


        <label htmlFor="firstGame">Primo gioco</label>

        <select
          id="firstGame"
          value={firstGameId}
          onChange={(event) => setFirstGameId(event.target.value)}
        >
          <option value="">Seleziona un gioco</option>

          {games.map((game) => (
            <option key={game.id} value={game.id}>
              {game.title}
            </option>
          ))}
        </select>

        <label htmlFor="secondGame">Secondo gioco</label>

        <select
          id="secondGame"
          value={secondGameId}
          onChange={(event) => setSecondGameId(event.target.value)}
        >
          <option value="">Seleziona un gioco</option>

          {games
            .filter((game) => String(game.id) !== firstGameId)
            .map((game) => (
              <option key={game.id} value={game.id}>
                {game.title}
              </option>
            ))}
        </select>

        {firstGame && secondGame && (
          <GameComparison
            firstGame={firstGame}
            secondGame={secondGame}
          />
        )}
      </div>
    </section>
  );
}

export default ComparePage;
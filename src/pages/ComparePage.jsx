import useGames from "../hooks/useGames";
import { useState } from "react";
import GameComparison from "../components/GameComparison/GameComparison";
import useGameId from "../hooks/useGameId";

function ComparePage() {
  const { games, loading, error } = useGames();
  const [firstGameId, setFirstGameId] = useState("");
  const [secondGameId, setSecondGameId] = useState("");

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
      <h1>Confronta i giochi da tavolo</h1>

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


      <div>
        <h2>Primo gioco selezionato</h2>
        {firstGame ? (
          <p>{firstGame.title}</p>
        ) : (
          <p>Seleziona il primo gioco.</p>
        )}
      </div>

      <div>
        <h2>Secondo gioco selezionato</h2>
        {secondGame ? (
          <p>{secondGame.title}</p>
        ) : (
          <p>Seleziona il secondo gioco.</p>
        )}
      </div>

      {firstGame && secondGame && (
        <GameComparison
          firstGame={firstGame}
          secondGame={secondGame}
        />
      )}
    </section>
  );
}

export default ComparePage;
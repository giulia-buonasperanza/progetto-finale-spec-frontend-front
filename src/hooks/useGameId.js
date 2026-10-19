
import { useEffect, useState } from "react";

function useGameId(id) {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setGame(null);
      setLoading(false);
      setError(null);
      return;
    }

    async function fetchGame() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:3001/games/${id}`
        );

        if (!response.ok) {
          throw new Error("Errore nel recupero del gioco");
        }

        const data = await response.json();
        setGame(data.game);
      } catch (error) {
        setError(error.message);
        setGame(null);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [id]);

  return { game, loading, error };
}

export default useGameId;

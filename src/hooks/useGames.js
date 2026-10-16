
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/games";

function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Errore nel recupero dei giochi");
        }

        const data = await response.json();
        setGames(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  return { games, loading, error };
}

export default useGames;

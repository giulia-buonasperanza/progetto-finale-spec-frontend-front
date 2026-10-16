import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


function GameDetailPage() {

  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(`http://localhost:3001/games/${id}`);

        if (!response.ok) {
          throw new Error("Errore nel recupero del gioco");
        }

        const data = await response.json();
        setGame(data.game);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [id]);

  if (loading) return <p>Caricamento del gioco...</p>;

  if (error) return <p>Errore: {error}</p>;

  if (!game) return <p>Gioco non trovato.</p>;

  return (
  <section>
    <Link to="/">← Torna al catalogo</Link>
    <h1>{game.title}</h1>

    <p><strong>Categoria:</strong> {game.category}</p>
    <p><strong>Descrizione:</strong> {game.description}</p>
    <p><strong>Numero minimo di giocatori:</strong> {game.minPlayers}</p>
    <p><strong>Numero massimo di giocatori:</strong> {game.maxPlayers}</p>
    <p><strong>Durata:</strong> {game.playTime} minuti</p>
    <p><strong>Età minima:</strong> {game.minAge} anni</p>
    <p><strong>Complessità:</strong> {game.complexity}</p>
    <p><strong>Prezzo:</strong> {game.price.toFixed(2)} €</p>
    <p><strong>Anno di pubblicazione:</strong> {game.yearPublished}</p> 
  </section>)
}

export default GameDetailPage;
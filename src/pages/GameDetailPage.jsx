import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGameId from "../hooks/useGameId";
import { useFavorites } from "../contexts/FavoritesContext";
import gameImages from "../data/gameImages";

function GameDetailPage() {

  const { id } = useParams();
  const { game, loading, error } = useGameId(id);
  const { toggleFavorite, isFavorite } = useFavorites();


  if (loading) return <p>Caricamento del gioco...</p>;

  if (error) return <p>Errore: {error}</p>;

  if (!game) return <p>Gioco non trovato.</p>;

  const favorite = isFavorite(game.id);

  return (
    <section>
      <Link to="/">← Torna al catalogo</Link>
      <h1>{game.title}</h1>

      <img
        src={gameImages[game.id]}
        alt={`Copertina di ${game.title}`}
       
      />

      <p><strong>Categoria:</strong> {game.category}</p>
      <p><strong>Descrizione:</strong> {game.description}</p>
      <p><strong>Numero minimo di giocatori:</strong> {game.minPlayers}</p>
      <p><strong>Numero massimo di giocatori:</strong> {game.maxPlayers}</p>
      <p><strong>Durata:</strong> {game.playTime} minuti</p>
      <p><strong>Età minima:</strong> {game.minAge} anni</p>
      <p><strong>Complessità:</strong> {game.complexity}</p>
      <p><strong>Prezzo:</strong> {game.price.toFixed(2)} €</p>
      <p><strong>Anno di pubblicazione:</strong> {game.yearPublished}</p>

      <button
        type="button"
        onClick={() => toggleFavorite(game.id)}
        aria-pressed={favorite}
      >
        {favorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
      </button>

    </section>)
}

export default GameDetailPage;
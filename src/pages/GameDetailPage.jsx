import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useGameId from "../hooks/useGameId";


function GameDetailPage() {

  const { id } = useParams();
  const {game, loading, error} = useGameId(id);

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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGameId from "../hooks/useGameId";
import { useFavorites } from "../contexts/FavoritesContext";
import gameImages from "../data/gameImages";
import styles from "./GameDetailPage.module.css";


function GameDetailPage() {

  const { id } = useParams();
  const { game, loading, error } = useGameId(id);
  const { toggleFavorite, isFavorite } = useFavorites();


  if (loading) return <p>Caricamento del gioco...</p>;

  if (error) return <p>Errore: {error}</p>;

  if (!game) return <p>Gioco non trovato.</p>;

  const favorite = isFavorite(game.id);

  return (
    <section className={styles.detailPage}>
      <Link to="/" className={styles.backLink}>← Torna al catalogo</Link>

      <h1 className={styles.title}>{game.title}</h1>

      <div className={styles.detailLayout}>
        <div className={styles.imageContainer}>
          <img
            className={styles.cover}
            src={gameImages[game.id]}
            alt={`Copertina di ${game.title}`}

          />
        </div>

        <div className={styles.infoCard}>
          <span className={styles.category}>
            {game.category}
          </span>

          <h2>Informazioni sul gioco</h2>

          <p className={styles.description}>{game.description}</p>
          <div className={styles.infoList}>
            <p>
              <strong>Giocatori</strong>
              <span>
                {game.minPlayers}–{game.maxPlayers}
              </span>
            </p>

            <p>
              <strong>Durata</strong>
              <span>{game.playTime} minuti</span>
            </p>

            <p>
              <strong>Età minima</strong>
              <span>{game.minAge} anni</span>
            </p>

            <p>
              <strong>Complessità</strong>
              <span>{game.complexity}</span>
            </p>

            <p>
              <strong>Prezzo</strong>
              <span>{Number(game.price).toFixed(2)} €</span>
            </p>

            <p>
              <strong>Anno di pubblicazione</strong>
              <span>{game.yearPublished}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => toggleFavorite(game.id)}
            aria-pressed={favorite}
          >
            {favorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
          </button>
        </div>
      </div>
    </section>)
}

export default GameDetailPage;
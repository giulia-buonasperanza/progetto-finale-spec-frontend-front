import GameCard from "../components/GameCard/GameCard.jsx";
import useGames from "../hooks/useGames.js";
import styles from "./GamesPage.module.css";
import { useState } from "react";

function GamesPage() {
  const { games, loading, error } = useGames();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredGames = games.filter((game) => {

    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory === "" || game.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedGames = [...filteredGames].sort((a, b) => {
    const comparison = a[sortBy].localeCompare(b[sortBy], "it", {
      sensitivity: "base",
    });

    return sortOrder === "asc" ? comparison : -comparison;
  });


  if (loading) {
    return (
      <section className={styles.feedback}>
        <p className={styles.feedbackIcon}>🎲</p>
        <h1>Prepariamo il tabellone...</h1>
        <p className={styles.feedbackMessage}>
          Stiamo caricando i giochi per te.
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.feedback}>
        <p className={styles.feedbackIcon}>⚠️</p>
        <h1>Ops! Qualcosa è andato storto.</h1>
        <p className={styles.feedbackMessage}>
          Non siamo riusciti a caricare il catalogo.
          Controlla la connessione e riprova tra poco.
        </p>
        <button
          className={styles.backLink}
          onClick={() => window.location.reload()}
        >
          Riprova
        </button>
      </section>
    );
  }


  return (
    <section>
      <h1>CATALOGO</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Cerca un gioco..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.filtersContainer}>
        <div className={styles.filterGroup}>
          <label htmlFor="category">Categorie:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="">Tutte le categorie</option>
            <option value="Strategia">Strategia</option>
            <option value="Famiglia">Famiglia</option>
            <option value="Piazzamento tessere">Piazzamento tessere</option>
            <option value="Creatività">Creatività</option>
            <option value="Astratto">Astratto</option>
            <option value="Cooperativo">Cooperativo</option>
            <option value="Party game">Party game</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="sortBy">Ordina per:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="title">Titolo</option>
            <option value="category">Categoria</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="sortOrder">Ordinamento:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="asc">Crescente (A–Z)</option>
            <option value="desc">Decrescente (Z–A)</option>
          </select>
        </div>
      </div>
      {filteredGames.length === 0 ? (
        <div className={styles.feedback}>
          <p className={styles.feedbackIcon}>🔎</p>
          <h2>Nessun gioco trovato.</h2>
          <p className={styles.feedbackMessage}>
            Prova a modificare la ricerca o a selezionare un'altra categoria.
          </p>
          <button
            className={styles.backLink}
            onClick={() => {
              setSearch("");
              setSelectedCategory("");
            }}
          >
            Mostra tutti i giochi
          </button>
        </div>
      ) : (
        <div className={styles.flexContainer}>
          {sortedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </section>
  );

}
export default GamesPage;
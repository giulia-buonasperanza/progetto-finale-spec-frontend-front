import GameCard from "../components/GameCard/GameCard.jsx";
import useGames from "../hooks/useGames.js";
import styles from "./GamesPage.module.css";
import { useState } from "react";

function GamesPage() {
  const { games, loading, error } = useGames();
  
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredGames = games.filter((game) => {

    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory === "" || game.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });


  if (loading) {
    return <h1>Caricamento in corso...</h1>;
  }

  if (error) {
    return <p>Errore: {error}</p>
  }

  return (
    <section>
      <h1>Catalogo dei giochi da tavolo</h1>
      <input
        type="text"
        placeholder="Cerca un gioco..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
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

      {filteredGames.length === 0 ? (
        <p>Non ci sono giochi disponibili.</p>
      ) : (
        <div className={styles.flexContainer}>
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </section>
  );

}
export default GamesPage;
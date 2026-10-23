
import styles from "./GameComparison.module.css";
import gameImages from "../../data/gameImages";
import { Link } from "react-router-dom";

function GameComparison({ firstGame, secondGame }) {
    console.log("Primo gioco:", firstGame);
    console.log("Secondo gioco:", secondGame);

    const characteristics = [
        {
            label: "Categoria",
            firstValue: firstGame.category,
            secondValue: secondGame.category,
        },
        {
            label: "Numero di giocatori",
            firstValue: `${firstGame.minPlayers}–${firstGame.maxPlayers}`,
            secondValue: `${secondGame.minPlayers}–${secondGame.maxPlayers}`,
        },
        {
            label: "Durata",
            firstValue: `${firstGame.playTime} minuti`,
            secondValue: `${secondGame.playTime} minuti`,
        },
        {
            label: "Età minima",
            firstValue: `${firstGame.minAge} anni`,
            secondValue: `${secondGame.minAge} anni`,
        },
        {
            label: "Complessità",
            firstValue: firstGame.complexity,
            secondValue: secondGame.complexity,
        },
        {
            label: "Prezzo",
            firstValue: `${firstGame.price.toFixed(2)} €`,
            secondValue: `${secondGame.price.toFixed(2)} €`,
        },
        {
            label: "Anno di pubblicazione",
            firstValue: firstGame.yearPublished,
            secondValue: secondGame.yearPublished,
        },
    ];

    const games = [firstGame, secondGame];

    return (

        <section className={styles.comparison}>

            <div className={styles.gamesHeader}>
                {games.map((game) => (
                    <div className={styles.gameHeader} key={game.id}>
                        <Link
                            to={`/games/${game.id}`}
                            className={styles.gameLink}
                            aria-label={`Vai al dettaglio di ${game.title}`}
                        >
                            <img
                                className={styles.cover}
                                src={gameImages[game.id]}
                                alt={`Copertina di ${game.title}`}
                            />

                            <h3>{game.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>

            <div className={styles.characteristics}>
                {characteristics.map((characteristic) => (
                    <div
                        className={styles.characteristic}
                        key={characteristic.label}
                    >
                        <h4>{characteristic.label}</h4>

                        <div className={styles.values}>
                            <div className={styles.firstValue}>
                                {characteristic.firstValue}
                            </div>

                            <div className={styles.secondValue}>
                                {characteristic.secondValue}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GameComparison;

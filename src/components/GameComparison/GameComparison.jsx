
import styles from "./GameComparison.module.css";

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

    return (
        <section className={styles.comparison}>
            <h2>Confronto tra giochi</h2>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Caratteristica</th>
                        <th>{firstGame.title}</th>
                        <th>{secondGame.title}</th>
                    </tr>
                </thead>

                <tbody>
                    {characteristics.map((characteristic) => (
                        <tr key={characteristic.label}>
                            <th scope="row">{characteristic.label}</th>
                            <td>{characteristic.firstValue}</td>
                            <td>{characteristic.secondValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default GameComparison;

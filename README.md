# BoardGame Compare

Una Single Page Application sviluppata con React e JavaScript per esplorare e confrontare giochi da tavolo, consultare le loro caratteristiche e salvare i propri preferiti.

## Funzionalità

- Catalogo giochi: visualizzazione dei giochi disponibili.
- Ricerca: ricerca dei giochi tramite titolo.
- Filtri: selezione dei giochi in base alla categoria.
- Ordinamento: ordinamento alfabetico per titolo o categoria, in ordine crescente o decrescente.
- Pagina di dettaglio: visualizzazione delle caratteristiche di ogni gioco, tra cui descrizione, numero di giocatori, durata, età consigliata, complessità, prezzo e anno di pubblicazione.
- Comparatore: confronto affiancato di due giochi per valutarne le differenze.
- Preferiti: possibilità di aggiungere e rimuovere giochi dai preferiti, consultabili in una sezione dedicata.
- Persistenza: salvataggio dei preferiti in localStorage, per mantenerli anche dopo il refresh della pagina.
- Design responsive: interfaccia adattabile a diverse dimensioni dello schermo.

## Tecnologie utilizzate

- React
- JavaScript
- Vite
- React Router DOM
- CSS Modules
- Context API
- Custom Hooks
- Fetch API
- localStorage

## Struttura del progetto

Il frontend è organizzato in componenti riutilizzabili, pagine, hook personalizzati e un context per la gestione dei preferiti.

src/components/: componenti riutilizzabili dell'interfaccia.

src/pages/: pagine principali dell'applicazione.

src/hooks/: hook personalizzati per il recupero dei dati.

src/contexts/: gestione dello stato condiviso.

src/layouts/: layout principale dell'applicazione.

src/data/gameImages.js: associazione tra gli ID dei giochi e i percorsi delle copertine.

public/images/games/: immagini utilizzate nell'applicazione.

## Gestione delle immagini

Il modello Game, definito nel file types.ts del backend, include anche la proprietà image, pensata per rappresentare l'immagine associata a un gioco.

Nel frontend, le copertine vengono attualmente gestite tramite gameImages.js, che associa a ogni ID il relativo percorso dell'immagine.

Questa soluzione permette di mostrare le copertine anche nel catalogo, mantenendo invariato il comportamento del backend fornito. La proprietà image rimane disponibile nel modello dei dati per eventuali sviluppi futuri.

## File di supporto

Per rendere più chiara la struttura dei dati utilizzati dal progetto e facilitare la consultazione del materiale in fase di valutazione, ho incluso nella repository frontend anche il file types.ts e la cartella database, contenente game.json.

Questi file sono una copia di quelli presenti nel backend fornito per l'esercitazione e vengono mantenuti nel frontend a scopo documentale. La gestione delle richieste API continua a fare riferimento al backend.
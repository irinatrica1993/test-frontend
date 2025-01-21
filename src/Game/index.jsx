import React, { useState } from "react";
import { CardProfile } from "../CardProfile"; // Importa ProfileCard per visualizzare i giocatori

const Game = () => {
  // Stato per le mosse dei giocatori, il vincitore e lo stato della partita
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [winner, setWinner] = useState(null);

  // Funzione per determinare il vincitore
  const determineWinner = (choice1, choice2) => {
    if (choice1 === choice2) return "Pareggio";
    if (
      (choice1 === "Carta" && choice2 === "Sasso") ||
      (choice1 === "Sasso" && choice2 === "Forbice") ||
      (choice1 === "Forbice" && choice2 === "Carta")
    ) {
      return "Giocatore 1";
    } else {
      return "Giocatore 2";
    }
  };

  // Funzione per generare una scelta casuale
  const generateChoice = () => {
    const choices = ["Carta", "Sasso", "Forbice"];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  // Funzione per iniziare una nuova partita
  const newGame = () => {
    const player1 = generateChoice();
    const player2 = generateChoice();
    const gameWinner = determineWinner(player1, player2);

    setPlayer1Choice(player1);
    setPlayer2Choice(player2);
    setWinner(gameWinner);
  };

  return (
    <div className="game">
      <h1>Carta, Sasso, Forbice</h1>

      {/* Bottoni per generare la nuova partita */}
      <button onClick={newGame}>Nuova partita</button>

      <div className="result">
        <h2>Risultato:</h2>
        <p>
          {winner === "Pareggio" ? (
            <span>{winner}</span>
          ) : (
            <span>{winner} ha vinto!</span>
          )}
        </p>
      </div>

      {/* Visualizza le ProfileCard per i giocatori */}
      <div className="profile-cards">
        <CardProfile
          name="Giocatore 1"
          job={player1Choice}
          image="/profileImage.png"
          checked={winner === "Giocatore 1"}
        />
        <CardProfile
          name="Giocatore 2"
          job={player2Choice}
          image="/profileImage.png"
          checked={winner === "Giocatore 2"}
        />
      </div>
    </div>
  );
};

export default Game;

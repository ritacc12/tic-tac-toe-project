import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");

  // let gameTurns as an argument like this deriveActivePlayer
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      // object are reference value in JS, cannot mutate directly and need to create a copy
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            initialName="player2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;

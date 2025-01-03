import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]); // We wanna see which turns were taken by different players while playing that game

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurns(
      (prevTurns)=> {
        let currentPlayer = "X";

        if (prevTurns.length > 0 && prevTurns[0].player === "X") {
          currentPlayer = "O";
          }

        const updatedTurns = [{square : {row: rowIndex, col: colIndex}, player : activePlayer}];
        return updatedTurns;
      }
    )
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}  />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      < Log />
    </main>
  );
}

export default App;

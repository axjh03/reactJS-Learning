import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(props) {

  let gameBoard = initialGameBoard

  for(const turn of props.turns){
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((previousBoard) => {
  //       const updatedBoard = structuredClone(previousBoard); 
  //       updatedBoard[rowIndex][colIndex] = props.activePlayerSymbol; // Update the cell
  //       return updatedBoard;
  //   });
  //   props.onSelectSquare();
  
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol_Column, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => props.onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol_Column}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

import React from "react";

// We wanna see which turns were taken by different players while playing that game
function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={` ${turn.square.row}${turn.square.col} `}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;

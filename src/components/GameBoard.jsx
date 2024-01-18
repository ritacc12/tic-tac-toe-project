import React from "react";

const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <>
      <ol id="game-board">
        {/* first列出initialGameBoard每一列 , second要調整為控制狀態的“gameBoard”*/}
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            {/* 列出每一行的每個值 */}
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  {/* pass the rowIndex , colIndex to APP.jsx function handleSelectSquare */}
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    // setting the button disable once clicked
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
};

export default GameBoard;

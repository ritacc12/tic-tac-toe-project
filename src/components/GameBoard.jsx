import React from "react";
//import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn; //reference APP.jsx setGameTurns property
    const { row, col } = square; //reference APP.jsx setGameTurns square property

    gameBoard[row][col] = player;
  }

  //const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBo//ard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <>
      <ol id="game-board">
        {/* first列出initialGameBoard每一列 , 最終要調整為控制狀態的“gameBoard”*/}
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            {/* 列出每一行的每個值 */}
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  {/* pass the rowIndex , colIndex to APP.jsx function handleSelectSquare */}
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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

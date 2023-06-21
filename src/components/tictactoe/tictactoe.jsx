import React, { useEffect, useState } from "react";
import "./tictactoe.css";

const Square = ({ user, onChangeUser, x, y, disabled }) => {
  const [squareText, setSquareText] = useState("");
  const [isSquareEnabled, setIsSquareEnabled] = useState(true);
  const [squareClass, setSquareClass] = useState("");

  const handleSquareClick = () => {
    if (isSquareEnabled && !disabled) {
      if (user === 1) {
        setSquareText("X");
        setSquareClass("p1");
        setIsSquareEnabled(false);
        onChangeUser(x, y);
      } else if (user === 2) {
        setSquareText("O");
        setSquareClass("p2");
        setIsSquareEnabled(false);
        onChangeUser(x, y);
      }
    }
  };
//muda a class
  return (
    <div className={`square ${squareClass}`} onClick={handleSquareClick}>
      {squareText}
    </div>
  );
};

const TicTacToe = ({ onWin, x, y, user, userSetter, disabled }) => {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [gameOver, setGameOver] = useState(false);
  const [boardClass, setBoardClass] = useState("");

  useEffect(() => {
    setGameOver(disabled);
  }, [disabled]);

  useEffect(() => {
    checkWinner();
  }, [board]);

  const checkWinner = () => {
    let user = null;
    let newBoardClass = "";

    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== 0 &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        user = board[i][0];
        newBoardClass = user === 1 ? "p1-winner" : "p2-winner";
      }
      if (
        board[0][i] !== 0 &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        user = board[0][i];
        newBoardClass = user === 1 ? "p1-winner" : "p2-winner";
      }
    }
    if (
      board[0][0] !== 0 &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      user = board[0][0];
      newBoardClass = user === 1 ? "p1-winner" : "p2-winner";
    }
    if (
      board[0][2] !== 0 &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      user = board[0][2];
      newBoardClass = user === 1 ? "p1-winner" : "p2-winner";
    }

    let is_finished = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          is_finished = false;
        }
      }
    }

    if (user !== null) {
      onWin(user, x, y);
      setGameOver(true);
    }

    if (is_finished && user === null) {
      onWin(0, x, y);
      setGameOver(true);
    }

    setBoardClass(newBoardClass);
  };

  const handleChildStateChange = (x, y) => {
    if (!gameOver) {
      const newBoard = [...board]; //copia o tabuleiro atual para evitar mutacoes
      newBoard[x][y] = user; // guarda quem é que jogou
      setBoard(newBoard); //atualiza o tabuleiro
      userSetter((user) => (user === 1 ? 2 : 1));//troca de jogador
    }
  };

  return (
    <div className={`board ${boardClass}`}>
      <div className="line">
        <Square
          user={user}
          onChangeUser={handleChildStateChange}
          x={0}
          y={0}
          disabled={gameOver}
        />
        <Square
          user={user}
          onChangeUser={handleChildStateChange}
          x={1}
          y={0}
          disabled={gameOver}
        />
        <Square
          user={user}
          onChangeUser={handleChildStateChange}
          x={2}
          y={0}
          disabled={gameOver}
        />
      </div>
      <div className="line">
        <Square
          user={user}
          onChangeUser={handleChildStateChange}
          x={0}
          y={1}
          disabled={gameOver}
        />
        <Square
          user={user}
          onChangeUser={handleChildStateChange}
          x={1}
          y={1}
          disabled={gameOver}
        />
        <Square
          user={user}
          onChangeUser={handleChildStateChange}
          x={2}
          y={1}
          disabled={gameOver}
        />
      </div>
      <div className="line">
        <Square
          user={user}
          onChangeUser={handleChildStateChange}
          x={0}
          y={2}
          disabled={gameOver}
        />
        <Square
          user={user}
          onChangeUser={handleChildStateChange}
          x={1}
          y={2}
          disabled={gameOver}
        />
        <Square
          user={user}
          onChangeUser={handleChildStateChange}
          x={2}
          y={2}
          disabled={gameOver}
        />
      </div>
    </div>
  );
};

export default TicTacToe;

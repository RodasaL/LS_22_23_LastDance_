import "./board.css";
import TicTacToe from "../tictactoe/tictactoe";
import React, { useState } from "react";

const Board = ({ checkWinner, user, setUser, boardDisabled }) => {
  const boardRef = React.useRef(null);

  const userSetter = (user) => {
    setUser(user);
  };

  const handleTicTacToeWin = (user, x, y) => {
    checkWinner();
  };

  return (
    <div ref={boardRef} className={"board"}>
      <div className={"line"}>
        <TicTacToe
          onWin={handleTicTacToeWin}
          userSetter={userSetter}
          user={user}
          x={0}
          y={0}
          disabled={boardDisabled[0][0]}
        ></TicTacToe>
        <TicTacToe
          onWin={handleTicTacToeWin}
          userSetter={userSetter}
          user={user}
          x={1}
          y={0}
          disabled={boardDisabled[1][0]}
        ></TicTacToe>
        <TicTacToe
          onWin={handleTicTacToeWin}
          userSetter={userSetter}
          user={user}
          x={2}
          y={0}
          disabled={boardDisabled[2][0]}
        ></TicTacToe>
      </div>
      <div className={"line"}>
        <TicTacToe
          onWin={handleTicTacToeWin}
          userSetter={userSetter}
          user={user}
          x={0}
          y={1}
          disabled={boardDisabled[0][1]}
        ></TicTacToe>
        <TicTacToe
          onWin={handleTicTacToeWin}
          userSetter={userSetter}
          user={user}
          x={1}
          y={1}
          disabled={boardDisabled[1][1]}
        ></TicTacToe>
        <TicTacToe
          onWin={handleTicTacToeWin}
          userSetter={userSetter}
          user={user}
          x={2}
          y={1}
          disabled={boardDisabled[2][1]}
        ></TicTacToe>
      </div>
      <div className={"line"}>
        <TicTacToe
          onWin={handleTicTacToeWin}
          userSetter={userSetter}
          user={user}
          x={0}
          y={2}
          disabled={boardDisabled[0][2]}
        ></TicTacToe>
        <TicTacToe
          onWin={handleTicTacToeWin}
          userSetter={userSetter}
          user={user}
          x={1}
          y={2}
          disabled={boardDisabled[1][2]}
        ></TicTacToe>
        <TicTacToe
          onWin={handleTicTacToeWin}
          userSetter={userSetter}
          user={user}
          x={2}
          y={2}
          disabled={boardDisabled[2][2]}
        ></TicTacToe>
      </div>
    </div>
  );
};

export default Board;
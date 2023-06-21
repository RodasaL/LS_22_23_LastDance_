import "./App.css";
import Board from "./components/board/board";
import Menu from "./components/menu/menu";
import React, { useEffect, useState } from "react";

function App() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 2) + 1;}
    const randomN = getRandomNumber(); //Devolve 1 ou 2
  const [user, setUser] = useState(randomN);//Inicia o player 1 ou 2
  const [winner, setWinner] = useState(null);
  const [P1, setP1] = useState(0);
  const [P2, setP2] = useState(0);
  const [finished, setFinished] = useState(0);
  const [boardDisabled, setBoardDisabled] = useState([//Todos os jogos estão disponiveis para jogar
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);

  const disableAllBoard = () => { //Desativa os jogos todos
    let newBoardDisabled = boardDisabled;
    newBoardDisabled = [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ];
    setBoardDisabled(newBoardDisabled);
  };

  const enableAllBoard = () => {//Ativa os jogos todos
    let newBoardDisabled = boardDisabled;
    newBoardDisabled = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];
    setBoardDisabled(newBoardDisabled);
  };

  const resetBoard = () => {
    window.location.reload();
  };

  const checkWinner = () => {
    
    if (user === 1) {
      setP1((P1) => P1 + 1);
      setFinished((finished) => finished + 1);
    } else if (user === 2) {
      setP2((P2) => P2 + 1);
      setFinished((finished) => finished + 1);
    } else {
      setFinished((finished) => finished + 1);
    }
  };

  useEffect(() => {
    if (finished === 9) {
      if (P1 > P2) {
        setWinner(1);
      } else if (P1 < P2) {
        setWinner(2);
      } else {
        setWinner(0);
      }
      disableAllBoard();
    }
  }, [finished, P1, P2]);

  return (
    <div className="App">
      <Menu
        user={user} 
        boardDisabler={disableAllBoard}
        boardEnabler={enableAllBoard}
        setWinner={setWinner}
        winner={winner}
        reset={resetBoard}
      ></Menu>
      <Board
      resetBoard={resetBoard}
        setUser={setUser}
        user={user}
        boardDisabled={boardDisabled}
        checkWinner={checkWinner}
      ></Board>
    </div>
  );
}

export default App;

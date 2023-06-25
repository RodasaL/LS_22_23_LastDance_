import "./menu.css";
import React, { useEffect, useState } from "react";

const Menu = ({ user,winner, setWinner, boardDisabler, boardEnabler,reset }) => {
  const [timeP1, setTimeP1] = useState(90);
  const [timeP2, setTimeP2] = useState(90);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player1Disabled, setPlayer1Disabled] = useState(false);
  const [player2Disabled, setPlayer2Disabled] = useState(false);

  useEffect(() => {
    if (user === 1) {
      const timerP1 = setInterval(() => {
        setTimeP1((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timerP1);
            setWinner(2);
            boardDisabler();
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timerP1);
    } else if (user === 2) {
      const timerP2 = setInterval(() => {
        setTimeP2((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timerP2);
            setWinner(1);
            boardDisabler();
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timerP2);
    }
  }, [user]);


  useEffect(() => {
    if (winner === 2) {
      setPlayer1Disabled(false);
      setPlayer2Disabled(true);
    } else if (winner === 1) {
      setPlayer1Disabled(true);
      setPlayer2Disabled(false);
    } else if (winner === 0) {
      setPlayer1Disabled(false);
      setPlayer2Disabled(false);
    }
  }, [winner]);

  const handlePlayer1NameChange = (event) => {
    setPlayer1Name(event.target.value);
  };

  const handlePlayer2NameChange = (event) => {
    setPlayer2Name(event.target.value);
  };

  return (
    <div>
      <div className="shower">
        <div className={`user p1 ${player1Disabled ? "disabled" : ""}`}>
          {winner === 2 ? "👑" : ""} {player1Name}
          <br />
          {winner === null ? timeP1 : winner === 2 ? timeP1 : 0 }
          
        </div>
        <div className={`user p2 ${player2Disabled ? "disabled" : ""}`}>
          {player2Name} {winner === 1 ? "👑" : ""}
          <br />
          {winner === null ? timeP2 : winner === 1 ? timeP2 : 0 }
        </div>
      </div>
      <div className="label-container">
        <label className="player1-label">
        <span className="blue-x">X</span> Jogador 1:
        <input
        className="player1-input"
        type="text"
        value={player1Name}
        onChange={handlePlayer1NameChange}
        />
        </label>
      
      
        <label className="player2-label">
        <span className="red-o">O</span> Jogador 2:
        <input
        className="player2-input"
        type="text"
        value={player2Name}
        onChange={handlePlayer2NameChange}
          />
        </label>
      </div>
     
      <button onClick={reset}>Reset</button>
    
    </div>
    
  );
};

export default Menu;

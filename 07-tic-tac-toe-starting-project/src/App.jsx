import { useState } from "react"
import { Player } from "./components/Player";
import { Gameboard } from "./components/Gameboard";
import { Log } from "./components/Log";

// this is used by App & setGameTurns - looks like repeated code but you must use prev in setGameTurns so it needs to be resusable
// also define it outside App so it is not recreated on state update of App
function deriveActivePlayer(gameTurns) {
  return gameTurns.length === 0 || gameTurns[0].symbol === 'O' ? 'X' : 'O'; // default to X
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = () => deriveActivePlayer(gameTurns); // derived state

  const updateGameTurns = (x, y) => {
    setGameTurns(prev => {
      // derive this from turns bc we are not guaranteed of latest state with currentPlayer
      const currSymbol = deriveActivePlayer(prev);
      const newTurn = { symbol: currSymbol, coordinates: { x, y } };
      return [newTurn, ...prev];
    });
  }
  // console.log('turns = ', gameTurns);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='PLAYER 1' symbol='X' highlight={'X' === currentPlayer} />
          <Player initialName='PLAYER 2' symbol='O' highlight={'O' === currentPlayer} />
        </ol>
        <Gameboard gameTurns={gameTurns} updateGameTurns={updateGameTurns} currentPlayer={currentPlayer} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App

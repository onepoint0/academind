import { useState } from "react"
import { Player } from "./components/Player";

function App() {
  const [player1,setPlayer1] = useState('PLAYER 1');
  const [player2,setPlayer2] = useState('PLAYER 2');

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={player1}/>
          <Player name={player2} />
        </ol>
        GAME BOARD
      </div>
    </main>
  )
}

export default App

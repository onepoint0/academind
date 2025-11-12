import { useState } from "react"
import { Player } from "./components/Player";
import { Gameboard } from "./components/Gameboard";
import { Log } from "./components/Log";
import { GameOver } from "./components/GameOver";

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [1, 2, 3].map(n => [null, null, null]);
  if (gameTurns.length > 0) {
    gameTurns.map(t => {
      const { x, y } = t.coordinates;
      console.log('coords = ', x, y)
      gameBoard[x][y] = t.symbol;
    });
  }
  return gameBoard;
}

const winners = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6] // diagonals
];

function checkWinner(gameBoard) {
  const board = [...gameBoard[0], ...gameBoard[1], ...gameBoard[2]];
  let win = null;
  for (const [idx, winner] of winners.entries()) {
    if (board[winner[0]] && board[winner[0]] === board[winner[1]] && board[winner[1]] === board[winner[2]]) {
      win = board[winner[0]];
      console.log('got winner ', win);
      break;
    }
    if (board[winner[0]] && idx === winners.length - 1) {
      return 'drawer';
    }
  }
  return win;
}

// this is used by App & setGameTurns - looks like repeated code but you must use prev in setGameTurns so it needs to be resusable
// also define it outside App so it is not recreated on state update of App
function deriveActivePlayer(gameTurns) {
  return gameTurns.length === 0 || gameTurns[0].symbol === 'O' ? 'X' : 'O'; // default to X
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const updateGameTurns = (x, y) => {
    setGameTurns(prev => {
      // derive this from turns bc we are not guaranteed of latest state with currentPlayer
      const currSymbol = deriveActivePlayer(prev);
      const newTurn = { symbol: currSymbol, coordinates: { x, y } };
      return [newTurn, ...prev];
    });
  }

  // names are managed in Player component which we don't want to lift bc we need to use them twice in this component - just manage on save of name field
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  });
  const setPlayerName = (symbol, name) => setPlayers(prev => ({ ...prev, [symbol]: name }));

  const currentPlayer = () => deriveActivePlayer(gameTurns); // derived state

  const gameBoard = deriveGameBoard(gameTurns);

  const winningSymbol = checkWinner(gameBoard);
  const winningName = players[winningSymbol];

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={players.X} symbol='X' highlight={'X' === currentPlayer} setName={setPlayerName} />
          <Player initialName={players.O} symbol='O' highlight={'O' === currentPlayer} setName={setPlayerName} />
        </ol>
        {winningSymbol && <GameOver name={winningName} setGameTurns={setGameTurns} />}
        <Gameboard updateGameTurns={updateGameTurns} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App;

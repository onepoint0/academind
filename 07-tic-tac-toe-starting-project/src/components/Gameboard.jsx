const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const winners = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6] // diagonals
];

function checkWinner(gameBoard) {
  // console.log(first)
  const board = [...gameBoard[0], ...gameBoard[1], ...gameBoard[2]];
  console.log('board constructed = ', board);
  for (const winner of winners) {
    console.log(winner)
    if (gameBoard[winner[0]] !== null && gameBoard[winner[0]] === gameBoard[winner[1]] && gameBoard[winner[1]] === gameBoard[winner[2]]) {
      console.log('found a winner!')
    }
  }
}

export const Gameboard = ({ gameTurns, updateGameTurns }) => {

  checkWinner(gameBoard);
  gameTurns.map(t => {
    const { x, y } = t.coordinates;
    gameBoard[x][y] = t.symbol;
  });

  const handleClick = (x, y) => {
    updateGameTurns(x, y);
  }

  return (
    <div id='game-board'>
      <ol>
        {gameBoard.map((row, x) => {
          return <li key={x}>
            <ol>
              {row.map((playerSymbol, y) => {
                return <li key={y}>
                  <button onClick={() => handleClick(x, y)} disabled={!!gameBoard[x][y]}>
                    {playerSymbol}
                  </button>
                </li>
              })}
            </ol>
          </li>
        })}
      </ol>
    </div>
  )
}

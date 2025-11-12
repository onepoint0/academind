
export const Gameboard = ({ updateGameTurns, gameBoard }) => {

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

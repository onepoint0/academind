export const GameOver = ({ name, setGameTurns }) => {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      <p>{name === 'drawer' ? `It's a drawer!` : `You won, ${name}!`} </p>
      <button onClick={() => setGameTurns([])}>Rematch</button>
    </div>
  )
}

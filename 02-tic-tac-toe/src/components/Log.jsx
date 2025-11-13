export const Log = ({ turns }) => {
  return (
    <div id='log'>
      <ol>
        {turns.map(t =>
          <li key={`${t.coordinates.x}${t.coordinates.y}`}>
            {t.symbol} played {t.coordinates.x}, {t.coordinates.y}
          </li>
        )}
      </ol>
    </div>
  )
}

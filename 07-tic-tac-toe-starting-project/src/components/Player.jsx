import { useState } from "react"

export const Player = ({ initialName, symbol, highlight }) => {
  const [editing, setEditing] = useState(false);
  const [player, setPlayer] = useState(initialName)

  const handleChange = e => setPlayer(e.target.value);
  const handleClick = () => setEditing(prev => !prev);

  const nameField = editing ?
    <input onChange={handleChange} value={player} className="player-name" /> :
    <span className="player-name">{player}</span>;

  const buttonText = editing ? 'SAVE' : 'EDIT';

  return (
    <li className={highlight ? 'active' : undefined}>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={handleClick}>
        {buttonText}
      </button>
    </li>
  )
}

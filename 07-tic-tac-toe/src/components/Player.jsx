import { useState } from "react"

export const Player = ({ initialName, symbol, highlight, setName }) => {
  const [editing, setEditing] = useState(false);
  const [player, setPlayer] = useState(initialName);

  const handleChange = e => setPlayer(e.target.value);
  const handleClick = (symbol, name) => {
    setEditing(prev => !prev);
    setName(symbol, name);
  };

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
        onClick={() => handleClick(symbol, player)}>
        {buttonText}
      </button>
    </li>
  )
}

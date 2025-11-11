import { useState } from "react"

export const Player = ({name}) => {
    const [editing, setEditing] = useState(false);
    const handleClick = () => setEditing(prev => !prev);

    const nameField = editing ?
        <input className="player-name" value={name} /> :
        <span className="player-name">{name}</span>;

    const buttonText = editing ? 'SAVE' : 'EDIT';
  return (
    <li>
      <span className="player">
        {nameField}
        <span className="player-symbol">X</span>
      </span>
      <button onClick={handleClick}>{buttonText}</button>
    </li>
  )
}

import { useState, useRef } from "react"

export default function Player() {
  const setNameRef = useRef();
  const [player, setPlayer] = useState('player');
  const handleClick = () => {
    setPlayer(setNameRef.current.value);
  }
  return (
    <>
      <section id="player">
        <h2>Welcome {player}</h2>
        <p>
          <input ref={setNameRef} type="text" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    </>
  );
}

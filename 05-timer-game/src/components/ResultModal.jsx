import { useImperativeHandle } from "react"
import { useRef } from "react"

export const ResultModal = ({ ref, result, reset, duration }) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      }
    }
  });

  return (
    <dialog ref={dialogRef} className="result-modal"> {/* unless you add open attrib  to this or open it with .showModal() it will not be visible. with open attribute it will not show the background */}

      <h2>You {result}</h2>

      <p>The target time was <b>{duration}</b></p>

      <p>You stopped the timer with <b>X</b> seconds left</p>

      <form action="dialog">
        <button onClick={reset}>OK!</button>
      </form>

    </dialog>
  )
}

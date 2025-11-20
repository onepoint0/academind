import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";

export const Timer = ({ title, duration, }) => {
  const [status, setStatus] = useState('stopped');
  const timerRef = useRef();
  const modalRef = useRef();

  const showResultModal = (status) => {
    setStatus(status);
    modalRef.current.open();
  }

  const handleClick = () => {
    if (status === 'stopped') {
      timerRef.current = setTimeout(() => showResultModal('lost'), duration * 1000);
      setStatus('started');
    } else {
      clearTimeout(timerRef.current);
      showResultModal('won');
    }

  }

  const reset = () => {
    // bc this is also setting the 'You {status}' value on the won/lost modal, need to wait til it closes before setting back to stopped otherwise the label briefly says 'You Stopped!'
    setTimeout(() => setStatus('stopped'), 1000);
  }

  console.log(`${title}`, status);

  return (
    <>
      {/* ResultModal uses builtin dialog which doesn't show by default until you run .showModal() on it (which is what the ref is for) passed as props here (react 19) but < 19 use forwardRef */}
      <ResultModal ref={modalRef} result={status} reset={reset} duration={duration} />
      <div className="challenge">
        <h2>{title}</h2>
        <div className="challenge-time">{duration} second{duration > 1 ? 's' : ''}</div>
        <button onClick={handleClick}>{status === 'stopped' ? 'Start Challenge' : 'Stop Challenge'}</button>
        <div className={''}>
          {status !== 'started' ? 'Timer inactive' : 'Time is running...'}
        </div>
      </div>
    </>
  )
}

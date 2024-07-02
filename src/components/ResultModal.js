import React,{forwardRef,useRef,useImperativeHandle} from 'react'
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({result, targetTime,remainingTime,resetTimer},ref) {
  const newRef = useRef();
  const formattedRemainingTime = (remainingTime/1000).toFixed(2);
  const score = Math.round((1-remainingTime/(targetTime*1000))*100);
  const userLost = remainingTime <=0;

  //to keep logic loosely coupled in two files
  useImperativeHandle(
    ref,
    () => {
      return {
      //method binded to ref from forwardRef and exposed to other component
      open(){
        newRef.current.showModal();
      }}
    }
  )
  return createPortal(
    <dialog ref={newRef} className='result-modal'>
        {userLost && <h2>You Lost!</h2>}
        {!userLost && <h2>Your Score : {score}</h2>}

        <p>The target time was <strong>{targetTime} second{targetTime>1 ? 's' :''}</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method='dialog' onSubmit={resetTimer}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById("modal")
  );
})

export default ResultModal
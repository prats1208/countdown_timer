import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  //used with setTimeout logic
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);


  //for setInterval - as I want to show modal on win as well as lose
  const [timerRemaining,setTimerRemaining] = useState(targetTime*1000);  
  const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime*1000;
  const dialog = useRef();

  const timer = useRef();

  if(timerRemaining <= 0){
    
    clearInterval(timer.current);
    // setTimerRemaining(targetTime*1000);
    dialog.current.open();
       
  }
  function handleStart() {  
    timer.current = setInterval(()=>{
      setTimerRemaining(prevTimerRemaining => {
        const currentTimeRemaining=prevTimerRemaining - 10;
        return currentTimeRemaining;
      }); 
    },10)
   
    
    // setTimerStarted(true);
    //*setTimeOut*
    // timer.current = setTimeout(() => {
    //   setTimerExpired(true);
    //   // dialog.current.showModal();  //tightly attached to another component - we're telling the element that needs to e used in modal component
    //   dialog.current.open();
    //   setTimerStarted(false);
    // }, targetTime * 1000);
  }

  
  

  function resetTimer(){
    setTimerRemaining(targetTime*1000)
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
    
    // clearTimeout(timer.current);
    // setTimerStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timerRemaining} resetTimer={resetTimer}/>
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running... " : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;

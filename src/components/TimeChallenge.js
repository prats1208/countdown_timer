import React, { useEffect, useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimeChallenge = ({ title, targetTime }) => {
  //used with setTimeout logic
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  let result;
  //for setInterval - as I want to show modal o wi as well as lose
  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const [timerIsActive, setTimerIsActive] = useState(false);
  const dialog = useRef();

  const timer = useRef();

  //w/o useEffect - setTimerIsActive causing re-rendering in infinte loop as timerRemaining is not resetting here.
  //if timerremaining is reset - modal will show updated state value as state update re-renders modal 
  useEffect(() => {
    if (timerRemaining == 0) {
      clearInterval(timer.current);
      result = "Lost";
      dialog.current.open();
      console.log("out", timerRemaining);
      setTimerIsActive(false);
    }
  }, [timerRemaining]);

  function handleStart() {
    setTimerIsActive(true);
    timer.current = setInterval(() => {
      setTimerRemaining((prevTimerRemaining) => {
        const currentTimeRemaining = prevTimerRemaining - 10;
        // console.log("currentTimeRemaining",currentTimeRemaining);
        return currentTimeRemaining;
      });
    }, 10);

    // setTimerStarted(true);
    //*setTimeOut*
    // timer.current = setTimeout(() => {
    //   setTimerExpired(true);
    //   // dialog.current.showModal();  //tightly attached to another component - we're telling the element that needs to e used in modal component
    //   dialog.current.open();
    //   setTimerStarted(false);
    // }, targetTime * 1000);
  }

  function resetTimer() {
    setTimerRemaining(targetTime * 1000);
  }

  function handleStop() {
    // clearTimeout(timer.current);
    clearInterval(timer.current);
    if (timerRemaining > 0) {
      result = "Won";
      dialog.current.open();
    }
    setTimerIsActive(false);
    // setTimerStarted(false);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timerRemaining}
        result={result}
        resetTimer={resetTimer}
      />
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

export default TimeChallenge;

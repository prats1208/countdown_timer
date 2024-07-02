import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";
import TimeChallenge from "./components/TimeChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {/* <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Medium" targetTime={2}/>
        <TimerChallenge title="Medium" targetTime={3}/>
        <TimerChallenge title="Difficult" targetTime={5}/> */}

        {/* below with useEffect and timerIsActive state use */}
        <TimeChallenge title="Easy" targetTime={1}/>
        <TimeChallenge title="Medium" targetTime={2}/>
        <TimeChallenge title="Medium" targetTime={3}/>
        <TimeChallenge title="Difficult" targetTime={5}/>
      </div>
    </>
  );
}

export default App;

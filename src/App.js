import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Medium" targetTime={2}/>
        <TimerChallenge title="Medium" targetTime={3}/>
        <TimerChallenge title="Difficult" targetTime={5}/>
      </div>
    </>
  );
}

export default App;

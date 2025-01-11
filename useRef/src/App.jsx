import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {

  let [time, setTime] = useState(0);

  let timerRef = useRef(null)

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time = time+1)
      console.log(time)
    }, 1000);
  }
  
  function stopTimer(){
    clearInterval(timerRef.current)
    timerRef.current = null // set the reference to null
    //  but since the UI won't get re-renderd, we still have the same value showing
  }

  function resetTimer(){
    stopTimer()
    setTime(0)
  }

  return (
    <>

    <h1   > StopWatch : {time} seconds</h1>
    <button onClick={startTimer}>Start</button>
    <br /> <br />
    <button onClick={stopTimer}>Stop</button>
    <br /> <br />
    <button onClick={resetTimer}>Reset</button>


    </>
  );
}

export default App;

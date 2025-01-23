import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  var [count, setCount] = useState(0);
  const [text, setText] = useState("Initial Text"); // Using state to manage the text

  const ref_value = useRef();
  const ref_p = useRef();
  const ref_counter = useRef(0);

  const handleClick = () => {
    setText("Text changed!"); // Update the text when clicked
  };

  function handleClick2() {
    setCount((prevCount) => {
      count = prevCount + 1;

      if (ref_counter.current <= count) {
        ref_counter.current = count;
      }
      return count;
    });
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Count : {count}</h1>
        <h1>Highest Count : {ref_counter.current}</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          ref={ref_value}
          onClick={() => {
            ref_value.current.style.backgroundColor = "red";
          }}
        >
          New text
        </button>
        <p ref={ref_p} onClick={handleClick}>
          {text}
        </p>
      </div>

      <button onClick={handleClick2}>Add Count</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;

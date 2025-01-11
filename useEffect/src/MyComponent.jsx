import React from "react";
import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // only re-render
  // useEffect(
  //   () => {
  //     document.title = `Count : ${count}`
  //   }
  // )

  // only when mounted
  // useEffect(() => {
  //   document.title = `Count : ${count}`;
  // }, []);

  useEffect(() => {
    document.title = `Count : ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((count) => {
      return count + 1;
    });
  }

  function subCount() {
    setCount((count) => {
      return count - 1;
    });
  }

  function changeColor() {
    setColor((color) => (
      color === "green" ? "red" : "green"
    ));
  }

  return (
    <>
      <p style={{color : color}} >Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <button onClick={changeColor}>ChangeColor</button>
    </>
  );
}

export default MyComponent;

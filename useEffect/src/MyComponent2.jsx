import React, { useState, useEffect } from "react";

function MyComponent2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTNER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listner removed")
    };
  }, []);

  useEffect(()=>{
    document.title = `Size ${width}x${height}`
  })

  return (
    <>
      <p>Window Width : {width}px</p>
      <p>Window Height : {height}px</p>
    </>
  );
}

export default MyComponent2;

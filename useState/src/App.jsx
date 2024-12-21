import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(5); // The current value is 5

  function addValue(){
    setCount(()=>{
      // count = count+1 
      // return count
      // if we do the above code instead of the below one, it will update twice
      // It happens because you're directly modifying `count` instead of relying on React's asynchronous state updates, causing inconsistencies between the state and the UI.
      return count + 1// always remember to return
    })
  }

  function removeValue(){
    setCount(()=>{
      // count = count -1
      if (count == 0){
        return 0;
      }
      else{return count -1 }
      
    })

  }

  return (
    <>
      <h1>Use State Learning</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Add to {count}</button>
      <br></br>
      <button onClick={removeValue}>Remove to {count}</button>
      <footer>footer : {count}</footer>
    </>
  )
}

export default App

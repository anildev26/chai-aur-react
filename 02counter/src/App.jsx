
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  
  const incrementCounter = () => {
    if(counter <20){
    setCounter(counter+1)
    }
  }

  const decrementCounter = () =>{
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Counter React Web Application</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={incrementCounter}>Add Value</button>
      <br />
      <button onClick={decrementCounter}>Decrease Value</button>
    </>
  )
}

export default App

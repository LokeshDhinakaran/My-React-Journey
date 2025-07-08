import { useState } from 'react'

import './App.css'

function App() {
  //let counter = 15;
  const [counter , setCounter] = useState(15)
  const AddValue = () =>{
    setCounter((prevCounter) => prevCounter+1 )
    setCounter((prevCounter) => prevCounter+1 )
    setCounter((prevCounter) => prevCounter+1 )
    setCounter((prevCounter) => prevCounter+1 )
    setCounter((prevCounter) => prevCounter+1 )
    setCounter((prevCounter) => prevCounter+1 )
  } 
  const ReomveValue = () =>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Loki's React journey </h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={AddValue}>Add Value </button>{ " " }
      <button 
      onClick={ReomveValue}>Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App

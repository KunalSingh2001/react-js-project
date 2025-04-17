import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addVal = () => {
    console.log('clicked', counter);
    if (counter < 20) {
      setCounter (prevCounter => prevCounter + 1);
      // setCounter (prevCounter => prevCounter + 1);
      // setCounter (prevCounter => prevCounter + 1);
    }
  }

  const decreseVal = () => {
    if (counter > 0) {
      setCounter (counter - 1);
    }
  }

  return (
    <>
    <h1>Hello</h1>
    <h2>Counter Val: {counter}</h2>
    <button onClick={addVal}>Add Value</button>
    <button onClick={decreseVal}>Decrese Value</button>
    </>
  )
}

export default App

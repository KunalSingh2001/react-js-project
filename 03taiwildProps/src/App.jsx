import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from "./components/Card"
function App() {
  const [count, setCount] = useState(0)
  let myObj = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400'>Tailwind Test</h1>
      <Card channel= "xyz Chan" myObj={myObj} username="kunal"/>
      <Card/>
    </>
  )
}

export default App

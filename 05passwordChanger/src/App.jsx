import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowd, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const copyPassword = useCallback(() => {
    alert('Password Copied!');
    window.navigator.clipboard.writeText(password);
  });


  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberAllowed) str += "1234567890";
    if (charAllowd) str += "!@#$%^&*()_-{}[]?";

    for(let i = 1; i<= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowd, setPassword]);
  
  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowd, setPassword, passwordGenerator])
  return (
    <>
      <h1>Password genrater</h1>
      <input type="text" value={password} placeholder="Password" readOnly/>
      <button onClick={copyPassword} type="button">copy</button><br/>
      <input type="range" min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)}}/>
      <label>Length: {length}</label><br/>
      <label>Number:</label>
      <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={(e) => {setNumberAllowed((prev) => !prev); }}/>
      <label>Characters:</label>
      <input type="checkbox" defaultChecked={charAllowd} id="charInput" onChange={(e) => {setCharAllowed((prev) => !prev); }}/>
    </>
  )
}

export default App

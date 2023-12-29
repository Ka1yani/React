import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counterA, setcounter] = useState(0)
  //let counter = 15
  let addValue = () => {
    if(isNaN(counterA)) {
      counterA = 0
      setcounter(counterA)
      addValue()
    } else {
    counterA = counterA +1
    setcounter(counterA)
    console.log("Add", counterA)
    }
    
  }
  let [counterR, removecounter] = useState(counterA)
  let removeValue = () => {
    if(counterA > 0) {
        counterR = counterA-1
        counterA = counterR
        setcounter(counterA)
        console.log("removed", counterR)
    } else {
      counterA = "We are Down to zero"
      setcounter(counterA)
    }
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counterA}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

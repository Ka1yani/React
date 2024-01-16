import { useState } from 'react'
import { Todo, AddTodo } from './components'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sammy Learning about Redux-Toolkit</h1>
      <Todo />
      <AddTodo />
    </>
  )
}

export default App
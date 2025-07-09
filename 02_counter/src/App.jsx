import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
   const addvalue  = ()=>{
      setCount(counter+1); 

   } 

   const removevalue =() =>{
        setCount(counter-1); 

   }
   return (
    <>
      <h1>React Counter APP : {counter}</h1>
      <button  onClick={addvalue}>Add Value</button>
      <button onClick={removevalue}>Remove Value</button>
      <footer>final result is :{counter}</footer>
    </>
  )
}

export default App

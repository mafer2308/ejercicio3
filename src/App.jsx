import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Ramdom from './components/Ramdom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <img className='imgHeader' src="/Ricky.jpg" alt="" />
      </div>
      <div className="title">
        <h1><span>Rick and Morty</span> Wiki</h1>
      </div>
      <Ramdom />
      
    </div>
  )
}

export default App

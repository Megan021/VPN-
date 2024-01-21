import { useState } from 'react'
import './App.css'
import About from './components/About'
import Maping from './components/Maping'
import Team from './components/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <About/>
        <Maping/>
        <Team/>
      </div>
    </>
  )
}

export default App

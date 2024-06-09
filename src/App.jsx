import { useState } from 'react'
import './App.css'
import Cumpleanios from './componentes/Cumpleanios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contenedor-body'>
      <Cumpleanios />
    </div>
  )
}

export default App

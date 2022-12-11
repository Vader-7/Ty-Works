import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Icon } from './Icon'
import { Gradient } from './Gradient.js'
import {
  faArrowUp,
  faBars,
  faCake,
  faCoffee,
  faPhone,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'


function App() {
  // Create your instance
  const gradient = new Gradient()      
  gradient.initGradient('#gradient-canvas')
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div id='presentacion'>
      <h1 id='title'>Hello there</h1>
      <p id='about'>I'm Tyler a CS student from Chile, I have experience building e-comerce and web apps</p>
      </div>
    </div>
  )
}

export default App

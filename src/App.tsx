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
      <h1 id="title">My Work</h1>
    </div>
  )
}

export default App

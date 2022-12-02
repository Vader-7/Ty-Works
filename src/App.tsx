import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Icon } from './Icon'
import {
  faArrowUp,
  faBars,
  faCake,
  faCoffee,
  faPhone,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <h1 id='title'><Icon css='icon' icon={faBriefcase}/> My Works</h1> 
       <br />
    </div>
  )
}

export default App

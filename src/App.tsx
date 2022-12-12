import { useState } from 'react'
import './App.css'
import { Gradient } from './Gradient.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook,
          faTwitter,
          faInstagram,
          faLinkedin,
          faGithub,
          faYoutube,
        } from '@fortawesome/free-brands-svg-icons'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used






function App() {
  // Create your instance
  const gradient = new Gradient()      
  gradient.initGradient('#gradient-canvas')
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div id='footer'>
        <a href="https://github.com/Vader-7" target='_blank'><FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon></a>
        <a href="https://www.linkedin.com/in/tylermiranda/" target='_blank'><FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon></a>
        
      </div>
      <div id='presentacion'>
      <h1 id='title'>Hello there</h1>
      <p id='about'>I'm Tyler a CS student from Chile, I have experience building e-comerce and web apps</p>
      </div>
    </div>
  )
}

export default App

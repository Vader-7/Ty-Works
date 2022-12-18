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
import {  faMobile,
          faPhone,
          faR,
          faHouse,
          faCircleArrowDown,
          faCircleArrowUp,
          faGripLinesVertical,
          faChevronCircleRight
       } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import img from '/images/Subtract.jpg'
import qr from '/images/frame.png'
import { animated, useSpring } from '@react-spring/web'



function App() {
  // Create your instance
  const gradient = new Gradient()      
  gradient.initGradient('#gradient-canvas')
  document.body.style.overflow='hidden'
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div id="footer" className="backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none">
        <a href="https://github.com/Vader-7" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="http://linkedin.com/in/tylermiranda" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a>
          <FontAwesomeIcon id='separador' icon={faGripLinesVertical} />
        </a>
        <Link to="proyecto1" smooth={true} offset={200} duration={500}>
          <FontAwesomeIcon icon={faCircleArrowDown} />
        </Link>
        <Link to="presentacion" smooth={true} offset={-100} duration={500}>
          <FontAwesomeIcon icon={faCircleArrowUp} />
        </Link>
      </div>
      <main>
        <div className="content" id="presentacion">
          <div className="container">
            <h1 id="title">Hello there</h1>
            <br />
            <p id="about">
            My name is Tyler and I am a FullStack developer. I have a passion for creating intuitive and functional applications, and I am always looking for new opportunities to learn and grow.
            </p>
          </div>
        </div>
        <div className="content backdrop-blur-sm bg-white/30" id="proyecto1">
          <div className="container">
            <h1 id="title">RegistApp</h1>
            <br />
            <p id="about">
            It is an application that allows universities to pass assistance via QR, to develop it use Ionic with Angular and FireBase.
            </p>
          </div>
          <div id="logos" className="container">
            <div className="right-div">
              <a href="https://drive.google.com/uc?export=download&id=1yT4Pcdd-k5uuIdkSh6doWOvuq26NDpOF">
                <img src={img} alt="" />
              </a>
            </div>
            <div className="left-div">
              <img src={qr} alt="" />
            </div>
          </div>
          <br />
        </div>
      </main>
    </div>
  )}
export default App

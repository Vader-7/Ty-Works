import { useRef, useState } from 'react'
import './App.css'
import { Gradient } from './Gradient.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook,
          faTwitter,
          faInstagram,
          faLinkedin,
          faGithub,
          faYoutube, 
          faGithubAlt   
        } from '@fortawesome/free-brands-svg-icons'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {  faMobile,
          faPhone,
          faR,
          faHouse,
          faCircleArrowDown,
          faCircleArrowUp,
          faGripLinesVertical,
          faChevronCircleRight,
          faChevronCircleUp,
          faChevronCircleDown,
       } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import img from '/images/Subtract.jpg'
import qr from '/images/frame.png'
import { animated, useSpring } from '@react-spring/web'
import { IParallax, Parallax, ParallaxLayer} from '@react-spring/parallax'
import { end } from '@popperjs/core'
import { refType } from '@mui/utils'



function App() {
  const parallax = useRef<IParallax>(null!);
  // Create your instance
  const gradient = new Gradient()      
  gradient.initGradient('#gradient-canvas')
  //document.body.style.overflow='hidden'
  return (
    <div className="App">
      <Parallax ref={parallax} pages={2} style={{ top: '0', left: '0'}}>
      <div id="footer" className="backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none">
        <a href="https://github.com/Vader-7" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="http://linkedin.com/in/tylermiranda" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a onClick={() => parallax.current.scrollTo(0)}>
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </a>
      </div>
      <ParallaxLayer 
        offset={0} 
        speed={3} 
        factor={1} 
        onClick={() => parallax.current.scrollTo(2)}>
        <div className="content" id="presentacion" >
          <div className="container">
            <h1 id="titleM">Hello there</h1>
            <br />
            <p id="about">
            My name is Tyler and I am a FullStack developer from Chile. I have a passion for creating intuitive and functional applications, and I am always looking for new opportunities to learn and grow.
            </p>
            <FontAwesomeIcon onClick={() => parallax.current.scrollTo(2)} id='goingDown' icon={faChevronCircleDown} />
          </div>
        </div>
      </ParallaxLayer>
        <ParallaxLayer 
        className="content" 
        id="proyecto1"
        offset={1} 
        speed={-3} 
        factor={1} 
        >    
        <div className="container" >
            <a href="https://github.com/Vader-7/RegistAPP" target="_blank"> <h1 id="title"><FontAwesomeIcon icon={faGithubAlt} /> RegistApp</h1></a>
            <p id="about">
            QR attendance app is designed to help universities efficiently track student attendance. The app was developed using the Ionic framework and Angular, along with the Firebase backend service.
            </p>
        </div>
        </ParallaxLayer>
          <ParallaxLayer 
          id="logos" 
          className='container'
          offset={1}  
          speed={10} 
          factor={1.4}
          >
              <div className="right-div">
                <a href="https://drive.google.com/uc?export=download&id=1yT4Pcdd-k5uuIdkSh6doWOvuq26NDpOF">
                  <img src={img} alt="" />
                </a>
              </div>
              <div className="left-div">
                <img src={qr} alt="" />
              </div>
            </ParallaxLayer>
      </Parallax>
    </div>
  )}
export default App

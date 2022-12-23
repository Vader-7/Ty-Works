import { useRef, useState } from 'react'
import './App.css'
import { Gradient } from './Gradient.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedin,
          faGithub,
        } from '@fortawesome/free-brands-svg-icons'
import {  faLaptopCode,
          faGlobe,
          faChevronCircleRight,
          faChevronCircleUp,
          faChevronCircleDown,
          faChevronCircleLeft,
          faLeaf,
          faQrcode,
          faPassport
       } from '@fortawesome/free-solid-svg-icons'
import img from '/images/Subtract.jpg'
import leafLogo from '/images/LeaFeeling.jpg'
import qr from '/images/frame.png'
import GitHub from '/images/github.jpg'
import { IParallax, Parallax, ParallaxLayer} from '@react-spring/parallax'


function App() {
  const parallax = useRef<IParallax>(null!);
  const gradient = new Gradient()     
  const [show, setShow] = useState(true);
  gradient.initGradient('#gradient-canvas')
  return (
    <div className="App">
      <Parallax ref={parallax} pages={2} style={{ top: '0', left: '0'}}>
      <div id="footer" className="backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none">
        <a href="https://drive.google.com/uc?export=download&id=1b7iSUR29P5vxzoa7SUIPWFiiTgU7GXID">
          <FontAwesomeIcon icon={faPassport} />
        </a>
        <a href="https://github.com/Vader-7">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="http://linkedin.com/in/tylermiranda" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a onClick={() => parallax.current.scrollTo(0)}>
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </a>
        <a onClick={() => setShow(!show)}>
          {show === true ?  <FontAwesomeIcon icon={faChevronCircleRight}/> : <FontAwesomeIcon icon={faChevronCircleLeft}/>}
        </a>
      </div>
      <ParallaxLayer 
        offset={0} 
        speed={100} 
        factor={0}
        className='planet'>
          <a href="https://github.com/Vader-7/Ty-Works"> 
            <FontAwesomeIcon icon={faGlobe}/> Made by Tyler
          </a>
      </ParallaxLayer>
      <ParallaxLayer 
        offset={0} 
        speed={3} 
        factor={1} 
        className="content;container" id="presentacion">
           <a href="https://github.com/Vader-7" onClick={() => parallax.current.update}><h1 id="title"><FontAwesomeIcon icon={faLaptopCode}/> Hello there</h1></a>
          <br/>
          <p id="about">
            My name is Tyler and I am a Full-Stack developer from Chile. I have a passion for creating intuitive and functional applications, and I am always looking for new opportunities to learn and grow.
          </p>
          <FontAwesomeIcon onClick={() => parallax.current.scrollTo(1)} id='goingDown' icon={faChevronCircleDown} />
      </ParallaxLayer>
      <ParallaxLayer id='fondo' offset={1} speed={0.5} factor={1}/>
      {show ? (  
        <><ParallaxLayer
            className="proyecto"
            offset={1}
            speed={-30}
            factor={1}>
              <a href="https://github.com/Vader-7/RegistAPP" target="_blank"> <h1 id="title"><FontAwesomeIcon icon={faQrcode} /> RegistApp</h1></a>
              <p id="about">
                This app was designed to help universities efficiently track and monitor the attendance of their students. It was developed using the Ionic framework, which is a powerful tool for creating cross-platform mobile applications, and Angular. The app is also connected to the Firebase backend service.
              </p>
              </ParallaxLayer>
            <ParallaxLayer 
              className="logos" 
              offset={1} 
              speed={10} 
              factor={1.2}>
              <div className="right-div">
                <a href="https://github.com/Vader-7/RegistAPP">
                  <img src={img} alt="" />
                </a>
              </div>
              <div className="left-div">
                <img src={qr} alt="" />
              </div>
              </ParallaxLayer>
            </>
          ):(
        <>
          <ParallaxLayer
              className='proyecto'>
                <a href="https://github.com/Vader-7/LeaFeeling" target="_blank"> <h1 id="title"><FontAwesomeIcon icon={faLeaf} /> LeaFeeling</h1></a>
                <p id="about">
                This page was built using Django, a powerful web framework written in Python, and connected to Oracle Cloud, a cloud computing platform for storing and managing data. <br /> <br /> All of the data displayed on the page is retrieved from Oracle Cloud database using Django's ORM (Object-Relational Mapper).
                </p>
            </ParallaxLayer>
            <ParallaxLayer
            className="logos">
              <div className="right-div">
                <a href="https://github.com/Vader-7/LeaFeeling">
                  <img src={leafLogo} alt="" />
                </a>
              </div>
              <div className="left-div">
              <a href="https://github.com/Vader-7/LeaFeeling">
                  <img src={GitHub} alt="" />
                </a>
              </div>
            </ParallaxLayer></>
          )}
      </Parallax>
    </div>
  )}
export default App

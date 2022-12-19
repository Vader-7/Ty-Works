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
import styles from './styles.module.css'


interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
)

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
        <a href="https://github.com/Vader-7">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="http://linkedin.com/in/tylermiranda" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a onClick={() => parallax.current.scrollTo(0)}>
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </a>
        <Link to='2'>
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </Link>
      </div>
      <ParallaxLayer 
        offset={0} 
        speed={3} 
        factor={1} 
        onClick={() => parallax.current.scrollTo(2)} className="content;container" id="presentacion">
          <h1 id="titleM">Hello there</h1>
          <br/>
          <p id="about">
            My name is Tyler and I am a FullStack developer from Chile. I have a passion for creating intuitive and functional applications, and I am always looking for new opportunities to learn and grow.
          </p>
          <FontAwesomeIcon onClick={() => parallax.current.scrollTo(2)} id='goingDown' icon={faChevronCircleDown} />
      </ParallaxLayer>
      <ParallaxLayer id="fondo" offset={1}></ParallaxLayer>
        <ParallaxLayer 
        className="content; container" 
        id="proyecto1"
        offset={1} 
        speed={-3} 
        factor={1}>    
        <a href="https://github.com/Vader-7/RegistAPP" target="_blank"> <h1 id="title"><FontAwesomeIcon icon={faGithubAlt} /> RegistApp</h1></a>
        <p id="about">
          App designed to help universities efficiently track student attendance. The app was developed using the Ionic framework and Angular, along with the Firebase backend service.
          </p>
        </ParallaxLayer>
          <ParallaxLayer 
          id="logos" 
          className='container'
          offset={1}  
          speed={10} 
          factor={1.3}>
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

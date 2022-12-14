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
          faHouse 
       } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import img from '/images/Subtract.jpg'
import qr from '/images/frame.png'


function App() {
  // Create your instance
  const gradient = new Gradient()      
  gradient.initGradient('#gradient-canvas')
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div id='footer'>
        <a href="https://github.com/Vader-7" target='_blank'><FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon></a>
        <a href="https://twitter.com/elonmusk" target='_blank'><FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon></a>
        <Link to="registApp" smooth={true} offset={200} duration={1500}>RegistApp</Link>
        <Link to="presentacion" smooth={true} offset={-100} duration={1500}><FontAwesomeIcon icon={faHouse} ></FontAwesomeIcon></Link>
      </div>
      <main>
        <div className='content' id='presentacion'> 
          <div className='md:container md:mx-auto px-4'> 
            <h1 id='title'>Hello there</h1>
            <br/>
            <p id='about'>I'm Tyler a CS student from Chile and i like programming</p>
          </div>
        </div>
        <div className='content' id='registApp'>
          <div className='md:container md:mx-auto px-4'>
            <h1 id='title'>RegistApp</h1>
            <p id='about'>I made an application for the students of my university to mark attendance using a QR code with IONIC using Angular.
            <br />
            <br />
            I'm still working on it...</p>
          </div>
          <div id='logos' className='container'>
            <div className='right-div'>
              <a href="https://drive.google.com/file/d/1yT4Pcdd-k5uuIdkSh6doWOvuq26NDpOF/view?usp=share_link"><img src={img} alt=""></img></a>
            </div>
            <div className='left-div'>
              <img src={qr} alt=""></img>
            </div>
          </div>
          <br />
        </div>
    </main>
    </div>
  )
}

export default App

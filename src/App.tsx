import { memo } from 'react';
import { SetStateAction, useRef, useReducer, useEffect, useMemo } from 'react';
import './App.css';
import './App.responsive.css';
import { Gradient } from './Gradient.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
   faLaptopCode,
   faChevronCircleUp,
   faChevronCircleDown,
   faPassport,
   faDesktop,
   faMobile,
} from '@fortawesome/free-solid-svg-icons';
import img from '/images/Subtract.jpg';
import leafLogo from '/images/LeaFeeling.jpg';
import qr from '/images/frame.png';
import GitHub from '/images/github.jpg';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import Balancer from 'react-wrap-balancer';

function App() {
   const parallax = useRef<IParallax>(null!);
   const [toggleState, setToggleState] = useReducer((state: number, newState: number) => newState, 1);
   const gradientColors = ['#c3e4ff', '#6ec3f4', '#e6e3ef', '#0096d7'];
   const gradientOptions = {
      colors: gradientColors,
   };
   const gradient = useMemo(() => new Gradient(gradientOptions), [gradientOptions]);
   useEffect(() => {
      gradient.initGradient('#gradient-canvas');
   }, [gradient]);

   return (
      <div className="App">
         <Parallax ref={parallax} pages={2} style={{ top: '0', left: '0' }}>
            <div id="footer">
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
            </div>
            <div id="footer1">
               <a className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState(1)}>
                  <FontAwesomeIcon icon={faMobile} />
               </a>

               <a className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState(2)}>
                  <FontAwesomeIcon icon={faDesktop} />
               </a>
            </div>
            <ParallaxLayer offset={0} speed={100} factor={0} className="planet">
               <a href="https://github.com/Vader-7/Ty-Works">
                  <FontAwesomeIcon icon={faLaptopCode} /> Made by Tyler
               </a>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={3} factor={1} className="content container" id="presentacion">
               <a href="https://github.com/Vader-7" onClick={() => parallax.current.update}>
                  <h1 id="titleM">Hey there</h1>
               </a>
               &nbsp;
               <p id="about">
                  <Balancer>
                     I'm Tyler and I am a Full-stack developer from Chile. I have a passion for creating intuitive and
                     functional applications, and I am always looking for new opportunities to learn and grow.
                  </Balancer>
               </p>
               <FontAwesomeIcon
                  onClick={() => parallax.current.scrollTo(1)}
                  id="goingDown"
                  icon={faChevronCircleDown}
               />
            </ParallaxLayer>
            <ParallaxLayer id="fondo" offset={1} speed={0.5} factor={1} />
            <div className="content-tabs">
               <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
                  <>
                     <ParallaxLayer className="proyecto" offset={1} speed={-30} factor={1}>
                        <a href="https://github.com/Vader-7/RegistAPP" target="_blank">
                           {' '}
                           <h1 id="title">RegistApp</h1>
                        </a>
                        <p id="about">
                           <Balancer>
                              This app was designed to help universities efficiently track and monitor the attendance of
                              their students. It was developed using the Ionic framework, which is a powerful tool for
                              creating cross-platform mobile applications, and Angular. The app is also connected to the
                              Firebase backend service.
                           </Balancer>
                        </p>
                     </ParallaxLayer>
                     <ParallaxLayer className="logos" offset={1} speed={10} factor={1.2}>
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
               </div>
               <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
                  <>
                     <ParallaxLayer className="proyecto" offset={1} speed={-30} factor={1}>
                        <a href="https://github.com/Vader-7/LeaFeeling" target="_blank">
                           {' '}
                           <h1 id="title">LeaFeeling</h1>
                        </a>
                        <p id="about">
                           <Balancer>
                              Page built using Django, a powerful web framework written in Python, and connected to
                              Oracle Cloud, a cloud computing platform for storing and managing data.&nbsp;All of the
                              data displayed on the page is retrieved from Oracle Cloud database using Django's ORM
                              (Object-Relational Mapper).
                           </Balancer>
                        </p>
                     </ParallaxLayer>
                     <ParallaxLayer className="logos" offset={1} speed={10} factor={1.2}>
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
                     </ParallaxLayer>
                  </>
               </div>
            </div>
         </Parallax>
      </div>
   );
}
export default memo(App);

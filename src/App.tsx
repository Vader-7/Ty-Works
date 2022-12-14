import { memo } from 'react';
import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import './App.css';
import './App.responsive.css';
import { Gradient } from './Gradient.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare as faGithub, faTwitterSquare as faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faChevronCircleDown,
  faComputer as faDesktopAlt,
  faChartArea as faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import regis from '/images/RegistApp.png';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import Balancer from 'react-wrap-balancer';
import { useTrail, a } from '@react-spring/web';
import React from 'react';
import styles from './styles.module.css';


{/*const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}*/}

const App = memo(() => {
  const parallax = useRef<IParallax>(null!);
  //const [open, set] = useState(true)
  const [toggleState, setToggleState] = useState(1);
  const handleTabClick = useCallback((newState: number) => {
    setToggleState(newState);
  }, []);
  const gradientColors = ['#c3e4ff', '#6ec3f4', '#e6e3ef', '#0096d7'];
  const gradientOptions = {
    colors: gradientColors,
  };
  const gradient = useMemo(() => new Gradient(gradientOptions), [gradientOptions]);
  useEffect(() => {
    if (gradient) {
      gradient.initGradient('#gradient-canvas');
    }
  }, [gradient]);

  return (
    <div className="App">
      <Parallax ref={parallax} pages={2} style={{ top: '0', left: '0' }}>
        <div id="footer">
          {/*<a href="https://drive.google.com/uc?export=download&id=1b7iSUR29P5vxzoa7SUIPWFiiTgU7GXID">
            <FontAwesomeIcon icon={faPassport} />
          </a>*/}
          <a href="https://github.com/Vader-7">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="http://linkedin.com/in/tylermiranda" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/vader7w" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <div id="white-space-in-footer" />
          <a className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => handleTabClick(1)}>
            <FontAwesomeIcon icon={faMobileAlt} />
          </a>
          <a className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => handleTabClick(2)}>
            <FontAwesomeIcon icon={faDesktopAlt} />
          </a>
        </div>
        <ParallaxLayer offset={0} speed={100} factor={0} className="planet">
          <a href="https://github.com/Vader-7/Ty-Works">
            <FontAwesomeIcon icon={faLaptopCode} /> ????????????
          </a>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} factor={1} className="content container" id="presentacion">
        {/*<div className={styles.container} onClick={() => set(state => !state)}>
        <Trail open={open}>
          <span>Lorem</span>
          <span>Ipsum</span>
          <span>Dolor</span>
          <span>Sit</span>
        </Trail>
        </div>*/}
          <a href="https://github.com/Vader-7" onClick={() => parallax.current.update}>
            <h1 id="titleM">Hey there</h1>
          </a>
          <p id="about">
            <Balancer>
              I'm Tyler a Full-stack developer from Chile. I have a passion for creating intuitive and functional
              applications, and I am always looking for new opportunities to learn and grow.
            </Balancer>
          </p>
          <FontAwesomeIcon onClick={() => parallax.current.scrollTo(1)} id="goingDown" icon={faChevronCircleDown} />
        </ParallaxLayer>
        <ParallaxLayer id="fondo" offset={1} speed={0.5} factor={2} />
        <div className="content-tabs">
          <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
            <>
              <ParallaxLayer className="proyecto" offset={1} speed={50} factor={1}>
                <div className="texto-presentacion">
                  <a href="https://github.com/Vader-7/RegistAPP" target="_blank">
                    <h1 id="title">RegistApp</h1>
                  </a>
                  <p id="about">
                    <Balancer>
                      This app was designed to help universities efficiently track and monitor the attendance of their
                      students. It was developed using the Ionic framework, which is a powerful tool for creating
                      cross-platform mobile applications, and Angular. The app is also connected to the Firebase backend
                      service.
                    </Balancer>
                  </p>
                </div>
                <a href="https://github.com/Vader-7/RegistAPP" target="_blank">
                  <img loading='lazy' data-aos-duration="2000" width="100%" height="100%" src={regis} alt=""/>
                </a>
              </ParallaxLayer>
            </>
          </div>
          <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
            <>
              <ParallaxLayer className="proyecto" offset={1} speed={-30} factor={1}>
                <br />
                <br />
                <h3 id="about">Page under construction...</h3>
                <a href="https://github.com/Vader-7/RegistAPP" target="_blank">
                </a>
              </ParallaxLayer>
            </>
          </div>
        </div>
      </Parallax>
    </div>
  );
});

export default App;

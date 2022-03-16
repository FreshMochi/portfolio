import React from 'react'
import Pfcard from '../components/PortfolioCards/Pfcard'
import Banner from '../img/sunset.jpg'
import style from '../PageStyles/About.module.css'
import { motion } from 'framer-motion'
import webpng from '../img/aboutPNG/webpng.png'
import reactpng from '../img/aboutPNG/react.png'
import firebasepng from '../img/aboutPNG/firebase.png'
import githubpng from '../img/aboutPNG/github00.png'
import wordpng from '../img/aboutPNG/wordpress0.png'




export default function About() {
  return (
    <div 
    className={style.contentContainer}>
      <div 
      className={style.Banner}
      style={{backgroundImage: `url(${Banner})`}}>
        
      </div>
      <div className={style.textContainer}>
        <h1>About</h1>
        <p>
          I am a self taught, aspiring Frontend developer. I work 50 hours a week as retail assistant manager and I code on daily. 
          I'm always looking forward to learn cool libraries that I can implement with React.
        </p>
          <p>My goals:
          <ul>
            <li>Learn Three.js</li>
            <li>Learn more about the Algorithm and Data Structures to become a better developer.</li>
          </ul> 
          </p>
        <p>
          This website is built with React and Firebase.
        </p>
        <p>
          Please feel free to contact me for any questions or ideas.
        </p>
      </div>
      

      <div className={`${style.iconContainer}`}>
        <div className={style.logoBox}>
          <img src={webpng} alt="javascript" className={style.logo} />
          <p>HTML CSS Javascript</p>
        </div>
        <div className={style.logoBox}>
          <img src={reactpng} alt="react"  className={style.logo} />
          <p>ReactJS</p>
        </div>
        <div className={style.logoBox}>
          <img src={firebasepng} alt="firebase" className={style.logo} />
          <p>Firebase</p>
        </div>
        <div className={style.logoBox}>
          <img src={githubpng} alt="github" className={style.logo} />
          <p>Github</p>
        </div>
        <div className={style.logoBox}>
          <img src={wordpng} alt="wordpress" className={style.logo} />
        </div>
      </div>
      <div className={style.btn}>

        <Pfcard title="Portfolio" link="portfolio"/>
        <Pfcard title="Blog" link="portfolio"/>
      </div>
    </div>
  )
}

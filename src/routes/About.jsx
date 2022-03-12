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
    <div className={style.contentContainer}>
      <div 
      className={style.Banner}
      style={{backgroundImage: `url(${Banner})`}}>
        
      </div>
      <div className={style.textContainer}>
        <p>About me</p>
        <p>
          I am a self taught, aspiring Frontend developer. I work 50 hours a week as retail assistant manager and I code almost daily. 
          Whenever I would return home from work, I would code and or do a little research on Javascript fundamentals
          or learn cool libraries I can use with React.
          However, my main goal is to learn more about the backend and Data structures to help further my knowledge with web development.
        </p>
        <p>
          This website is built with React for Frontend and Firebase as backend.
        </p>
        <p>
          Feel free to contact me for any questions!
        </p>
      </div>
      <div className={`${style.iconContainer}`}>
        <div className={style.logoBox}>
          <img src={webpng} alt="javascript" className={style.logo} />
        </div>
        <div className={style.logoBox}>
          <img src={reactpng} alt="react"  className={style.logo} />
        </div>
        <div className={style.logoBox}>
          <img src={firebasepng} alt="firebase" className={style.logo} />
        </div>
        <div className={style.logoBox}>
          <img src={githubpng} alt="github" className={style.logo} />
        </div>
        <div className={style.logoBox}>
          <img src={wordpng} alt="wordpress" className={style.logo} />
        </div>
        
        
       
        <Pfcard title="Portfolio" link="portfolio"/>
          
      </div>
    </div>
  )
}

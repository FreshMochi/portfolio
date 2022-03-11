import React from 'react'
import Pfcard from '../components/PortfolioCards/Pfcard'
import Banner from '../img/sunset.jpg'
import style from '../PageStyles/About.module.css'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className={style.contentContainer}>
      <div 
      className={style.Banner}
      style={{backgroundImage: `url(${Banner})`}}>
        
      </div>
      <div>
        <p>About me</p>
        <p>
          Built with ReactJs and Firebase.
          I am a self taught, aspiring Frontend developer. I work 45 hours a week and code almost daily after work. 
          I would code and or do a little research on the fundamentals of Javascript or React.

        </p>
        <p>
          Feel free to contact me if you are looking for whether a web manager or a web developer.
        </p>
      </div>
        
      <div>
        Goal: Becoming a full-stack developer with some knowledge in blender
      </div>
      <div>
        <div>
          HTML
          CSS,
          ES6,
          React,
          Github,
          Wordpress,
          Sqaurespace
        </div>
        <div>
          Experienced in Node, Express, MongoDB
        </div>

        <div>
          <Pfcard title="Portfolio" link="portfolio" />
        </div>
      </div>
    </div>
  )
}

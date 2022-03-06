import React from 'react'
import { motion } from 'framer-motion'
import Banner from '../img/morningelk.jpg'
import style from '../PageStyles/Portfolio.module.css'
import Pfcard from '../components/PortfolioCards/Pfcard'

/* Initial animation for Banner Text */
const bannerFontAnimation = {
  y: -100,
  opacity: 0
}
/* Banner animation after page load */
const animate = {
  y: 0, 
  opacity: 1
}


export default function Portfolio() {
  return (
    <div className={style.Pcntr}>
      <div 
        className={style.Banner}
        style={{backgroundImage: `url(${Banner})`}}>
        <motion.span initial={bannerFontAnimation} animate={animate} transition={{duration: 1.0, delay: 0.5}}>View my works!</motion.span>
      </div>
      <div className={style.PortfolioContent}>
        <Pfcard title='CSS Animation' link="css-animation" />
        <Pfcard title='Restful API Projects' />
      </div>
    </div>
  )
}

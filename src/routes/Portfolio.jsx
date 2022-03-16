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
const animateBanner = {
  y: 0, 
  opacity: 1
}



export default function Portfolio() {
  return (
    <div
    className={style.Pcntr}>
      <div 
        className={style.Banner}
        style={{backgroundImage: `url(${Banner})`}}>
        <motion.span 
          initial={bannerFontAnimation} 
          animate={animateBanner} 
          transition={{duration: 1.0, delay: 0.15}}
          style={{fontSize: '50px', fontWeight: '500', color: 'rgb(18, 129, 149)'}}
          className={style.headline}
          >View my works!</motion.span>
      </div>
        <div style={{display: 'flex', justifyContent: "center", alignItems: 'center', padding: "60px 0", color: 'white', width: '80%', margin: '0 auto', textAlign: 'center'}}>
          <h1>Adding more content in near future</h1>

        </div>
      <div className={style.PortfolioContent}>
        <Pfcard title='CSS Animation' link="css-animation" />
        <Pfcard title='Blog' link="blog" />
        <div>
        </div>
      </div>
    </div>
  )
}

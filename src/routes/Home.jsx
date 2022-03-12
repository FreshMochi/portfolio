import React from 'react'
import style from '../PageStyles/Home.module.css'
import Banner from '../img/set.jpg'
import { motion } from 'framer-motion'
import Card from '../components/Card/Card'

/* Initial animation for Banner Text */
const bannerFontAnimation = {
  x: -100,
  opacity: 0
}
/* Banner animation after page load */
const animate = {
  x: 0, 
  opacity: 1
}

export default function Home() {
  return (
    <div className={style.Hcntr}>
      <div 
        className={style.Banner}
        style={{backgroundImage: `url(${Banner})`}}
      >
      <motion.span initial={bannerFontAnimation} animate={animate} transition={{duration: 1.5}} >Welcome</motion.span>
      <motion.span initial={bannerFontAnimation} animate={animate} transition={{duration: 1.25, delay: 0.25}}>to my</motion.span>
      <motion.span initial={bannerFontAnimation} animate={animate} transition={{duration: 1.0, delay: 0.5}}>Portfolio</motion.span>
      </div>
      <div 
      style={{
        display:  "flex", 
        justifyContent: 'center', 
        alignItems: "center",
        color: 'white'}}>                      {/* This style will center h1 in center of the page. */}
        <h1 style={{padding: "20px"}}>Built with ReactJs</h1>
      </div>
      <div className={style.HomeContent}>
        <Card headline="About" dialog={aboutDialog} />
        <Card headline="Portfolio" dialog={portfolioDialog} />
        <Card headline="Blog" dialog={blogDialog} />
      </div>
    </div>
  )
}


const aboutDialog = "Get to know a little more about this website and which technologies I've work with"

const portfolioDialog = "View some of my CSS works"

const blogDialog = "Check out what I've planed for the future"
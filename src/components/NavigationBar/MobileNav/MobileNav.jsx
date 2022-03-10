import { motion } from 'framer-motion'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './MobileNav.module.css'

export default function MobileNav() {
  const [showMobile, setShowMobile] = useState(false)  /* Set a state to toggle Menu Display */
    
    const menuDisplay = () => {     /* Function that will toggle menu */
      setShowMobile(!showMobile)  /* Will change showMobile Change */
      
    }
    useEffect(() => {
    
      return () => {
        setTimeout(() => { }, 0)
      }
    }, )
    


  return (
    <div className={style.MobNavCntnr}>
      <div onClick={()=> menuDisplay() } //Will toggle menu when clicked
       className={style.hamburger}>
        <span />                      {/* Span creates hamburger Menu */}
        <span />
        <span />
      </div>

      <motion.div 
      onClick={()=> menuDisplay()}
      className={style.Menu}
        initial={{
          x: '100%',
          scale: 1,
          rotate: 0,
        }}                                        
        animate={(showMobile? hideMenu  :null )} > {/*Animation alters when "showMobile" state Changes*/}                       
        <li><Link to='/' >Home</Link></li>         
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/portfolio' >Portfolio</Link></li>
        <li><Link to='/contact' >Contact</Link></li>
      </motion.div>

    </div>
  )
}


const hideMenu = {
  x: 0,
  y: 0,
  rotate: 0,
}
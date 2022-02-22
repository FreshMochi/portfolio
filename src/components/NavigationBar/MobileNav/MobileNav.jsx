import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './MobileNav.module.css'

export default function MobileNav() {
  const [showMobile, setShowMobile] = useState(false)
    
    const menuDisplay = () => {     /* Function that will toggle menu */
      setShowMobile(!showMobile)  /* Will change showMobile Change */
      console.log(showMobile)
    }
    useEffect(() => {
      
    
      return () => {
        console.log(showMobile, "useEffect")
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
    </div>
  )
}

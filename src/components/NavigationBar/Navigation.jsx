import React from 'react'
import MobileNav from './MobileNav/MobileNav'
import style from './Nav.module.css'

export default function Navigation() {
  return (
    <div className={style.NavContainer}>
      <MobileNav />
    </div>
  )
}

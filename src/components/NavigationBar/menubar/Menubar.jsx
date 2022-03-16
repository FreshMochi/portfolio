import React from 'react'
import { Link } from 'react-router-dom'
import style from './menu.module.css'
import logo from '../../../img/elkicon.png'
import { useState, useEffect } from 'react'

export default function Menubar() {
  const [ show, setShow ] = useState(true)

  const controlNavbar = () => {
    if (window.scrollY  > 800 ) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll',
    controlNavbar)
    return () => {
      window.removeEventListener('scroll',
      controlNavbar)
    }
  }, [])


  return (
    <div className={show ? `${style.menubar}`: `${style.shrinkMenu}`}>
    <div className={style.logo}>
      <img style={{height: 'inherit', width: 'auto'}} src={logo}/>
    </div>
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/portfolio' >Portfolio</Link></li>
      </ul>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import style from './menu.module.css'
import logo from '../../../img/elkicon.png'

export default function Menubar() {
  return (
    <div className={style.menubar}>
    <div className={style.logo}>
      <img style={{height: 'inherit', width: 'auto'}} src={logo}/>
    </div>
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/portfolio' >Portfolio</Link></li>
        <li><Link to='/blog' >Blog</Link></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  )
}

import React from 'react'
import Banner from '../img/sunset.jpg'
import style from '../PageStyles/About.module.css'

export default function About() {
  return (
    <div>
      <div 
      className={style.Banner}
      style={{backgroundImage: `url(${Banner})`}}>
        
      </div>
    </div>
  )
}

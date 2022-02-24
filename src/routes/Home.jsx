import React from 'react'
import style from '../PageStyles/Home.module.css'
import Banner from '../img/set.jpg'

export default function Home() {
  return (
    <div>
    <div 
    className={style.Banner}
    style={{backgroundImage: `url(${Banner})`}}
    />
     
    Home
    <div className={style.HomeContent}>
      Home Content
    </div>
    </div>
  )
}

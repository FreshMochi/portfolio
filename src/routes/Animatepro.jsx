import React from 'react'
import style from '../PageStyles/AnimationStyleSheet/btn.module.css'

export default function Animatepro() {
  return (
    <div className={style.AnimateContainer}>
      <div style={{margin: '0'}}><h1>CSS Animation Projects</h1></div>
      <div className={style.btnAnimate}>
        <div>
          <a href='#' className={style.btn00}>Hover Me</a>
        </div>
        <div>
          <a href='#' className={style.btn01}>Hover Me</a>
        </div>
        <div>
          <a href='#' className={style.btn02}><span></span>Hover Me</a>
        </div>
        <div>
          <a href='#' className={style.btn03}>Hover Me</a>
        </div>
        <div>
          <a href='#' className={style.btn04}><span>Hover me</span></a>
        </div>
        <div>
          <a href='#' className={style.btn05}><span>Hover me</span></a>
        </div>
        <div>
          <a href='#' id={style.btn06}>Hover Me<span id={style.btn06span}></span></a>
        </div>
        <div>
          <a href='#' className={style.btn07}>Hover Me</a>
        </div>
      </div>
      <div className='cards'>
        cards
      </div>
      
    </div>
  )
}

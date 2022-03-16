import React from 'react'
import style from '../PageStyles/AnimationStyleSheet/btn.module.css'
import  {motion } from 'framer-motion'



export default function Animatepro() {
  return (
    <div 
    className={style.AnimateContainer}>
      <div style={{margin: '0'}}><h1>CSS Animation Projects</h1></div>

      <div className={style.btnAnimate}>
        <div>
          <div className={style.btn00 }>Hover Me</div>
        </div>
        <div>
          <div className={style.btn01}>Hover Me</div>
        </div>
        <div>
          <div className={style.btn02}><span></span>Hover Me</div>
        </div>
        <div>
          <a className={style.btn03}>Hover Me</a>
        </div>
        <div>
          <div className={style.btn04}><span>Hover me</span></div>
        </div>
        <div>
          <div  className={style.btn05}><span>Hover me</span></div>
        </div>
        <div>
          <div  id={style.btn06}>Hover Me<span id={style.btn06span}></span></div>
        </div>
        <div>
          <div  className={style.btn07}>Hover Me</div>
        </div>
      </div>
      
    </div>
  )
}

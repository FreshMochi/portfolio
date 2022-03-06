import React from 'react'
import style from '../PageStyles/AnimationStyleSheet/btn.module.css'

export default function CSSProj() {
  return (
    <div className='CSScntnr'>
      <div><h1>CSS Animation Projects</h1></div>
      <div className={style.btnAnimate}>
        <div>
          <a className={style.btn00}>Hover Me</a>
        </div>
        <div>
          <a className={style.btn01}>Hover Me</a>
        </div>
        <div>
          <a className={style.btn02}><span></span>Hover Me</a>
        </div>
        <div>
          <a className={style.btn03}>Hover Me</a>
        </div>
        <div>
          <a className={style.btn04}>Hover Me</a>
        </div>
        <div>
          <a className={style.btn05}>Hover Me</a>
        </div>
        <div>
          <a className={style.btn06}>Hover Me</a>
        </div>
        <div>
          <a className={style.btn07}>Hover Me</a>
        </div>
      </div>
      <div className='cards'>
        cards
      </div>
      
    </div>
  )
}

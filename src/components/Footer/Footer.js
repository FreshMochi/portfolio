import React from 'react'
import style from './Footer.module.css'
import gmailPng from '../../img/icons/gmail-icon.png'
import igPng from '../../img/icons/ig.png'
import tweetPng from '../../img/icons/twitter.png'

export default function Footer() {
  return (
    <div className={style.ftCntnr}>
      <div className={style.ftCntnt}>
          <div className={style.smediaBtn}>
            <div className={style.smIcon} style={{backgroundImage: `url(${tweetPng})`}}> </div>
            <div className={style.smIcon} style={{backgroundImage: `url(${igPng})`}}> </div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nxiong984@gmail.com&su=SUBJECT&body=BODY" target="_blank">
            <div className={style.smIcon} style={{backgroundImage: `url(${gmailPng})`}}> </div>
            </a>
          </div>
          <div className={style.ftInfo}>
              <p>location: San Jose</p>
              <p>Email: Jukke.dev@gmail.com</p>
          </div>
      </div>
  </div>
  )
}

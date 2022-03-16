import React from 'react'
import style from './Footer.module.css'
import gmailPng from '../../img/icons/gmail-icon.png'
import gitPng from '../../img/icons/github.png'
import tweetPng from '../../img/icons/twitter.png'
import ContactMe from '../SignUp/ContactMe'
import logo from '../../img/elkicon.png'

export default function Footer() {
  return (
    <div className={style.ftCntnr}>
      <div className={style.ftCntnt} style={{backgroundImage: `url()`}}>
          <div className={style.smediaBtn}>
            <div className={style.smIcon} style={{backgroundImage: `url(${tweetPng})`}}> </div>
            
            <a 
            className={style.smIcon} 
            style={{backgroundImage: `url(${gitPng})`}}
            href="https://github.com/FreshMochi" target="_blank">
            </a>
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nxiong984@gmail.com&su=SUBJECT&body=BODY" target="_blank">
            <div className={style.smIcon} style={{backgroundImage: `url(${gmailPng})`}}> </div>
            </a>
          </div>
          <div className={style.ftInfo}>
            <div className={style.contactInfo}>
              <p>location: San Diego</p>
              <p>Email: nxiong@gmail.com</p>
              <div className={style.footerLogo}>
                <img style={{height: "inherit"}} src={logo} />
              </div>
            </div>
              <div>
                <ContactMe />
              </div>
          </div>
      </div>
  </div>
  )
}


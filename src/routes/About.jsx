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
      <div>
        <p>About me</p>
        <p>
          I am a self taught Programmer. I currently work about 50 hours a week as an assistant manager. I've bought a book on
          HTML && CSS and two books on Javascript. I've done online courses on web development. I am an aspiring Frontend developer.
        
        </p>
      </div>
        <div style={{display: 'flex', justifyContent: "center", alignItems: "center", width: '100%', margin: '30px 0'}}>
          <div style={{height: "50vh", width: '80%', backgroundColor: "green"}}>
          </div>
        </div>
      <div>
        Goal: I want to be a full stack developer and in the future, I want to learn unity.
      </div>
      <div>
        <div>
          HTML
          CSS,
          ES6,
          React
        </div>
        <div>
          Experienced in Node, Express, MongoDB, Firebase
        </div>
      </div>
    </div>
  )
}
